import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWallet } from "../components/ConnectWallet";
import imgLogoSrc from "../assets/img/logo.png";

import { Navigate } from "react-router-dom";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: "uJRfcYXqu3MUySRA9s6RUpbbplJGz4Fk" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export function Login() {
  return (
    <div className="bg-login">
      <div className="row">
        <div className="col-1 col-sm-2 col-md-4"></div>
        <div className="col-10 col-sm-8 col-md-4 bg-white rounded shadow my-5 p-5">
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <div className="d-flex justify-content-center pb-5 border-bottom">
                <img src={imgLogoSrc} width="350" className="w-100" />
              </div>
              <div className="text-center mt-5">
                <h2>Identificação</h2>
                <p className="lead">Para começar, conecte-se a uma carteira</p>
                <div className="d-flex justify-content-center">
                  <ConnectWallet />
                </div>
              </div>
            </RainbowKitProvider>
          </WagmiConfig>
        </div>
      </div>
    </div>
  );
}
