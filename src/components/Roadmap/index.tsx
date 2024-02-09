import { useState, useEffect } from "react";

import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";

import { Scrollbars } from "react-custom-scrollbars-2";

import { doImg, done, progress } from "#assets";

import { useScroll } from "#utils";

import { ROADMAP } from "#constants";

interface IProps {
  t: TFunction;
}

const Roadmap: React.FC<IProps> = ({ t }) => {
  const [activeYear, setActiveYear] = useState(2024);
  const [activeRoadmap, setActiveRoadmap] = useState(ROADMAP[1]);

  const yearHandler = (year: any) => {
    const newRoadmap = ROADMAP.filter((step) => step.year === year);
    setActiveRoadmap(newRoadmap[0]);
    setActiveYear(year);
  };

  useEffect(() => {
    const doms = Array.from(document.querySelectorAll(".draggable"));
    const drags = doms.map((dom) => useScroll(dom));
    return () => drags.forEach((item) => item.destroy());
  }, []);
  return (
    <div className="md:px-5 px-2 max-w-[1920px] mx-auto text-[#fff]">
      <div
        id="roadmap"
        className="flex  md:gap-[55px] items-center mb-5 md:mb-[50px] min-[360px]:flex-nowrap flex-wrap"
      >
        <p className="text-[#FFB800] xl:text-[84px] sm:text-[64px] text-[32px] xl:leading-[80px] sm:leading-[60px] leadning-8 font-bold  tracking-[2px] md:text-shadow mobile-text-shadow">
          {t("roadmap")}
        </p>
        <div className="flex items-center gap-1 md:gap-[10px]">
          {ROADMAP.map(({ year }) => {
            return (
              <p
                key={year}
                onClick={() => yearHandler(year)}
                className={`text-[#FFB800] md:text-[22px] text-[16px] md:leading-[120%] leading-[80%] cursor-pointer px-4 py-[10px] ${
                  year === activeYear &&
                  "rounded-[10px] border-[3px] border-[#FFB800]"
                }`}
              >
                {year}
              </p>
            );
          })}
        </div>
      </div>
      <Scrollbars
        renderView={() => (
          <div className="flex items-center justify-between overflow-x-hidden whitespace-nowrap max-w-[1440px] mx-auto gap-[8rem] md:gap-[15rem] draggable" />
        )}
        renderTrackHorizontal={() => (
          <div className="roadmapTrack max-w-[1440px] mx-auto" />
        )}
        renderThumbHorizontal={() => <div className="roadmapThumb" />}
        thumbSize={200}
        universal={true}
      >
        {activeRoadmap.quartals.map((targets, index) => {
          return (
            <div className="flex flex-col gap-2 mb-10" key={index}>
              <div className="flex">
                <h3 className="text-[40px] font-bold mr-2">
                  Q{activeYear === 2023 ? 4 : index + 1}
                </h3>
                <p className="text-[#FFB800]">{activeYear}</p>
              </div>
              {targets.targets.map((scope, index) => {
                return (
                  <div className="flex items-center" key={index}>
                    <img
                      src={`${
                        scope.state === "do"
                          ? doImg
                          : scope.state === "done"
                          ? done
                          : progress
                      }`}
                      alt="img"
                    />
                    <div
                      className={`leading-[135%] text-[15px] ml-[7px] tracking-[-0.15px] ${
                        scope.state === "do"
                          ? "text-[#B6B2BD]"
                          : scope.state === "done"
                          ? "opacity-25"
                          : "text-[#FFB800]"
                      }`}
                    >
                      {t(scope.description)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </Scrollbars>
    </div>
  );
};

export default withTranslation()(Roadmap);
