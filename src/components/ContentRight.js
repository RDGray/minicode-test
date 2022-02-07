import React from "react";
import okaydot from "../assets/icons/circle.svg";
import circleokay from "../assets/icons/circleokay.svg";
import circletwo from "../assets/icons/circletwo.svg";
import circlethree from "../assets/icons/circlethree.svg";

import "./ContentRightStyle.css";

export default function ContentRight(props) {
  return (
    <div class="aside__right px-1  flex flex-col justify-between fixed right-0">
      <div
        class="flex flex-col items-center content-center justify-center aside__right--top"
        href="#!"
      >
        <img className="contentRight__icon" src={okaydot} alt="" />
      </div>

      <span className="line--vertical-green my-8"></span>

      <div
        class="flex flex-col items-center content-center justify-center"
        href="#!"
      >
        <img className="contentRight__icon" src={circleokay} alt="" />
      </div>

      <span className="line--vertical-green my-8"></span>

      <div
        class="flex flex-col items-center content-center justify-center"
        href="#!"
      >
        <img className="contentRight__icon" src={circletwo} alt="" />
      </div>

      <span className="line--vertical my-8"></span>

      <div
        class="flex flex-col items-center content-center justify-center aside__right--bottom"
        href="#!"
      >
        <img className="contentRight__icon" src={circlethree} alt="" />
      </div>
    </div>
  );
}
