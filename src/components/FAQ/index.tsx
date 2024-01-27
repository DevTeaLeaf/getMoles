import { useState } from "react";
import { withTranslation } from "react-i18next";

import { TFunction } from "i18next";

import { HOME_FAQ } from "../../constants";

interface IProps {
  t: TFunction;
}

const FAQ: React.FC<IProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index: any) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };
  return (
    <div id="faq" className="flex flex-col gap-[100px]">
      <p className="text-[#FFB800] text-[82px] font-bold leading-[80px] tracking-[2px] text-shadow">
        FAQ
      </p>
      <div className="flex flex-col gap-4">
        {HOME_FAQ.map((item, index) => {
          const isOpen = index === openIndex;
          const backgroundColor = isOpen ? "bg-[#fff]" : "bg-[#2B2D93]";
          const textColor = isOpen ? "text-[#3C3EAB]" : "text-[#FFB800]";

          return (
            <div
              key={item.question}
              className={`w-full rounded-[30px] cursor-pointer ${backgroundColor}`}
              onClick={() => toggleItem(index)}
            >
              <div className="py-10 px-9">
                <div
                  className={`${textColor} text-[32px] font-bold leading-10`}
                >
                  {t(item.question)}
                </div>
                {isOpen && (
                  <div className="text-[#3C3EAB] text-[20px] leading-6 mt-5 flex flex-col gap-5">
                    {item.type === "list" ? (
                      <div className="flex flex-col gap-10">
                        {item.answers.map((answer) => (
                          <div key={answer?.listHead}>
                            <h3 className="mb-4 text-[28px]">
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
                      <div className="flex flex-col gap-[30px]">
                        {item.answers.map((step, i) => (
                          <div
                            className="flex flex-col gap-[10px]"
                            key={step.step}
                          >
                            <h3 className="text-[24px] font-medium leading-7">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withTranslation()(FAQ);
