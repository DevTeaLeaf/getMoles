import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { TEAM } from "../../constants";

interface IProps {
  t: TFunction;
}

const Team: React.FC<IProps> = ({ t }) => {
  return (
    <div id="team" className="flex flex-col gap-[180px] mt-[100px]">
      <p className="text-[#FFB800] text-[82px] font-bold leading-[80px] tracking-[2px] text-shadow">
        {t("team")}
      </p>
      <div className="flex flex-wrap gap-[150px] px-[250px]">
        {TEAM.map((member) => (
          <div
            className="flex flex-col justify-center items-center"
            key={member.userName}
          >
            <img src={member.avatar} alt="avatar" />
            <h3 className="text-[#FFB800] text-[36px] font-bold text-center leading-10 tracking-[2px]">
              {member.userName}
            </h3>
            <p className="text-[24px] leading-9 max-w-[350px] text-center">
              {t(member.description)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Team);
