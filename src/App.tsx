import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { publicProvider } from "wagmi/providers/public";
import {
  connectorsForWallets,
  RainbowKitProvider,
  // Wallet,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  omniWallet,
  walletConnectWallet,
  trustWallet,
  braveWallet,
} from "@rainbow-me/rainbowkit/wallets";
import Valora from "./wallets/Valora";
import CeloWallet from "./wallets/CeloWallet";
import CeloDance from "./wallets/CeloDance";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { CUSTOM_CHAINS } from "./constants/CUSTOM_CHAINS";
import { SPUMarketProvider } from "./providers/SPUMarketProvider";

const { chains, provider } = configureChains(Object.values(CUSTOM_CHAINS), [
  publicProvider(),
]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended with CELO",
    wallets: [
      Valora({ chains }),
      CeloWallet({ chains }),
      CeloDance({ chains }),
    ],
  },
  {
    groupName: "Also works",
    wallets: [
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      walletConnectWallet({ chains }),
      trustWallet({ chains }),
      braveWallet({ chains }),
    ],
  },
]);

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App() {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <SPUMarketProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SPUMarketProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
