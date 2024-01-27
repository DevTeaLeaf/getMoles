import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { discord, logo, telegram, x, youtube } from "../../assets";

interface IProps {
  t: TFunction;
}

const Footer: React.FC<IProps> = ({ t }) => {
  return (
    <div className="w-full flex items-center justify-between h-[60px] md:h-[80px] px-2 md:px-5">
      <img
        className="w-[110px] md:w-full h-9 max-w-[200px] cursor-pointer xl:mt-[-16px]"
        src={logo}
        alt="logo"
      />
      <p className="montserrat text-[20px] text-[#fff]">{t("all_rights")}</p>
      <div className="flex items-center gap-5">
        <img src={telegram} alt="telegram" className="cursor-pointer" />
        <img src={x} alt="x" />
        <img src={discord} alt="discord" className="cursor-pointer" />
        <img src={youtube} alt="youtube" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default withTranslation()(Footer);
