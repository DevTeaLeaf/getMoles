import { useState, useEffect, useRef } from "react";

import { withTranslation } from "react-i18next";

import { usePublicClient, useAccount } from "wagmi";
import { formatUnits, parseUnits, maxUint256 } from "viem";
import { readContract } from "viem/actions";
import { writeContract } from "@wagmi/core";
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { motion } from "framer-motion";

import { TFunction } from "i18next";

import Timer from "./Timer";

import { hammer, mole9 } from "#assets";

import { TALPA, TOKEN_SALE, TokenABI, TokenSaleABI, USDT } from "#web3";

import { formatNumber } from "#utils";

import { FADE_IN_LEFT_VARIANTS, TOTAL_SCOPE } from "#constants";

interface IProps {
  t: TFunction;
}

const Presale: React.FC<IProps> = ({ t }) => {
  const publicClient = usePublicClient();

  const { address, isConnected } = useAccount();

  const { open } = useWeb3Modal();

  const talpaRef = useRef<HTMLInputElement>(null);
  const usdtRef = useRef<HTMLInputElement>(null);

  const [inputsValues, setInputsValues] = useState({ talpa: "", usdt: "" });
  const [raisedData, setRaisedData] = useState({
    raised: "0",
    left: "0",
    percents: 0,
  });
  const [price, setPrice] = useState(0);
  const [stage, setStage] = useState(0);
  const [minAmountToBuy, setMinAmountToBuy] = useState(0);
  const [allowance, setAllowance] = useState<any>(0);
  const [txHash, setTxHash] = useState("");

  const checkAllowance = async () => {
    const allowance = await readContract(publicClient, {
      address: USDT,
      abi: TokenABI,
      functionName: "allowance",
      args: [address, TOKEN_SALE],
    });
    setAllowance(formatUnits(allowance as bigint, 6));
  };

  const approve = async () => {
    try {
      const approveToken = await writeContract({
        address: USDT,
        abi: TokenABI,
        functionName: "approve",
        args: [TOKEN_SALE, maxUint256],
      });

      const transaction = await publicClient.waitForTransactionReceipt({
        confirmations: 5,
        hash: approveToken?.hash,
      });
      checkAllowance();
      console.log(transaction);
    } catch (error) {
      checkAllowance();
      console.log("APPROVE ERROR:", error);
    }
  };

  const invest = async () => {
    if (Number(usdtRef?.current?.value) < minAmountToBuy) {
      alert(t("min_purchases"));
      return;
    }

    const currentUrl = new URL(window.location.href);
    let refValue =
      currentUrl.searchParams.get("ref") ||
      "0x0000000000000000000000000000000000000000";

    if (refValue === address) {
      refValue = "0x0000000000000000000000000000000000000000";
    }

    try {
      const buyToken = await writeContract({
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "buyToken",
        args: [parseUnits(talpaRef?.current?.value as string, 18), refValue],
      });
      const transaction = await publicClient.waitForTransactionReceipt({
        confirmations: 5,
        hash: buyToken?.hash,
      });
      setTxHash(transaction?.transactionHash);
    } catch (error) {
      console.log("INVEST ERROR:", error);
    }
  };

  const handleChange = async (ref: string) => {
    let usdtValue: any = usdtRef?.current?.value.replace(/[^0-9\.]+/g, "");
    let talpaValue: any = talpaRef?.current?.value.replace(/[^0-9\.]+/g, "");

    if (ref === "usdt") {
      talpaValue = usdtValue / price;
    }

    if (ref === "talpa") {
      usdtValue = talpaValue * price;
    }
    setInputsValues({ talpa: talpaValue, usdt: usdtValue });
    checkAllowance();
  };
  const initData = async () => {
    try {
      const top = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "getTop",
        args: [50],
      });
      const bought = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "boughtTalpa",
        args: [address],
      });
      const balance = await readContract(publicClient, {
        address: TALPA,
        abi: TokenABI,
        functionName: "balanceOf",
        args: [address],
      });
      const gotRefBonus = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "gotRefBonus",
        args: [address],
      });
      const topBuyers = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "topBuyers",
        args: [50],
      });
      const topRef = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "topRef",
        args: [50],
      });
      console.log("top", top);
      console.log("bought", bought);
      console.log("balance", balance);
      console.log("gotRefBonus", gotRefBonus);
      console.log("topBuyers", topBuyers);
      console.log("topRef", topRef);
      /////
      let USDTRaised = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "USDTCollectedTotal",
      });
      const currentStage = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "currentStage",
      });
      const stageInfo: any = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "getStageInfo",
        args: [currentStage],
      });
      const minAmount: any = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "minAmountToBuy",
      });

      USDTRaised = formatUnits(USDTRaised as bigint, 6);

      const scope = Number(TOTAL_SCOPE);
      const percents = (Number(USDTRaised) / scope) * 100;

      const left = scope - Number(USDTRaised);
      setStage(Number(currentStage) + 1);
      setMinAmountToBuy(Number(formatUnits(minAmount, 6)));
      setPrice(Number(formatUnits(stageInfo?.price, 6)));
      setRaisedData({
        raised: formatNumber(USDTRaised as string),
        left: formatNumber(left),
        percents: percents,
      });
    } catch (error) {
      console.log("INIT ERROR:", error);
    }
  };

  useEffect(() => {
    initData();
  }, [txHash]);
  return (
    <div
      id="presale"
      className="flex items-center md:items-stretch justify-evenly min-[1600px]:gap-[50px] gap-5 min-[1440px]:px-0 md:px-5 px-1 xl:flex-row flex-col flex-wrap"
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
          <p className="text-[#D89C01] font-black text-[24px] md:text-auto">
            {price}$
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
            <div className="flex">
              <p className="text-[#DEDEDE] md:text-[24px] text-[16px]">
                {t("usdt_raised")}
              </p>
              <sup className="text-[#FFB800] text-[12px] font-bold">
                {stage} {t("stage")}
              </sup>
            </div>

            <div className="flex min-[1600px]:text-[36px] md:text-[30px] text-[18px]">
              <p className="mr-1 text-[#FFB800]">{raisedData.raised}</p> \
              <p className="ml-1 text-[#DEDEDE]">{formatNumber(TOTAL_SCOPE)}</p>
            </div>
          </div>
          <div className="w-full md:h-[6px] h-1 bg-[#4F51B3] rounded-full overflow-hidden">
            <div
              style={{ width: `${raisedData.percents}%` }}
              className="h-full bg-[#FFC82C] transition-all"
            ></div>
          </div>
          <div className="flex self-start gap-2">
            <div className="flex items-center gap-2 md:text-[24px] text-[18px] font-medium leading-4">
              <div className="md:w-[14px] md:h-[14px] w-[10px] h-[10px] bg-[#FFC82C] rounded-full"></div>
              <p className="opacity-90">{t("collected")}</p>
              <p className="opacity-50">{raisedData.raised}</p>
            </div>
            <div className="flex items-center gap-2 md:text-[24px] text-[18px] font-medium leading-4">
              <div className="md:w-[14px] md:h-[14px] w-[10px] h-[10px] bg-[#fff] opacity-20 rounded-full"></div>
              <p className="opacity-90">{t("left")}</p>
              <p className="opacity-50">{raisedData.left}</p>
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
                    className="border-none focus:outline-none flex-grow bg-transparent py-5 md:text-[#D89C01] text-[#3C3EAB] w-full"
                    ref={usdtRef}
                    value={inputsValues.usdt}
                    onChange={() => handleChange("usdt")}
                  />
                </div>
              </div>
              <div>
                <h1 className="mb-5 text-[#3C3EAB] md:text-[#DEDEDE] text-[24px] md:text-[36px] font-medium leading-[22px]">
                  {t("you_getting")}
                </h1>
                <div className="border md:border-[#E9A801] border-[#3C3EAB] px-[15px] flex items-center rounded-xl text-[20px] font-black max-w-[320px] md:max-w-full">
                  <label
                    htmlFor="toInput"
                    className="mr-5 md:text-[#D89C01] text-[#3C3EAB] py-5"
                  >
                    TALPA
                  </label>
                  <input
                    type="text"
                    id="toInput"
                    className="border-none focus:outline-none flex-grow bg-transparent py-5 md:text-[#D89C01] text-[#3C3EAB] w-full"
                    ref={talpaRef}
                    value={inputsValues.talpa}
                    onChange={() => handleChange("talpa")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-10 max-w-[315px] text-[20px] relative">
              <p className="leading-[22px] font-medium text-[#3C3EAB] md:text-[#FFF] md:text-[20px] text-[16px]">
                {t("min_purchases")} {minAmountToBuy} USDT
              </p>
              {isConnected ? (
                <>
                  {Number(inputsValues.usdt) > 0 ? (
                    <div>
                      {allowance >= Number(inputsValues.usdt) ? (
                        <button
                          onClick={invest}
                          className="bg-[#FFB800] rounded-[18px] w-full transition-transform duration-300 transform hover:scale-105"
                        >
                          <p className="py-5 px-[10px] font-black">
                            {t("confirm")}
                          </p>
                        </button>
                      ) : (
                        <button
                          onClick={approve}
                          className="bg-[#FFB800] rounded-[18px] w-full transition-transform duration-300 transform hover:scale-105"
                        >
                          <p className="py-5 px-[10px] font-black">
                            {t("approve_usdt")}
                          </p>
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="h-[70px]"></div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => open()}
                  className="bg-[#FFB800] rounded-[18px] transition-transform duration-300 transform hover:scale-105"
                >
                  <p className="py-5 px-[10px] font-black">
                    {t("connect_wallet")}
                  </p>
                </button>
              )}

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
