import { useState, useEffect } from "react";

import { usePublicClient } from "wagmi";
import { formatUnits } from "viem";
import { readContract } from "viem/actions";

import { TOKEN_SALE, TokenSaleABI } from "#web3";

import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

import type { TBuyers } from "#types";

interface IProps {
  t: TFunction;
}

const Statistics: React.FC<IProps> = ({ t }) => {
  const publicClient = usePublicClient();

  const [topBuyers, setTopBuyers] = useState<TBuyers | any>([]);
  const [topReferrals, setTopReferrals] = useState<TBuyers | any>([]);

  const initData = async () => {
    try {
      const top: any = await readContract(publicClient, {
        address: TOKEN_SALE,
        abi: TokenSaleABI,
        functionName: "getTop",
        args: [50],
      });

      const buyersMap: any = {};
      const referralsMap: any = {};

      let buyers = top[0].reduce((acc: any[], user: string, index: number) => {
        const address = user;
        const amount = top[2][index];

        if (buyersMap.hasOwnProperty(address)) {
          buyersMap[address] += amount;
        } else {
          buyersMap[address] = amount;
        }

        const existingBuyerIndex = acc.findIndex(
          (item) => item.address === address
        );
        if (existingBuyerIndex !== -1) {
          acc[existingBuyerIndex].amount += amount;
        } else {
          acc.push({
            address,
            amount: buyersMap[address],
          });
        }

        return acc;
      }, []);

      let referrals = top[1].reduce(
        (acc: any[], user: string, index: number) => {
          const address = user;
          const amount = top[3][index];

          if (referralsMap.hasOwnProperty(address)) {
            referralsMap[address] += amount;
          } else {
            referralsMap[address] = amount;
          }

          const existingReferralIndex = acc.findIndex(
            (item) => item.address === address
          );
          if (existingReferralIndex !== -1) {
            acc[existingReferralIndex].amount += amount;
          } else {
            acc.push({
              address,
              amount: referralsMap[address],
            });
          }

          return acc;
        },
        []
      );

      buyers = buyers
        .map((buyer: TBuyers) => ({
          ...buyer,
          amount: String(formatUnits(buyer.amount as bigint, 18)),
        }))
        .slice(0, 5);

      referrals = referrals
        .map((ref: TBuyers) => ({
          ...ref,
          amount: String(formatUnits(ref.amount as bigint, 18)),
        }))
        .slice(0, 5);

      setTopReferrals(referrals);
      setTopBuyers(buyers);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    !!topBuyers &&
    !!topReferrals && (
      <div className="w-full md:px-5 px-2 max-w-[1920px] mx-auto text-[#fff] py-5">
        <h3 className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[40px] xl:leading-[80px] sm:leading-[60px] leadning-10 font-bold  tracking-[2px] text-shadow mb-2">
          {t("statistics")}
        </h3>
        <h5 className="text-center text-[20px] md:text-[24px] py-3">
          {t("statistics_desc")}
        </h5>
        <p className="text-center text-[24px] font-bold text-[#FFB800]">
          {t("top_investors")}
        </p>
        <table className="bg-[#FFB800] rounded-md overflow-hidden mx-auto my-5 w-full max-w-[100%] md:max-w-[70%]">
          <thead className="text-[20px] md:text-[24px]">
            <tr>
              <th className="border px-4 py-2">{t("wallet")}</th>
              <th className="border px-4 py-2">{t("invested")}</th>
            </tr>
          </thead>
          <tbody>
            {topBuyers.map(({ address, amount }: TBuyers, index: number) => (
              <tr key={address + index}>
                <td className="border px-4 py-2 lg:text-[20px] text-[14px]">
                  <p className="md:block hidden">{address}</p>
                  <p className="block md:hidden">{address.slice(0, 20)}.....</p>
                </td>
                <td className="border px-4 py-2 text-end text-[14px] md:text-[20px]">
                  {amount as string} TALPA
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-center text-[24px] font-bold text-[#FFB800]">
          {t("top_referrals")}
        </p>
        <table className="bg-[#FFB800] rounded-md overflow-hidden mx-auto my-5 w-full max-w-[100%] md:max-w-[70%]">
          <thead className="text-[20px] md:text-[24px]">
            <tr>
              <th className="border px-4 py-2">{t("wallet")}</th>
              <th className="border px-4 py-2">{t("amount")}</th>
            </tr>
          </thead>
          <tbody>
            {topReferrals.map(({ address, amount }: TBuyers, index: number) => (
              <tr key={address + index}>
                <td className="border px-4 py-2 lg:text-[20px] text-[14px]">
                  <p className="md:block hidden">{address}</p>
                  <p className="block md:hidden">{address.slice(0, 20)}.....</p>
                </td>
                <td className="border px-4 py-2 text-end text-[14px] md:text-[20px]">
                  {amount as string} TALPA
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default withTranslation()(Statistics);
