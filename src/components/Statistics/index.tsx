import { useState, useEffect } from "react";
// useAccount
import { usePublicClient } from "wagmi";
import { formatUnits } from "viem";
import { readContract } from "viem/actions";
//TokenABI,TALPA
import { TOKEN_SALE, TokenSaleABI } from "#web3";

import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

import type { TBuyers } from "#types";

interface IProps {
  t: TFunction;
}

const Statistics: React.FC<IProps> = ({ t }) => {
  const publicClient = usePublicClient();
  //const { address } = useAccount();

  const [topBuyers, setTopBuyers] = useState<TBuyers | any>([]);

  const initData = async () => {
    const top: any = await readContract(publicClient, {
      address: TOKEN_SALE,
      abi: TokenSaleABI,
      functionName: "getTop",
      args: [5],
    });
    // const bought = await readContract(publicClient, {
    //   address: TOKEN_SALE,
    //   abi: TokenSaleABI,
    //   functionName: "boughtTalpa",
    //   args: [address],
    // });
    // const balance = await readContract(publicClient, {
    //   address: TALPA,
    //   abi: TokenABI,
    //   functionName: "balanceOf",
    //   args: [address],
    // });
    // const gotRefBonus = await readContract(publicClient, {
    //   address: TOKEN_SALE,
    //   abi: TokenSaleABI,
    //   functionName: "gotRefBonus",
    //   args: [address],
    // });

    // const topBuyers = await readContract(publicClient, {
    //   address: TOKEN_SALE,
    //   abi: TokenSaleABI,
    //   functionName: "topBuyers",
    //   args: [0],
    // });
    // const topRef = await readContract(publicClient, {
    //   address: TOKEN_SALE,
    //   abi: TokenSaleABI,
    //   functionName: "topRef",
    //   args: [50],
    // });
    const buyers: TBuyers = top[0].map((user: string, index: number) => ({
      address: user,
      amount: formatUnits(top[2][index], 18),
    }));

    setTopBuyers(buyers);

    console.log("top", top); //statistics
    // console.log("bought", bought); // portfolio
    // console.log("balance", balance); // portfolio
    // console.log("gotRefBonus", gotRefBonus); // portfolio
    // console.log("topBuyers", topBuyers);
    // console.log("topRef", topRef);
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    !!topBuyers && (
      <div className="w-full md:px-5 px-2 max-w-[1920px] mx-auto text-[#fff] py-5">
        <p className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[40px] xl:leading-[80px] sm:leading-[60px] leadning-10 font-bold  tracking-[2px] text-shadow mb-2">
          {t("statistics")}
        </p>
        <table className="bg-[#FFB800] rounded-md overflow-hidden mx-auto my-5 w-full max-w-[100%] md:max-w-[70%]">
          <thead className="text-[20px] md:text-[24px]">
            <tr>
              <th className="border px-4 py-2">Wallet</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {topBuyers.map(({ address, amount }: TBuyers, index: number) => (
              <tr key={address + index}>
                <td className="border px-4 py-2 lg:text-[20px] text-[14px]">
                  <p className="md:block hidden">{address}</p>
                  <p className="block md:hidden">{address.slice(0, 10)}.....</p>
                </td>
                <td className="border px-4 py-2 text-end text-[14px] md:text-[20px]">
                  {amount} TALPA
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
