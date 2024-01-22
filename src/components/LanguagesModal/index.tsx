import { withTranslation } from "react-i18next";
import i18n from "../../translate/i18n";

import { en, fr, ru, es, zh } from "../../assets";

interface IProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguagesModal: React.FC<IProps> = ({ active, setActive }) => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setActive(false);
  };
  return (
    <div
      className={
        active
          ? "bg-[#3D3C5C] rounded-[7px] fixed transition-[0.5s] right-[20px] top-[60px] w-[150px] inter text-[18px]"
          : "hidden transition-[0.5s]"
      }
    >
      <div className="py-[10px] px-5 flex flex-col items-start gap-3">
        <div
          onClick={() => changeLanguage("en")}
          className={`flex items-center gap-[10px] cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
            i18n.language !== "en" && "opacity-50"
          }`}
        >
          <img src={en} alt="EN" className="w-6 h-6 rounded-full" />
          <p>English</p>
        </div>
        <div
          onClick={() => changeLanguage("fr")}
          className={`flex items-center gap-[10px] cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
            i18n.language !== "fr" && "opacity-50"
          }`}
        >
          <img src={fr} alt="FR" className="w-6 h-6 rounded-full" />
          <p>Français</p>
        </div>
        <div
          onClick={() => changeLanguage("ru")}
          className={`flex items-center gap-[10px] cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
            i18n.language !== "ru" && "opacity-50"
          }`}
        >
          <img src={ru} alt="RU" className="w-6 h-6 rounded-full" />
          <p>Русский</p>
        </div>
        <div
          onClick={() => changeLanguage("es")}
          className={`flex items-center gap-[10px] cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
            i18n.language !== "es" && "opacity-50"
          }`}
        >
          <img src={es} alt="ES" className="w-6 h-6 rounded-full" />
          <p>Español</p>
        </div>
        <div
          onClick={() => changeLanguage("zh")}
          className={`flex items-center gap-[10px] cursor-pointer hover:opacity-100 transition-opacity duration-200 ${
            i18n.language !== "zh" && "opacity-50"
          }`}
        >
          <img src={zh} alt="zh" className="w-6 h-6 rounded-full" />
          <p>中国人</p>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LanguagesModal);
