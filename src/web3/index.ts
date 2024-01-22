import { configureChains, createConfig } from "wagmi";
import { defineChain } from "viem";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { EIP6963Connector } from "@web3modal/wagmi";

const walletConnectProjectId = "ca2e9c541f075c8f9f6e898747ea4b8c";

const metadata = {
  name: "GetMoles",
  description: "", //getmoles description
  url: "", //getmoles url
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const polygon = defineChain({
  id: 137,
  name: "Polygon",
  network: "polygon",
  nativeCurrency: {
    decimals: 18,
    name: "Matic",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com/"],
      webSocket: ["wss://polygon-rpc.com/"],
    },
    public: {
      http: ["https://polygon-rpc.com/"],
      webSocket: ["wss://polygon-rpc.com/"],
    },
  },
});

const { chains, publicClient } = configureChains(
  [polygon],
  //   [walletConnectProvider({ projectId: walletConnectProjectId }), publicProvider()]
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        projectId: walletConnectProjectId,
        showQrModal: false,
        metadata,
      },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
});

export { walletConnectProjectId, polygon, chains, publicClient, wagmiConfig };
