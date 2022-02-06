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
import truck from "../assets/icons/truck.svg";
import minibus from "../assets/icons/minibus.svg";
import bus from "../assets/icons/bus.svg";
import trailer from "../assets/icons/trailer.svg";
import refrigerant from "../assets/icons/refrigerant.svg";
import technique from "../assets/icons/technique.svg";
import otherTechnique from "../assets/icons/other-technique.svg";
import Accordion from "./Accordion";

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

          <div className="flex  mt-10">
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
                    Camion pînă la 3,5 tone
                  </p>
                </div>

                {/* Card III */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img className="content-center__icon" src={truck} alt="" />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Camion mai mult de 3,5 tone
                  </p>
                </div>

                {/* Card IV */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img
                      className="content-center__icon"
                      src={minibus}
                      alt=""
                    />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Microbus pînă la 20 locuri
                  </p>
                </div>

                {/* Card V */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img className="content-center__icon" src={bus} alt="" />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Autobuz peste 20 locuri
                  </p>
                </div>

                {/* Card VI */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img
                      className="content-center__icon"
                      src={trailer}
                      alt=""
                    />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Remorci, semiremorci
                  </p>
                </div>

                {/* Card VII */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img
                      className="content-center__icon"
                      src={refrigerant}
                      alt=""
                    />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Refrigeratoare, cisterne
                  </p>
                </div>

                {/* Card VIII */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img
                      className="content-center__icon"
                      src={technique}
                      alt=""
                    />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Tehnică specială
                  </p>
                </div>

                {/* Card IX */}
                <div class="content-center__card rounded overflow-hidden bg-white shadow flex justify-center content-center flex-col">
                  <div class="flex justify-center">
                    <img
                      className="content-center__icon"
                      src={otherTechnique}
                      alt=""
                    />
                  </div>

                  <p class="content-center__text flex justify-center text-center">
                    Echipament suplimentar
                  </p>
                </div>
              </div>
              <div className="content-center__bottom w-full flex justify-between mt-10">
                <ButtonBack name="Înapoi" />
                <ButtonForward name="Înainte" />
              </div>
            </div>

            <div className="content-center__right">
              {/* Accordion Start */}
              <Accordion
                header="Obiectul asigurării"
                body={
                  <>
                    <p>
                      Autovehicule înmatriculate în Republica Moldova, care
                      aparţin persoanelor fizice şi juridice.
                    </p>
                    <p>
                      Echipamentul suplimentar, care nu intră în dotarea
                      autovehiculului conform listei de dotări ale uzinei
                      producătoare.
                    </p>
                    <p>
                      Conducătorul auto şi pasagerii, pentru cazuri de accidente
                      care pot avea loc în timpul accidentelor rutiere.
                    </p>
                  </>
                }
              />
              <Accordion header="Riscuri și obligațiuni" body="placeholder" />
              {/* Accordion End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
