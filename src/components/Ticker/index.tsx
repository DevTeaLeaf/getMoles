import { v4 as uuidv4 } from "uuid";
import { HorizontalTicker } from "react-infinite-ticker";

import { TO_LEFT_TICKER, TO_RIGHT_TICKER } from "../../constants";

const Ticker = () => {
  return (
    <div className="flex flex-col gap-[100px] max-w-[1920px]">
      <HorizontalTicker duration={500000}>
        {TO_LEFT_TICKER.map((image) => (
          <div className="mx-10 w-[300px] h-[300px]" key={uuidv4()}>
            <img src={image} alt={image} className="mx-[80px]" />
          </div>
        ))}
      </HorizontalTicker>
      <HorizontalTicker duration={500000} reverse={true}>
        {TO_RIGHT_TICKER.map((image) => (
          <div className="mx-10 w-[300px] h-[300px]" key={uuidv4()}>
            <img src={image} alt={image} className="mx-[80px]" />
          </div>
        ))}
      </HorizontalTicker>
    </div>
  );
};

export default Ticker;
