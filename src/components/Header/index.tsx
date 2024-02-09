import { useState, useEffect } from "react";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

import LanguagesModal from "../LanguagesModal";

import { buy_img, dropdown_arrow, logo, wallet_img } from "../../assets";
import i18n from "../../translate/i18n";

interface IProps {
  t: TFunction;
}

const Header: React.FC<IProps> = ({ t }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const { address } = useAccount();

  const { open } = useWeb3Modal();

  const handleNavLinkClick = (id: string) => {
    setIsNavOpen((prev) => !prev);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflowY = isNavOpen ? "hidden" : "auto";
  }, [isNavOpen]);

  return (
    <header className="flex sticky top-0 inter-400 z-50">
      <nav className="sticky w-full text-[#fff] backdrop-blur-md">
        <div className="w-full flex items-center justify-between h-[60px] md:h-[80px] px-2 md:px-5">
          <img
            className="w-[110px] md:w-full h-9 max-w-[200px] cursor-pointer xl:mt-[-16px]"
            src={logo}
            alt="logo"
          />

          <div className="hidden xl:flex items-center justify-center gap-8 montserrat text-[20px] 2xl:text-[24px]">
            <a
              href="#about"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("about")}
            </a>
            <a
              href="#presale"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("presale")}
            </a>
            <a
              href="#roadmap"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("roadmap")}
            </a>
            <a
              href="#tokenomics"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("tokenomics")}
            </a>
            <a
              href="#team"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("team")}
            </a>
            <a
              href="#faq"
              className="cursor-pointer hover:text-[#FFB800] transition-300"
            >
              {t("faq")}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5 poppins text-[15px]">
              <a
                href="#presale"
                className="bg-[#D7AA41] rounded-3xl min-[1680px]:block hidden transition-transform duration-300 transform hover:scale-105"
              >
                <div className="py-3 pl-4 pr-6 flex items-center gap-2">
                  <img src={buy_img} alt="buy" />
                  <p>{t("buy_token")}</p>
                </div>
              </a>
              <button
                className="rounded-3xl bg-transparent border min-[430px]:block hidden transition-transform duration-300 transform hover:scale-105"
                onClick={() => open()}
              >
                <div className="py-[6px] pl-2 pr-3 md:py-3 md:pl-4 md:pr-6 flex items-center gap-1 md:gap-2">
                  <img src={wallet_img} alt="Connect Wallet" />
                  <p>
                    {address
                      ? address.slice(0, 4) + "..." + address.slice(-4)
                      : t("connect_wallet")}
                  </p>
                </div>
              </button>
            </div>
            <div
              onClick={() => setModalActive((prev) => !prev)}
              className="cursor-pointer flex items-center relative languagesSelector mr-[40px] xl:mr-0"
            >
              <div className="mr-[10px] uppercase montserrat text-[24px] leading-[30px]">
                {i18n.language}
              </div>
              <img
                className={
                  modalActive
                    ? "rotate-[180deg] transition-[0.5s]"
                    : "transition-[0.5s]"
                }
                src={dropdown_arrow}
                alt="Dropdown arrow"
              />

              <LanguagesModal active={modalActive} setActive={setModalActive} />
            </div>
          </div>

          <section className="flex xl:hidden absolute right-[16px] md:right-[26px]">
            <div
              className="space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-[2px] w-[21px] animate-pulse bg-[#fff]"></span>
              <span className="block h-[2px] w-[21px] animate-pulse bg-[#fff]"></span>
              <span className="block h-[2px] w-[21px] animate-pulse bg-[#fff]"></span>
            </div>

            <div className={isNavOpen ? "show-menu" : "hidden"}>
              <div className="absolute top-0 left-0 px-8 py-8 cursor-pointer">
                <img className="cursor-pointer" src={logo} alt="logo" />
              </div>
              <div
                className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-[#fff]"
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
              <div className="flex justify-center items-center flex-col w-full">
                <div className="text-[#fff] px-5 w-full">
                  <div className="flex justify-between items-center flex-col gap-8">
                    <a
                      href="#about"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("about")}
                    >
                      {t("about")}
                    </a>
                    <a
                      href="#presale"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("presale")}
                    >
                      {t("presale")}
                    </a>
                    <a
                      href="#roadmap"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("roadmap")}
                    >
                      {t("roadmap")}
                    </a>
                    <a
                      href="#tokenomics"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("tokenomics")}
                    >
                      {t("tokenomics")}
                    </a>
                    <a
                      href="#team"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("team")}
                    >
                      {t("team")}
                    </a>
                    <a
                      href="#faq"
                      className="cursor-pointer hover:text-[#FFB800] transition-300"
                      onClick={() => handleNavLinkClick("faq")}
                    >
                      {t("faq")}
                    </a>

                    <div className="flex flex-col items-center gap-5 poppins text-[15px]">
                      <button
                        onClick={() => handleNavLinkClick("presale")}
                        className="bg-[#D7AA41] rounded-3xl"
                      >
                        <div className="py-3 pl-4 pr-6 flex items-center gap-2">
                          <img src={buy_img} alt="buy" />
                          <p>{t("buy_token")}</p>
                        </div>
                      </button>
                      <button
                        className="rounded-3xl bg-transparent border"
                        onClick={() => open()}
                      >
                        <div className="py-3 pl-4 pr-6 flex items-center gap-2">
                          <img src={wallet_img} alt="Connect Wallet" />
                          <p>
                            {address
                              ? address.slice(0, 4) + "..." + address.slice(-4)
                              : t("connect_wallet")}
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default withTranslation()(Header);
