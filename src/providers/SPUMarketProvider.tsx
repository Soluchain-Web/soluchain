import {
  ContractCallContext,
  ContractCallResults,
  Multicall,
} from "ethereum-multicall";
import { ethers } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSigner, useAccount, useProvider } from "wagmi";
import { MULTICALL_ADDRESS, SPU_MARKET_ADDRESS } from "../constants/ADDRESSES";
import abi from "../assets/abis/SPUMarket.json";
import { parseMultiCall } from "../utils/parseMulticall";
import { SPUMarketContext } from "../hooks/useSPUMarket";

export interface ISPUMarketData {
  landsCreated: string[];
}

export const SPUMarketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: signer } = useSigner();
  const account = useAccount();
  const provider = useProvider();
  const [data, setData] = useState<ISPUMarketData>({
    landsCreated: [],
  } as ISPUMarketData);

  const multicall = useMemo(
    () =>
      new Multicall({
        ethersProvider: provider,
        tryAggregate: false,
        multicallCustomContractAddress: MULTICALL_ADDRESS, // multicall CELO and alfajores addr
      }),
    [provider]
  );

  const writeContract = useMemo(() => {
    if (signer) {
      return new ethers.Contract(SPU_MARKET_ADDRESS, abi.abi, signer);
    }
    return null;
  }, [signer]);

  const readContract = useMemo(() => {
    if (provider) {
      return new ethers.Contract(SPU_MARKET_ADDRESS, abi.abi, provider);
    }
    return null;
  }, [provider]);

  const getDetails = useCallback(async () => {
    if (readContract && multicall) {
      const contractCallContext: ContractCallContext[] = [
        {
          reference: "market",
          contractAddress: SPU_MARKET_ADDRESS,
          abi: abi.abi,
          calls: [
            {
              reference: "landsCreated",
              methodName: "landsCreated()",
              methodParameters: [],
            },
          ],
        },
      ];

      const results: ContractCallResults = await multicall.call(
        contractCallContext
      );

      const data = parseMultiCall<ISPUMarketData>(
        results.results.market.callsReturnContext
      );

      setData(data);
    }
  }, [readContract, multicall, account]);

  const createLand = useCallback(
    async (rip: number, fractions: number, price: number) => {
      if (writeContract) {
        const tx = await writeContract.createLand(rip, fractions, price);
        const waited = await tx.wait();

        const event = waited.events.find(
          (event: any) => event.event === "LandCreated"
        );

        console.log("[createLand] event", event.args);

        return event.args as { rip: ethers.BigNumber; nft: string };
      }
    },
    [writeContract]
  );

  const rent = useCallback(
    async (rip: number, amount: number, days: number) => {
      if (writeContract && readContract) {
        const landDetails = await readContract!.callStatic.getLandDetail(rip);

        const landDailyPrice = landDetails[1] as ethers.BigNumber;

        const tx = await writeContract.rent(rip, amount, days, {
          value: ethers.BigNumber.from(landDailyPrice).mul(amount).mul(days),
        });
        const waited = await tx.wait();

        const event = waited.events.find(
          (event: any) => event.event === "LandLeased"
        );

        console.log("[rent] event", event.args);

        return event.args as {
          rip: ethers.BigNumber;
          nft: string;
          wallet: string;
        };
      }
    },
    [writeContract]
  );

  const listMyLands = useCallback(async () => {
    if (writeContract && account) {
      const myLands = (await writeContract.leasedLandsByWallet(
        account.address
      )) as string[];

      return myLands;
    }
  }, [writeContract, account]);

  useEffect(() => {
    getDetails();
  }, [account.address]);

  const reloadData = useCallback(async () => {
    await getDetails();
  }, [getDetails]);

  return (
    <SPUMarketContext.Provider
      value={{
        readContract,
        writeContract,
        reloadData,
        createLand,
        rent,
        listMyLands,
        data,
      }}
    >
      {children}
    </SPUMarketContext.Provider>
  );
};
