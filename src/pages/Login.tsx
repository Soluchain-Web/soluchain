import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWallet } from "../components/ConnectWallet";

import { Navigate } from "react-router-dom";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: 'uJRfcYXqu3MUySRA9s6RUpbbplJGz4Fk' }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});


export function Login(){
    return(
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <ConnectWallet />
            </RainbowKitProvider>
      </WagmiConfig>
    )
}
