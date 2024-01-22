import { WagmiConfig } from "wagmi";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import Home from "./Home";

import { walletConnectProjectId, wagmiConfig, chains } from "./web3";

createWeb3Modal({ wagmiConfig, projectId: walletConnectProjectId, chains });

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Home />
    </WagmiConfig>
  );
};

export default App;
