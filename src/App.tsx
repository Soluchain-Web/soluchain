import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CUSTOM_CHAINS } from "./constants/CUSTOM_CHAINS";
import {
  metaMaskWallet,
  omniWallet,
  walletConnectWallet,
  trustWallet,
  coinbaseWallet,
  braveWallet,
} from "@rainbow-me/rainbowkit/wallets";
import Valora from "./wallets/Valora";
import CeloWallet from "./wallets/CeloWallet";
import CeloDance from "./wallets/CeloDance";
import { ChainIdProvider } from "./providers/ChainIdProvider";

const { chains, provider } = configureChains(Object.values(CUSTOM_CHAINS),
  [
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recomendada com CELO",
    wallets: [
      Valora({ chains }),
      CeloWallet({ chains }),
      CeloDance({ chains }),
    ],
  },
  {
    groupName: "Também funciona",
    wallets: [
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      walletConnectWallet({ chains }),
      trustWallet({ chains }),
      coinbaseWallet({ appName: "Soluchain", chains }),
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
    <ChainIdProvider>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChainIdProvider>
  );
}