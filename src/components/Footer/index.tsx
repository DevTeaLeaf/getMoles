import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { logo } from "#assets";

import { SOCIAL_NETWORKS } from "#constants";

interface IProps {
  t: TFunction;
}

const Footer: React.FC<IProps> = ({ t }) => {
  return (
    <div className="w-full flex items-center justify-between h-[60px] md:h-[80px] px-2 md:px-5">
      <div className="flex flex-col items-start">
        <img
          className="sm:w-[110px] w-[90px] md:w-full h-9 max-w-[200px] cursor-pointer xl:mt-[-16px]"
          src={logo}
          alt="logo"
        />
        <p className="montserrat sm:hidden block text-[12px] text-[#fff]">
          {t("all_rights")}
        </p>
      </div>

      <p className="montserrat hidden sm:block text-[20px] text-[#fff]">
        {t("all_rights")}
      </p>
      <div className="flex items-center gap-5">
        {SOCIAL_NETWORKS.map((social) => (
          <a
            key={social.link}
            href={social.link}
            target="_blank"
            className="transition-transform duration-300 transform hover:scale-150"
          >
            <img src={social.img} alt={social.alt} className="cursor-pointer" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Footer);
