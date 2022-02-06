import React, { useState } from "react";
import arrowright from "../assets/icons/arrow-right.svg";
import arrowleft from "../assets/icons/arrow-right.svg";
import "./ButtonsStyle.css";

export function ButtonBack({ name }) {
  return (
    <button class="btn btn--back font-bold text-white rounded flex ">
      <img
        className="btn--icon-back font-bold flex self-center"
        src={arrowleft}
        alt=""
      />
      {name}
    </button>
  );
}

export function ButtonForward({ name }) {
  return (
    <button class="btn btn--forward font-bold rounded text-white flex">
      {name}
      <img
        className="btn--icon-forward font-bold flex self-center"
        src={arrowright}
        alt=""
      />
    </button>
  );
}

export const ButtonNav = ({ name }) => {
  const [cls, setCls] = useState("");

  return (
    <>
      <button
        onClick={() =>
          setCls((cls) =>
            cls === "btn--nav-clicked" ? "" : "btn--nav-clicked"
          )
        }
        className={`btn btn--nav text-white py-2 px-4 border rounded`}
      >
        <p className={cls}>{name}</p>
      </button>
    </>
  );
};

export const ButtonNavTransparent = ({ name }) => {
  return (
    <button class="btn btn--transparent font-bold text-white inline-flex">
      {name}
      <img className="btn--icon font-bold" src={arrowright} alt="" />
    </button>
  );
};
