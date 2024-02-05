import { useState } from "react";
import { withTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { TFunction } from "i18next";

import { HOME_FAQ, FADE_IN_BOTTOM_VARIANTS } from "../../constants";

interface IProps {
  t: TFunction;
}

const FAQ: React.FC<IProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index: any) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div id="faq" className="flex flex-col md:gap-[100px] gap-10 px-5">
      <p className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[40px] xl:leading-[80px] sm:leading-[60px] leadning-10 font-bold  tracking-[2px] text-shadow">
        FAQ
      </p>
      <div className="flex flex-col gap-4">
        {HOME_FAQ.map((item, index) => {
          const isOpen = index === openIndex;
          const backgroundColor = isOpen ? "bg-[#fff]" : "bg-[#2B2D93]";
          const textColor = isOpen ? "text-[#3C3EAB]" : "text-[#FFB800]";
          return (
            <motion.div
              key={item.question}
              className={`w-full rounded-[30px] cursor-pointer ${backgroundColor}`}
              onClick={() => toggleItem(index)}
              variants={FADE_IN_BOTTOM_VARIANTS}
              initial="hidden"
              whileInView={`visible${index + 1}`}
              viewport={{ once: true }}
            >
              <div className="py-10 px-9">
                <div
                  className={`${textColor} md:text-[32px] sm:text-[24px] text-[18px] font-bold md:leading-10 sm:leading-8 leading-4`}
                >
                  {t(item.question)}
                </div>
                {isOpen && (
                  <div className="text-[#3C3EAB] sm:text-[20px] text-[18px] leading-6 mt-5 flex flex-col gap-5">
                    {item.type === "list" ? (
                      <div className="flex flex-col gap-3 sm:gap-10">
                        {item.answers.map((answer) => (
                          <div key={answer?.listHead}>
                            <h3 className="mb-4 text-[22px] sm:text-[28px]">
                              {t(answer?.listHead)}
                            </h3>
                            <div className="ml-5 flex flex-col gap-3">
                              {answer?.listBody.map((body: string) => (
                                <p key={body}>{t(body)}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : item.type === "steps" ? (
                      <div className="flex flex-col gap-5 sm:gap-[30px]">
                        {item.answers.map((step, i) => (
                          <div
                            className="flex flex-col gap-1 sm:gap-[10px]"
                            key={step.step}
                          >
                            <h3 className="sm:text-[24px] text-[20px] font-medium sm:leading-7 leading-4">
                              {i + 1}.{t(step.step)}
                            </h3>
                            <p>{t(step.stepDesc)}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      item.answers.map((answer) => (
                        <p key={answer}>{t(answer)}</p>
                      ))
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default withTranslation()(FAQ);
