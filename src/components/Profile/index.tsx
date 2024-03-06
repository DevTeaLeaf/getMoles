import { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";

import { formatUnits } from "viem";
import { readContract } from "viem/actions";
import { usePublicClient, useAccount } from "wagmi";

import { TOKEN_SALE, TokenSaleABI, TokenABI, TALPA } from "#web3";

import { useAnimate, stagger } from "framer-motion";

import { logo } from "#assets";

import { TFunction } from "i18next";

interface IProps {
  isProfile: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  t: TFunction;
}

const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            ".portfolio",
            {
              transform:
                window.innerWidth > 767 ? "translateX(0%)" : "translateY(0%)",
              opacity: 1,
            },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            ".portfolioStatistics p",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            ".portfolioStatistics p",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [
            ".portfolio",
            {
              transform:
                window.innerWidth > 767
                  ? "translateX(-100%)"
                  : "translateY(100%)",
              opacity: 0,
            },
            { at: "-0.1" },
          ],
        ];

    animate(menuAnimations);
  }, [isOpen]);

  return scope;
};

const Profile: React.FC<IProps> = ({ isProfile, setProfile, t }) => {
  const publicClient = usePublicClient();
  const { address } = useAccount();

  const [profileData, setProfileData] = useState({
    bought: "",
    balance: "",
    refBonus: "",
  });

  const scope = useMenuAnimation(isProfile);

  const initData = async () => {
    try {
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

      setProfileData({
        bought: formatUnits(bought as bigint, 18),
        balance: formatUnits(balance as bigint, 18),
        refBonus: formatUnits(gotRefBonus as bigint, 18),
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    initData();
  }, [address]);

  return (
    <div ref={scope}>
      <nav className="portfolio text-[#fff]">
        <div className="flex items-center justify-between px-5">
          <img src={logo} alt="logo" />

          <svg
            onClick={() => setProfile(false)}
            className="h-8 w-8 text-[#fff] cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className="portfolioStatistics text-[14px]">
          <p>
            {t("bought")}: {profileData.bought} TALPA
          </p>
          <p>
            {t("balance")}: {profileData.balance} TALPA
          </p>
          <p>
            {t("referral_earnings")}: {profileData.refBonus} TALPA
          </p>
        </div>
      </nav>
    </div>
  );
};
export default withTranslation()(Profile);
