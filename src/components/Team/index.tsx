import { withTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { TFunction } from "i18next";

import { TEAM, FADE_IN_BOTTOM_VARIANTS } from "#constants";

interface IProps {
  t: TFunction;
}

const Team: React.FC<IProps> = ({ t }) => {
  return (
    <div
      id="team"
      className="flex flex-col px-5 md:px-20  lg:px-[100px] min-[1440px]:gap-[180px] lg:gap-[100px] gap-5 md:gap-[60px] mt-[100px]"
    >
      <p className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[40px] xl:leading-[80px] sm:leading-[60px] leadning-10 font-bold  tracking-[2px] text-shadow">
        {t("team")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 min-[1440px]:gap-[80px]">
        {TEAM.map((member, index) => (
          <motion.div
            className="flex flex-col justify-center items-center"
            key={member.userName}
            variants={FADE_IN_BOTTOM_VARIANTS}
            initial="hidden"
            whileInView={`visible${index + 1}`}
            viewport={{ once: true }}
          >
            <img
              src={member.avatar}
              alt="avatar"
              className="min-[1440px]:max-w-[294px] min-[1440px]:max-h-[294px] lg:max-w-[250px] lg:max-h-[250px] max-w-[100px] max-h-[100px] md:max-w-[200px] md:max-h-[200px] w-full h-full"
            />
            <h3 className="text-[#FFB800] min-[1440px]:text-[36px] lg:text-[24px] md:text-[20px] text-[16px] font-bold text-center min-[1440px]:leading-10 md:leading-7 leading-4 tracking-[2px]">
              {member.userName}
            </h3>
            <p className="min-[1440px]:text-[24px] lg:text-[18px] md:text-[14px] text-[12px] min-[1440px]:leading-9 leading-5 min-[1440px]:max-w-[350px] md:max-w-[250px] max-w-[120px] text-center">
              {t(member.description)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Team);
