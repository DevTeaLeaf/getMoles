import { withTranslation } from "react-i18next";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { TFunction } from "i18next";

import {
  Header,
  Footer,
  Tokenomics,
  Roadmap,
  Team,
  FAQ,
  Ticker,
  ReferralEarnings,
  Presale,
} from "./components";

import {
  h1_logo,
  moles,
  rocket,
  group,
  target,
  discord,
  x,
  telegram,
  youtube,
  mole21,
  mole6,
} from "./assets";

interface IProps {
  t: TFunction;
}

const Home: React.FC<IProps> = ({ t }) => {
  const { address } = useAccount();

  const { open } = useWeb3Modal();

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <div className="max-w-[1920px] mx-auto text-[#fff] mb-[100px] md:mb-[200px] montserrat flex-1">
          <div className="flex flex-col md:gap-[150px] gap-[50px] mt-[50px] md:mt-[150px]">
            <div className="flex min-[1440px]:flex-row flex-col min-[1440px]:items-start items-center justify-center px-5">
              <div className="flex flex-col gap-10 ">
                <img
                  src={h1_logo}
                  alt="logo"
                  className="min-[1820px]:max-w-[850px] md:max-w-[650px] max-w-[320px]"
                />
                <p className="montserrat min-[1820px]:text-[32px] md:text-[24px] text-[20px] max-w-[750px] font-medium">
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
                  <a
                    href="#presale"
                    className="rounded-3xl bg-transparent border border-[#FFB800] w-[315px]"
                  >
                    <p className="montserrat text-center text-[20px] font-black py-5">
                      {t("buy_token")}
                    </p>
                  </a>
                </div>
              </div>
              <img
                src={moles}
                alt="Moles"
                className="min-[1720px]:ml-[-20px] z-[-1] mt-[-50px] min-[1720px]:mt-0 min-[1820px]:w-[880px] w-[650px]"
              />
            </div>

            <div className="relative px-5" id="about">
              <img
                src={mole6}
                alt="mole"
                className="min-[1820px]:w-[736px] min-[1820px]:h-[736px] w-[650px] h-[650px] absolute z-[-1] min-[1820px]:right-[20%] right-[30%] top-[5%] lg:block hidden"
              />
              <h1 className="text-[#FFB800] min-[1820px]:max-w-[1180px] max-w-[700px] font-bold min-[1820px]:text-[84px] sm:text-[64px] text-[30px] min-[1820px]:leading-[80px] md:leading-[60px] leading-10 text-shadow">
                {t("home_h1")}
              </h1>
              <h3 className="min-[1820px]:leading-[83px] leading-[30px] min-[1820px]:text-[48px] sm:text-[40px] text-[24px] font-semibold sm:py-10 py-5">
                {t("home_h3")}
              </h3>
              <div className="about flex xl:flex-row flex-col">
                <div className="flex items-center lg:items-stretch  lg:flex-row flex-col">
                  <div className="bg-[#fff] rounded-[53px] min-[1820px]:max-w-[350px] lg:max-w-[300px] max-w-[500px] lg:min-h-[650px] card-shadow">
                    <div className="p-10 flex flex-col justify-between h-full lg:gap-0 gap-10">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[#3C3EAB] min-[1820px]:leading-10 leading-8 min-[1820px]:text-[28px] text-[24px] font-medium">
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
                  <div className="bg-[#fff] rounded-[53px] min-[1820px]:max-w-[350px] lg:max-w-[300px] max-w-[500px] lg:min-h-[650px] card-shadow lg:ml-[-10px] lg:mt-0 mt-[-50px]">
                    <div className="p-10 flex flex-col justify-between h-full lg:gap-0 gap-10">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[#3C3EAB] min-[1820px]:leading-10 leading-8 min-[1820px]:text-[28px] text-[24px] font-medium">
                          {t("home_question_2")}
                        </h3>
                        <p className="text-[#373899] min-[1820px]:text-[20px] text-[18px] min-[1820px]:leading-7 leading-6">
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
                  <div className="bg-[#FFB800] rounded-[53px] min-[1820px]:max-w-[745px] lg:max-w-[650px] max-w-[500px] min-h-[650px] card-shadow lg:ml-[-10px] lg:mt-0 mt-[-50px]">
                    <div className="p-10 flex flex-col justify-between h-full lg:gap-0 gap-10">
                      <div className="flex flex-col gap-4 text-[#fff]">
                        <h3 className="min-[1820px]:leading-10 leading-8 min-[1820px]:text-[28px] text-[24px] font-semibold">
                          {t("home_question_3")}
                        </h3>
                        <p className="min-[1820px]:text-[20px] text-[18px] min-[1820px]:leading-7 leading-6">
                          {t("home_answer_3_1")}
                        </p>
                        <p className="min-[1820px]:text-[20px] text-[18px] min-[1820px]:leading-7 leading-6">
                          {t("home_answer_3_2")}
                        </p>
                        <p className="min-[1820px]:text-[20px] text-[18px] min-[1820px]:leading-7 leading-6">
                          {t("home_answer_3_3")}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <img
                          src={target}
                          alt="target"
                          className="sm:max-w-[83px] sm:max-h-[83px] max-w-[60px] max-h-[60px] items-end"
                        />
                        <button className="bg-[#fff] rounded-[18px] button-shadow">
                          <p className="text-[#FFB800] py-5 sm:px-7 px-5">
                            {t("read_whitepaper")}
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex xl:flex-col flex-row min-[1720px]:mt-0 mt-10 items-center justify-center lg:ml-[120px] sm:gap-[50px] gap-5 ">
                  <img
                    src={telegram}
                    alt="telegram"
                    className="sm:w-[102px] sm:h-[102px] w-[51px] h-[51px]"
                  />
                  <img
                    src={x}
                    alt="x"
                    className="sm:w-[102px] sm:h-[102px] w-[51px] h-[51px]"
                  />
                  <img
                    src={discord}
                    alt="discord"
                    className="sm:w-[102px] sm:h-[102px] w-[51px] h-[51px]"
                  />
                  <img
                    src={youtube}
                    alt="youtube"
                    className="sm:w-[102px] sm:h-[102px] w-[51px] h-[51px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 md:gap-[72px] relative px-5">
              <img
                src={mole21}
                alt="mole"
                className="absolute z-[-1] min-[1820px]:right-0 right-[20%] top-[-20%] min-[1820px]:w-[816px] w-[650px] lg:block hidden"
              />

              <h1 className="min-[1820px]:text-[84px] xl:text-[64px] text-[32px] min-[1820px]:leading-[80px] lg:leading-[60px] leading-[35px] text-[#FFB800] font-bold min-[1820px]:max-w-[1180px] lg:max-w-[900px] md:max-w-[600px] max-w-[320px]  md:text-shadow mobile-text-shadow">
                {t("be_ready_h1")}
              </h1>
              <a
                href="#presale"
                className="rounded-3xl bg-transparent border border-[#FFB800] md:w-[315px] w-[210px]"
              >
                <p className="montserrat text-[20px] font-black py-5 text-center">
                  {t("be_ready_button")}
                </p>
              </a>
              <Ticker />
            </div>
            <Presale />
            <ReferralEarnings />
          </div>
        </div>
      </div>

      <Roadmap />

      <div className="flex flex-col min-h-screen">
        <div className="max-w-[1920px] mx-auto text-[#fff] mb-[100px] md:mb-[200px] montserrat flex-1">
          <div className="flex flex-col md:gap-[150px] gap-[50px] mt-[150px]">
            <Tokenomics />
            <Team />
            <FAQ />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withTranslation()(Home);
