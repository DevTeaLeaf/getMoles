import { withTranslation } from "react-i18next";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { TFunction } from "i18next";

import { Header, Footer, Tokenomics, Roadmap, Team, FAQ } from "./components";
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
  mole1,
  mole2,
  mole3,
  mole4,
  mole5,
  mole6,
  mole7,
  mole8,
  mole9,
  mole10,
  hammer,
  referralBg,
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
      <div className="max-w-[1920px] mx-auto text-[#fff] mb-[200px] montserrat">
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
            <img src={moles} alt="Moles" className="ml-[-20px] z-[-1]" />
          </div>
          <div id="about">
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
                    <button className="bg-[#fff] rounded-[18px] button-shadow">
                      <p className="text-[#FFB800] py-5 px-7">
                        {t("read_whitepaper")}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ml-[120px] gap-[50px]">
                <img
                  src={telegram}
                  alt="telegram"
                  className="w-[102px] h-[102px]"
                />{" "}
                <img src={x} alt="x" className="w-[102px] h-[102px]" />
                <img
                  src={discord}
                  alt="discord"
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
          <div className="flex flex-col items-center gap-[72px]">
            <h1 className="text-[84px] text-[#FFB800] font-bold leading-[80px]">
              {t("be_ready_h1")}
            </h1>
            <button className="rounded-3xl bg-transparent border border-[#FFB800] w-[315px]">
              <p className="montserrat text-[20px] font-black py-5">
                {t("be_ready_button")}
              </p>
            </button>
            <div className="flex flex-col gap-[100px]">
              <div className="flex items-center gap-[80px]">
                <img src={mole1} alt="mole" />
                <img src={mole2} alt="mole" />
                <img src={mole3} alt="mole" />
                <img src={mole4} alt="mole" />
                <img src={mole5} alt="mole" />
              </div>
              <div className="flex items-center gap-[80px]">
                <img src={mole6} alt="mole" />
                <img src={mole7} alt="mole" />
                <img src={mole8} alt="mole" />
                <img src={mole9} alt="mole" />
                <img src={mole10} alt="mole" />
              </div>
            </div>
          </div>
          <div
            id="presale"
            className="flex items-stretch justify-evenly gap-[50px]"
          >
            <div className="flex flex-col justify-between">
              <h3 className="text-[36px] text-[#BAB5FF] font-bold uppercase tracking-wide">
                {t("price_growing")}
              </h3>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center gap-[10px]">
                  <h2 className="text-[72px]">08</h2>
                  <p className="text-[#C8C8C8] text-[14px] font-light poppins">
                    {t("days")}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                  <h2 className="text-[72px]">12</h2>
                  <p className="text-[#C8C8C8] text-[14px] font-light poppins">
                    {t("hours")}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                  <h2 className="text-[72px]">44</h2>
                  <p className="text-[#C8C8C8] text-[14px] font-light poppins">
                    {t("minutes")}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-[10px]">
                  <h2 className="text-[72px]">28</h2>
                  <p className="text-[#C8C8C8] text-[14px] font-light poppins">
                    {t("seconds")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5 text-[20px]">
                <p className="text-[#9C9AB6]">{t("hurry_buy")}</p>
                <p className="text-[#D89C01] font-black">1$</p>
              </div>
              <img src={mole8} alt="mole" className="mt-20 w-full" />
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-center gap-5 min-w-[650px]">
                <div className="flex items-center justify-between w-full leading-[22px] font-medium">
                  <p className="text-[#DEDEDE] text-[24px]">
                    {t("usdt_raised")}
                  </p>
                  <div className="flex text-[36px]">
                    <p className="mr-1 text-[#FFB800]">320 900</p> \
                    <p className="ml-1 text-[#DEDEDE]">800 000</p>
                  </div>
                </div>
                <div className="w-full h-[6px] bg-[#4F51B3] rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFC82C] transition-all w-1/2"></div>
                </div>
                <div className="flex self-start gap-2">
                  <div className="flex items-center gap-2 text-[24px] font-medium leading-4">
                    <div className="w-[14px] h-[14px] bg-[#FFC82C] rounded-full"></div>
                    <p className="opacity-90">{t("collected")}</p>
                    <p className="opacity-50">320 900</p>
                  </div>
                  <div className="flex items-center gap-2 text-[24px] font-medium leading-4">
                    <div className="w-[14px] h-[14px] bg-[#fff] opacity-20 rounded-full"></div>
                    <p className="opacity-90">{t("left")}</p>
                    <p className="opacity-50">800 000</p>
                  </div>
                </div>
              </div>
              <div className="mb-20">
                <div className="flex flex-col gap-10">
                  <div>
                    <h1 className="mb-5 text-[#DEDEDE] text-[36px] font-medium leading-[22px]">
                      {t("you_give")}
                    </h1>
                    <div className="border border-[#E9A801] px-[15px] flex items-center rounded-xl text-[20px] font-black">
                      <label
                        htmlFor="fromInput"
                        className="mr-5 text-[#D89C01] py-5"
                      >
                        USDT
                      </label>
                      <input
                        type="text"
                        id="fromInput"
                        className="border-none focus:outline-none flex-grow bg-transparent py-5"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="mb-5 text-[#DEDEDE] text-[36px] font-medium leading-[22px]">
                      {t("you_getting")}
                    </h1>
                    <div className="border border-[#E9A801] px-[15px] flex items-center rounded-xl text-[20px] font-black">
                      <label
                        htmlFor="tonput"
                        className="mr-5 text-[#D89C01] py-5"
                      >
                        TALPA
                      </label>
                      <input
                        type="text"
                        id="toInput"
                        className="border-none focus:outline-none flex-grow bg-transparent py-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-10 max-w-[315px] text-[20px] relative">
                  <p className="leading-[22px] font-medium">
                    {t("min_purchases")}
                  </p>
                  <button className="bg-[#FFB800] rounded-[18px]">
                    <p className="py-5 px-[10px] font-black">{t("confirm")}</p>
                  </button>
                  <img
                    src={hammer}
                    alt="hammer"
                    className="absolute z-[-1] right-[-120%] top-[30%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#FFB800] font-bold text-[84px] leading-[80px] tracking-[2px]">
              {t("referral_earnings")}
            </h1>
            <div className="flex mt-20 mb-10">
              <div className="bg-[#FFB800] rounded-[30px] h-[200px]">
                <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
                  <h1 className="text-[#E2E2E2] text-[36px] leading-10">01</h1>

                  <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
                    <span className="text-[#3C3EAB] text-[20px]">5%</span>
                    <span className="text-[15px]"> {t("referral_h3_1")}</span>
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF] rounded-[30px] h-[200px] mt-[200px]">
                <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
                  <h1 className="text-[#7E7FBB] text-[36px] leading-10">02</h1>

                  <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
                    <span className="text-[15px] text-[#3C3EAB]">
                      {" "}
                      {t("referral_h3_1")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-[#FFB800] rounded-[30px] h-[200px]">
                <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
                  <h1 className="text-[#E2E2E2] text-[36px] leading-10">03</h1>

                  <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
                    <span className="text-[15px]"> {t("referral_h3_3")}</span>
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#FFB800] rounded-[18px] min-w-[300px]">
              <p className="py-5 px-[10px] font-black">{t("copy_ref_link")}</p>
            </button>
            <img src={referralBg} alt="bg" className="absolute z-[-1]" />
          </div>
          <Roadmap />
          <Tokenomics />
          <Team />
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withTranslation()(Home);
