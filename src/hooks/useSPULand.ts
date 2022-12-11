import { ethers } from "ethers";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useAccount, useProvider } from "wagmi";
import abi from "../assets/abis/SPULandNFT.json";
import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from "ethereum-multicall";
import { parseMultiCall } from "../utils/parseMulticall";
import { MULTICALL_ADDRESS } from "../constants/ADDRESSES";

interface INFTData {
  rip: ethers.BigNumber;
  dailyPrice: ethers.BigNumber;
  leased: ethers.BigNumber;
  totalSupply: ethers.BigNumber;
}

export const useSPUNFT = (SPULandAddress: string) => {
  const provider = useProvider();

  const account = useAccount();
  const [nftData, setNftData] = useState<INFTData>();

  const multicall = useMemo(
    () =>
      new Multicall({
        ethersProvider: provider,
        tryAggregate: false,
        multicallCustomContractAddress: MULTICALL_ADDRESS, // multicall CELO and alfajores addr
      }),
    [provider]
  );

  const readContract = useMemo(() => {
    if (provider) {
      return new ethers.Contract(SPULandAddress, abi.abi, provider);
    }
  }, [provider]);

  const getSPUNFTInfos = useCallback(async () => {
    if (readContract) {
      const contractCallContext: ContractCallContext[] = [
        {
          reference: "nft",
          contractAddress: SPULandAddress,
          abi: abi.abi,
          calls: [
            {
              reference: "rip",
              methodName: "rip()",
              methodParameters: [],
            },
            {
              reference: "dailyPrice",
              methodName: "dailyPrice()",
              methodParameters: [],
            },
            {
              reference: "leased",
              methodName: "leased()",
              methodParameters: [],
            },
            {
              reference: "totalSupply",
              methodName: "totalSupply()",
              methodParameters: [],
            },
          ],
        },
      ];

      const results: ContractCallResults = await multicall.call(
        contractCallContext
      );

      const data = parseMultiCall<INFTData>(
        results.results.nft.callsReturnContext
      );

      setNftData(data);
    }
  }, [readContract, multicall, account]);

  useEffect(() => {
    getSPUNFTInfos();
  }, [readContract, account.address]);

  return {
    nftData,
  };
};
