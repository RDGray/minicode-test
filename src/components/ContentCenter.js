import React from "react";
import {
  ButtonBack,
  ButtonForward,
  ButtonNav,
  ButtonNavTransparent,
} from "./Buttons";
import "./ContentCenterStyle.css";

import car from "../assets/icons/car.svg";
import minitruck from "../assets/icons/minitruck.svg";

export function ContentCenter() {
  return (
    <div className="flex justify-center content-center mx-auto mt-auto">
      <div className="content-center-wrapper ">
        <div className="content-center__header">
          <h4 className="font-extrabold text-white">
            Alege tipul de asigurare
          </h4>
          <div className="content-center__nav">
            <ButtonNav name="Carte Verde" />
            <ButtonNav name="RCA" />
            <ButtonNav name="Casco" />
            <ButtonNav name="Medicală" />
            <ButtonNav name="Accidente" />
            <ButtonNav name="Bunuri" />
            <ButtonNav name="Locuințe (imobile)" />
            <ButtonNavTransparent name="Altele" />
          </div>
        </div>

        <div className="content-center__body">
          <h4 className="font-extrabold">Alege tipul autovehiculului</h4>

          {/* Cards */}
          <div className="content-center__left">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {/* Card I */}
              <div class="md:w-full content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>
              {/* Card II */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img
                    className="content-center__icon"
                    src={minitruck}
                    alt=""
                  />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card III */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card IV */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card V */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card VI */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card VII */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card VIII */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>

              {/* Card IX */}
              <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                <div class="flex justify-center">
                  <img className="content-center__icon" src={car} alt="" />
                </div>

                <p class="content-center__text flex justify-center text-center">
                  Autoturism cu pînă la 9 locuri
                </p>
              </div>
            </div>
            <div className="content-center__bottom w-full flex justify-between mt-10">
              <ButtonBack name="Înapoi" />
              <ButtonForward name="Înainte" />
            </div>
          </div>

          <div className="content-center__right"></div>
        </div>
      </div>
    </div>
  );
}
