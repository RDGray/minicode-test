import React from "react";
import lang from "../assets/icons/lang.svg";
import phone from "../assets/icons/phone.svg";
import mes from "../assets/icons/messenger.svg";
import whatsapp from "../assets/icons/whatsapp.svg";

import "./ContentLeftStyle.css";

export function ContentLeft() {
  return (
    <div class="aside px-1 absolute flex flex-col justify-around">
      <div class="flex flex-col justify-between content-between aside__topnav">
        <div
          class="flex flex-col items-center content-center justify-center aside__language"
          href="#!"
        >
          <img className="contentLeft__icon" src={lang} alt="" />
          <div className="pt-3 text-sm">
            <a className="mx-2 red-clr-800" href="#!">
              Pyc
            </a>
            <span className="line"></span>
            <a className="mx-2" href="#!">
              Eng
            </a>
          </div>
        </div>
        <span className="line--vertical my-8"></span>
        <a
          class="flex flex-col items-center content-center justify-center aside__call"
          href="#!"
        >
          <img className="contentLeft__icon" src={phone} alt="" />
          <p className="text-sm pt-3">Sună</p>
        </a>

        <span className="line--vertical my-8"></span>

        <a
          class="flex flex-col items-center content-center justify-center pb-8"
          href="#!"
        >
          <img className="contentLeft__icon" src={mes} alt="" />
          <p className="text-sm pt-3">Messenger</p>
        </a>
      </div>

      <div className="flex content-center justify-center aside__botnav">
        <a
          class="flex flex-col items-center content-center justify-center"
          href="#!"
        >
          <img className="contentLeft__icon" src={whatsapp} alt="" />
          <p className="text-sm pt-3">Whatsapp</p>
        </a>
      </div>
    </div>
  );
}
