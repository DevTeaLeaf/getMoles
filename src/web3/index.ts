import { configureChains, createConfig } from "wagmi";
import { defineChain } from "viem";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { EIP6963Connector } from "@web3modal/wagmi";

import TokenABI from "./abi/Token.json";
import TokenSaleABI from "./abi/TokenSale.json";

const walletConnectProjectId = "ca2e9c541f075c8f9f6e898747ea4b8c";
const TALPA = "0xfAa712DF9b4C992D8acE0143E1DD6997C9531F65";
const USDT = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";
const TOKEN_SALE = "0x46355035526456ad6C9f31220aD2d99e9428A291";

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

export {
  walletConnectProjectId,
  polygon,
  chains,
  publicClient,
  wagmiConfig,
  TALPA,
  USDT,
  TOKEN_SALE,
  TokenABI,
  TokenSaleABI,
};
