import { withTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { TFunction } from "i18next";

import Timer from "./Timer";

import { hammer, mole9 } from "../../assets";

import { FADE_IN_LEFT_VARIANTS } from "../../constants";

interface IProps {
  t: TFunction;
}

const Presale: React.FC<IProps> = ({ t }) => {
  return (
    <div
      id="presale"
      className="flex items-center md:items-stretch justify-evenly min-[1600px]:gap-[50px] gap-5 min-[1440px]:px-0 md:px-5 px-1 xl:flex-row flex-col"
    >
      <div className="flex flex-col justify-between">
        <p className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[32px] xl:leading-[80px] sm:leading-[60px] leadning-8 font-bold  tracking-[2px] md:text-shadow mobile-text-shadow mb-10">
          {t("presale")}
        </p>
        <h3 className="min-[1600px]:text-[36px] md:text-[32px] sm:text-[24px] text-[16px] text-[#BAB5FF] font-bold uppercase tracking-wide">
          {t("price_growing")}
        </h3>
        <Timer />
        <div className="flex items-center gap-3 mt-5 min-[1600px]:text-[20px] md:text-[18px] text-[13px]">
          <p className="text-[#9C9AB6]">{t("hurry_buy")}</p>
          <p className="text-[#D89C01] font-black text-[32px] md:text-auto">
            1$
          </p>
        </div>
        <motion.div
          variants={FADE_IN_LEFT_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={mole9}
            alt="mole"
            className="min-[1600px]:mt-20 mt-10 min-[1600px]:w-[734px] min-[1600px]:h-[734px] w-[650px] h-[650px] lg:block hidden"
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center gap-[90px]">
        <div className="flex flex-col items-center gap-5 min-w-[320px] md:min-w-[650px]">
          <div className="flex items-center justify-between w-full leading-[22px] font-medium">
            <p className="text-[#DEDEDE] md:text-[24px] text-[16px]">
              {t("usdt_raised")}
            </p>
            <div className="flex min-[1600px]:text-[36px] md:text-[30px] text-[18px]">
              <p className="mr-1 text-[#FFB800]">320 900</p> \
              <p className="ml-1 text-[#DEDEDE]">800 000</p>
            </div>
          </div>
          <div className="w-full md:h-[6px] h-1 bg-[#4F51B3] rounded-full overflow-hidden">
            <div className="h-full bg-[#FFC82C] transition-all w-1/2"></div>
          </div>
          <div className="flex self-start gap-2">
            <div className="flex items-center gap-2 md:text-[24px] text-[18px] font-medium leading-4">
              <div className="md:w-[14px] md:h-[14px] w-[10px] h-[10px] bg-[#FFC82C] rounded-full"></div>
              <p className="opacity-90">{t("collected")}</p>
              <p className="opacity-50">320 900</p>
            </div>
            <div className="flex items-center gap-2 md:text-[24px] text-[18px] font-medium leading-4">
              <div className="md:w-[14px] md:h-[14px] w-[10px] h-[10px] bg-[#fff] opacity-20 rounded-full"></div>
              <p className="opacity-90">{t("left")}</p>
              <p className="opacity-50">800 000</p>
            </div>
          </div>
        </div>
        <div className="mb-20 md:bg-transparent bg-[#FFF] max-w-[360px] md:max-w-full rounded-[25px] md:rounded-none md:block flex flex-col items-center">
          <div className="py-[30px] px-5 md:py-0 md:px-0 flex flex-col items-center md:block">
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="mb-5 text-[#3C3EAB] md:text-[#DEDEDE] text-[24px] md:text-[36px] font-medium leading-[22px]">
                  {t("you_give")}
                </h1>
                <div className="border md:border-[#E9A801] border-[#3C3EAB] px-[15px] flex items-center rounded-xl text-[20px] font-black max-w-[320px] md:max-w-full">
                  <label
                    htmlFor="fromInput"
                    className="mr-5 md:text-[#D89C01] text-[#3C3EAB] py-5"
                  >
                    USDT
                  </label>
                  <input
                    type="text"
                    id="fromInput"
                    className="border-none focus:outline-none flex-grow bg-transparent py-5 md:text-[#D89C01] text-[#3C3EAB]"
                  />
                </div>
              </div>
              <div>
                <h1 className="mb-5 text-[#3C3EAB] md:text-[#DEDEDE] text-[24px] md:text-[36px] font-medium leading-[22px]">
                  {t("you_getting")}
                </h1>
                <div className="border md:border-[#E9A801] border-[#3C3EAB] px-[15px] flex items-center rounded-xl text-[20px] font-black max-w-[320px] md:max-w-full">
                  <label
                    htmlFor="tonput"
                    className="mr-5 md:text-[#D89C01] text-[#3C3EAB] py-5"
                  >
                    TALPA
                  </label>
                  <input
                    type="text"
                    id="toInput"
                    className="border-none focus:outline-none flex-grow bg-transparent py-5 md:text-[#D89C01] text-[#3C3EAB]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-10 max-w-[315px] text-[20px] relative">
              <p className="leading-[22px] font-medium text-[#3C3EAB] md:text-[#FFF] md:text-[20px] text-[16px]">
                {t("min_purchases")}
              </p>
              <button className="bg-[#FFB800] rounded-[18px]">
                <p className="py-5 px-[10px] font-black">{t("confirm")}</p>
              </button>

              <img
                src={hammer}
                alt="hammer"
                className="absolute z-[-1] right-[-120%] top-[30%] md:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Presale);
