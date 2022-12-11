import { ethers } from "ethers";
import { createContext, useContext } from "react";
import { ISPUMarketData } from "../providers/SPUMarketProvider";

type SPUMarketContextProps = {
  readContract: ethers.Contract | null;
  writeContract: ethers.Contract | null;
  data: ISPUMarketData;
  reloadData: () => Promise<any>;
  createLand: (
    rip: number,
    fractions: number,
    price: number
  ) => Promise<{ rip: ethers.BigNumber; nft: string } | undefined>;
  rent: (
    rip: number,
    amount: number,
    days: number
  ) => Promise<
    | {
        rip: ethers.BigNumber;
        nft: string;
        wallet: string;
      }
    | undefined
  >;
  listMyLands: () => Promise<string[] | undefined>;
};

export const SPUMarketContext = createContext({} as SPUMarketContextProps);

export const useSPUMarket = () => {
  const ctx = useContext(SPUMarketContext);

  return ctx;
};
