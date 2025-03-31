"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={`${btnStyles} text-white`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsStyles} text-white`} />
      </button>
      <button className={`${btnStyles} text-white`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconsStyles} text-white`} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
