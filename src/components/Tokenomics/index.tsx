import { useState } from "react";

import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { motion } from "framer-motion";

import { Donut } from "./Donut";
import { MobileDonut } from "./MobileDonut";

import { TOKENOMICS, TOKENOMICS_SLICES } from "../../constants";

import type { TTokenomicsSliceAnimation } from "../../types";

interface IProps {
  t: TFunction;
}

const Tokenomics: React.FC<IProps> = ({ t }) => {
  const [animations, setAnimations] = useState<TTokenomicsSliceAnimation>({
    presale: false,
    p2e_staking: false,
    dex: false,
    community: false,
    team: false,
    advisors: false,
    marketing: false,
  });

  const slicesAnimation = {
    false: { x: 0 },
    true: { x: -30, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div id="tokenomics">
      <div className="hidden md:flex min-[1640px]:gap-[200px] xl:gap-[150px] px-5 relative xl:flex-row flex-col gap-[250px] xl:items-start items-center">
        <div className="flex flex-col gap-20 mt-[60px] z-[2]">
          <h1 className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[40px] xl:leading-[80px] sm:leading-[60px] leadning-10 font-bold  tracking-[2px] text-shadow">
            {t("tokenomics")}
          </h1>
          <div className="flex items-center gap-[30px]">
            <svg
              width="239"
              height="236"
              viewBox="0 0 239 236"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="min-[1640px]:w-[239px] min-[1640px]:h-[236px] h-[200px]"
            >
              <g filter="url(#filter0_d_488_7243)">
                <path
                  d="M153.907 102.779L197.377 102.779L180.342 187.11C169.964 195.114 157.921 201.263 144.214 205.558C130.508 209.853 116.311 212 101.626 212C81.0656 212 63.1489 208.291 47.8757 200.873C32.6025 193.455 20.7559 183.011 12.3361 169.541C4.11202 156.072 7.93016e-08 140.552 6.93889e-08 122.983C5.62821e-08 99.7532 5.38479 78.768 16.1544 60.0276C26.924 41.2873 42.0993 26.6464 61.6803 16.105C81.2614 5.36833 103.78 -5.85539e-08 129.235 -7.29161e-08C148.816 -8.3964e-08 165.754 3.02578 180.048 9.07734C194.538 15.1289 206.189 24.011 215 35.7237L180.929 63.2486C174.076 55.2449 166.341 49.4862 157.725 45.9724C149.11 42.2634 138.928 40.4088 127.179 40.4088C111.514 40.4088 105.64 25.7685 93.6954 32.7962C81.751 39.6286 64.5196 67.2505 57.862 79.3536C51.4003 91.4567 48.1694 105.024 48.1694 120.055C48.1694 135.867 53.2605 148.459 63.4426 157.829C73.8206 167.004 88.6043 171.591 107.794 171.591C119.934 171.591 131.291 169.151 141.865 164.271L153.907 102.779Z"
                  fill="#FFB800"
                />
              </g>
              <circle cx="127" cy="67" r="9" fill="#FFB800" />
              <defs>
                <filter
                  id="filter0_d_488_7243"
                  x="0"
                  y="0"
                  width="239"
                  height="236"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="20" dy="20" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_488_7243"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_488_7243"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="flex flex-col min-[1640px]:text-[64px] text-[48px] min-[1640px]:leading-[80px] leading-[60px]">
              <p className="font-semibold tracking-[2px]">TALPA</p>
              <p className="text-[#FFB800] font-light tracking-[-2px]">TOKEN</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] min-[1640px]:max-w-[880px] xl:max-w-[650px] max-w-full w-full z-[2]">
          <div className="flex items-center justify-between gap-[200px] xl:gap-[100px] poppins">
            <h3 className="text-shadow font-bold min-[1640px]:text-[48px] text-[36px] min-[1640px]:leading-[54px] leading-[44px] tracking-[-1px]">
              {t("governance_token")}
            </h3>
            <div className="flex items-center gap-9">
              <div>
                <p className="text-[#FFB800]  leading-[15px]">
                  {t("total_supply")}
                </p>
                <h3 className="font-medium min-[1640px]:text-[24px] text-[18px] min-[1640px]:leading-[28px] leading-[22px]">
                  3 000 000 000
                </h3>
              </div>
              <div>
                <p className="text-[#FFB800]  leading-[15px]">
                  {t("initial_price")}
                </p>
                <h3 className="font-medium min-[1640px]:text-[24px] text-[18px] min-[1640px]:leading-[28px] leading-[22px]">
                  TBA
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {TOKENOMICS.map((_, index) => (
              <motion.div
                key={_.name}
                variants={slicesAnimation}
                initial="false"
                animate={animations[_.name] ? "true" : "false"}
              >
                <div className="flex items-center justify-between gap-20">
                  <h3 className="text-[#D2D2CF] text-[24px] text-shadow font-medium leading-8 tracking-[-0.5px] w-[30%]">
                    {t(_.name)}
                  </h3>

                  <div className="flex-grow relative max-w-[560px]">
                    <div
                      style={{ borderColor: _.color }}
                      className="relative w-full h-[44px] bg-transparent border-[2px] rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial="hidden"
                        variants={TOKENOMICS_SLICES}
                        whileInView={`visible${index + 1}`}
                        viewport={{ once: true }}
                        style={{
                          backgroundColor: _.color,
                          width: `${_.percents}%`,
                        }}
                        className="h-full transition-all rounded-full"
                      ></motion.div>
                      <p className="absolute inset-0 flex items-center justify-center text-[#FFB800] leading-6 text-[24px]">
                        {_.percents}%
                      </p>
                      <p className="absolute inset-0 flex items-center justify-end pr-2 text-[#A5A5A5] leading-4">
                        {_.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="absolute top-[-20%]  xl:ml-[-200px]">
          <Donut setAnimations={setAnimations} />
        </motion.div>
      </div>
      <div className="md:hidden flex flex-col items-start relative min-[460px]:px-5 px-3 gap-5">
        <h3 className="text-[#FFB800] text-[32px] font-bold leading-9 mobile-text-shadow">
          {t("tokenomics")}
        </h3>
        <div className="flex items-start flex-col gap-5 poppins">
          <h3 className="text-shadow font-bold text-[16px] leading-5">
            {t("governance_token")}
          </h3>
          <div className="flex items-center gap-9">
            <div>
              <p className="text-[#FFB800] leading-[10px] text-[10px]">
                {t("total_supply")}
              </p>
              <h3 className="font-medium text-[14px] leading-4">
                3 000 000 000
              </h3>
            </div>
            <div>
              <p className="text-[#FFB800] leading-[10px] text-[10px]">
                {t("initial_price")}
              </p>
              <h3 className="font-medium text-[14px] leading-4">TBA</h3>
            </div>
          </div>
          <div className="rounded-[20px] bg-[#FFF] min-w-[320px]">
            <div className="flex flex-col gap-5 mx-5 my-[60px]">
              {TOKENOMICS.map((_) => (
                <div
                  key={_.name}
                  className="flex items-center justify-between gap-5 min-[460px]:gap-10 sm:gap-20"
                >
                  <div>
                    <h3 className="min-[460px]:text-[20px] text-[14px] font-medium leading-7 text-[#3C3EAB]">
                      {t(_.name)}
                    </h3>
                    <div
                      style={{ borderColor: _.color }}
                      className="relative min-[460px]:w-full h-[15px] bg-transparent border-[2px] rounded-full overflow-hidden min-[460px]:min-w-[150px] w-[100px]"
                    >
                      <div
                        style={{
                          backgroundColor: _.color,
                          width: `${_.percents}%`,
                        }}
                        className="h-full transition-all rounded-full"
                      ></div>
                    </div>
                  </div>
                  <p className="text-[#3C3EAB] text-[16px] leading-4 text-center">
                    {_.percents}%
                  </p>
                  <p className="text-[#A5A5A5] text-[13px] leading-4 whitespace-nowrap">
                    {_.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[-5%] z-[-1]">
          <MobileDonut />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Tokenomics);
