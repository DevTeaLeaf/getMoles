// @ts-ignore
import { HorizontalTicker } from "react-infinite-ticker";
import { v4 as uuidv4 } from "uuid";

import { TO_LEFT_TICKER, TO_RIGHT_TICKER } from "../../constants";

const Ticker = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 md:gap-[100px] ticker-container w-full mx-auto">
      <HorizontalTicker duration={50000}>
        {TO_LEFT_TICKER.map((image) => (
          <div
            className="md:mx-10 mx-4 md:w-[300px] md:h-[300px] h-[148px] w-[148px]"
            key={uuidv4()}
          >
            <img src={image} alt={image} className="mx-[80px]" />
          </div>
        ))}
      </HorizontalTicker>
      <HorizontalTicker duration={50000} reverse={true}>
        {TO_RIGHT_TICKER.map((image) => (
          <div
            className="md:mx-10 mx-4 md:w-[300px] md:h-[300px] h-[148px] w-[148px]"
            key={uuidv4()}
          >
            <img src={image} alt={image} className="mx-[80px]" />
          </div>
        ))}
      </HorizontalTicker>
    </div>
  );
};

export default Ticker;
