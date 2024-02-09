import { withTranslation } from "react-i18next";

import { useAccount } from "wagmi";

import { useWeb3Modal } from "@web3modal/wagmi/react";

import { motion } from "framer-motion";

import { TFunction } from "i18next";

import { referralBg } from "../../assets";

interface IProps {
  t: TFunction;
}

const ReferralEarnings: React.FC<IProps> = ({ t }) => {
  const { address, isConnected } = useAccount();

  const { open } = useWeb3Modal();

  const copyRefLink = () => {
    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.set("ref", address as string);

    navigator.clipboard.writeText(currentUrl.href);
    alert("Link copied!");
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
  };
  return (
    <div className="flex flex-col items-center justify-center relative px-5">
      <h1 className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[32px] xl:leading-[80px] sm:leading-[60px] leadning-8 font-bold  tracking-[2px] md:text-shadow mobile-text-shadow">
        {t("referral_earnings")}
      </h1>
      <div className="flex md:flex-row flex-col sm:mt-20 mt-10 mb-10">
        <div className="bg-[#FFB800] rounded-[30px] h-[200px]">
          <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
            <h1 className="text-[#E2E2E2] text-[36px] leading-10">01</h1>
            <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
              <span className="text-[#3C3EAB] text-[20px]">5%</span>
              <span className="text-[15px]"> {t("referral_h3_1")}</span>
            </p>
          </div>
        </div>
        <div className="bg-[#FFF] rounded-[30px] h-[200px] md:mt-[200px] mt-[-10%]">
          <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
            <h1 className="text-[#7E7FBB] text-[36px] leading-10">02</h1>

            <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
              <span className="text-[15px] text-[#3C3EAB]">
                {t("referral_h3_2")}
              </span>
            </p>
          </div>
        </div>
        <div className="bg-[#FFB800] rounded-[30px] h-[200px] md:mt-0 mt-[-10%]">
          <div className="py-6 pl-6 pr-12 flex flex-col items-start gap-4">
            <h1 className="text-[#E2E2E2] text-[36px] leading-10">03</h1>

            <p className="flex gap-2 items-center max-w-[220px] font-bold leading-[125%] uppercase">
              <span className="text-[15px]"> {t("referral_h3_3")}</span>
            </p>
          </div>
        </div>
      </div>
      {isConnected ? (
        <button
          onClick={copyRefLink}
          className="md:bg-[#FFB800] bg-[#FFF] rounded-[18px] min-w-[300px] transition-transform duration-300 transform hover:scale-105"
        >
          <p className="py-5 px-[10px] font-black md:text-[#FFF] text-[#FFB800]">
            {t("copy_ref_link")}
          </p>
        </button>
      ) : (
        <button
          onClick={() => open()}
          className="md:bg-[#FFB800] bg-[#FFF] rounded-[18px] min-w-[300px] transition-transform duration-300 transform hover:scale-105"
        >
          <p className="py-5 px-[10px] font-black md:text-[#FFF] text-[#FFB800]">
            {t("connect_wallet")}
          </p>
        </button>
      )}
      <motion.img
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        src={referralBg}
        alt="bg"
        className="absolute lg:top-[-10%] top-[20%] z-[-1] md:block hidden"
      />
    </div>
  );
};
export default withTranslation()(ReferralEarnings);
