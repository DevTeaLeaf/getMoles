import { withTranslation } from "react-i18next";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { TFunction } from "i18next";

import { Header, Footer } from "./components";
import { h1_logo, moles1 } from "./assets";

interface IProps {
  t: TFunction;
}

const Home: React.FC<IProps> = ({ t }) => {
  const { address } = useAccount();

  const { open } = useWeb3Modal();
  return (
    <>
      <Header />
      <div className="max-w-[1920px] px-[100px] mx-auto text-[#fff]">
        <div className="flex flex-col gap-[150px] mt-[150px]">
          <div className="flex">
            <div className="flex flex-col gap-10 ">
              <img src={h1_logo} alt="logo" className="max-w-[850px]" />
              <p className="montserrat text-[32px] max-w-[750px] font-medium">
                {t("main_description")}
              </p>
              <div className="flex items-start flex-col gap-[30px]">
                {!address && (
                  <button
                    onClick={() => open()}
                    className="bg-[#FFB800] rounded-3xl w-[315px]"
                  >
                    <p className="montserrat text-[20px] font-black py-5">
                      {t("connect_wallet")}
                    </p>
                  </button>
                )}
                <button className="rounded-3xl bg-transparent border border-[#FFB800] w-[315px]">
                  <p className="montserrat text-[20px] font-black py-5">
                    {t("buy_token")}
                  </p>
                </button>
              </div>
            </div>
            <img src={moles1} alt="Moles" className="ml-[-20px] z-[-1]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withTranslation()(Home);
