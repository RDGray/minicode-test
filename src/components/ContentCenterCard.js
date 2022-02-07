import React from "react";

import "./ContentCenterCardStyle.css";

export default function ContentCenterCard(props) {
  return (
    <>
      {/* Card I */}
      <div className="md:w-full content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
        <div className="flex justify-center">
          <img className="content-center__icon" src={props.image} alt="" />
        </div>

        <p className="content-center__text flex justify-center text-center">
          {props.text}
        </p>
      </div>
    </>
  );
}
