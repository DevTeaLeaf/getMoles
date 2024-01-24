import { withTranslation } from "react-i18next";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { TFunction } from "i18next";

import { Header, Footer } from "./components";
import {
  h1_logo,
  moles1,
  rocket,
  group,
  target,
  discord,
  x,
  telegram,
  youtube,
} from "./assets";

interface IProps {
  t: TFunction;
}

const Home: React.FC<IProps> = ({ t }) => {
  const { address } = useAccount();

  const { open } = useWeb3Modal();
  return (
    <div className="flex flex-col">
      <Header />
      <div className="max-w-[1920px] mx-auto text-[#fff] mb-[200px]">
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
          <div className="montserrat">
            <h1 className="text-[#FFB800] max-w-[1180px] font-bold text-[84px] leading-[80px]">
              {t("home_h1")}
            </h1>
            <h3 className="leading-[83px] text-[48px] font-semibold py-10">
              {t("home_h3")}
            </h3>
            <div className="flex items-stretch">
              <div className="bg-[#fff] rounded-[53px] max-w-[350px] min-h-[650px] card-shadow">
                <div className="p-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#3C3EAB] leading-10 text-[28px] font-medium">
                      {t("home_question_1")}
                    </h3>
                    <p className="text-[#373899] text-[20px] leading-7">
                      {t("home_answer_1")}
                    </p>
                  </div>
                  <img
                    src={rocket}
                    alt="rocket"
                    className="max-w-[83px] max-h-[83px] items-end"
                  />
                </div>
              </div>
              <div className="bg-[#fff] rounded-[53px] max-w-[350px] min-h-[650px] card-shadow ml-[-10px]">
                <div className="p-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#3C3EAB] leading-10 text-[28px] font-medium">
                      {t("home_question_2")}
                    </h3>
                    <p className="text-[#373899] text-[20px] leading-7">
                      {t("home_answer_2")}
                    </p>
                  </div>
                  <img
                    src={group}
                    alt="group"
                    className="max-w-[83px] max-h-[83px] items-end"
                  />
                </div>
              </div>
              <div className="bg-[#FFB800] rounded-[53px] max-w-[745px] min-h-[650px] card-shadow ml-[-10px]">
                <div className="p-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4 text-[#fff]">
                    <h3 className="leading-10 text-[28px] font-semibold">
                      {t("home_question_3")}
                    </h3>
                    <p className="text-[20px] leading-7">
                      {t("home_answer_3_1")}
                    </p>
                    <p className="text-[20px] leading-7">
                      {t("home_answer_3_2")}
                    </p>
                    <p className="text-[20px] leading-7">
                      {t("home_answer_3_3")}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <img
                      src={target}
                      alt="target"
                      className="max-w-[83px] max-h-[83px] items-end"
                    />
                    <button className="bg-[#fff] rounded-[18px]">
                      <p className="text-[#FFB800] py-5 px-7">
                        {t("read_whitepaper")}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ml-[120px] gap-[50px]">
                <img
                  src={discord}
                  alt="discord"
                  className="w-[102px] h-[102px]"
                />
                <img src={x} alt="x" className="w-[102px] h-[102px]" />
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[102px] h-[102px]"
                />
                <img
                  src={youtube}
                  alt="youtube"
                  className="w-[102px] h-[102px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withTranslation()(Home);
