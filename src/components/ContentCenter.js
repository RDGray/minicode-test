import React from "react";
import { ButtonBack, ButtonForward } from "./Buttons";
import { Tab } from "@headlessui/react";
import arrowright from "../assets/icons/arrow-right.svg";
import Accordion from "./Accordion";
import ContentCenterCard from "./ContentCenterCard";

import car from "../assets/icons/car.svg";
import minitruck from "../assets/icons/minitruck.svg";
import truck from "../assets/icons/truck.svg";
import minibus from "../assets/icons/minibus.svg";
import bus from "../assets/icons/bus.svg";
import trailer from "../assets/icons/trailer.svg";
import refrigerant from "../assets/icons/refrigerant.svg";
import technique from "../assets/icons/technique.svg";
import otherTechnique from "../assets/icons/other-technique.svg";

import "./ContentCenterStyle.css";

export function ContentCenter() {
  const dataTab = {
    name1: "Carte Verde",
    name2: "RCA",
    name3: "Casco",
    name4: "Medicală",
    name5: "Accidente",
    name6: "Bunuri",
    name7: "Locuințe (imobile)",
    name8: "Altele",
  };
  const datatext = {
    text1: "Autoturism cu pînă la 9 locuri",
    text2: "Camion pînă la 3,5 tone",
    text3: "Camion mai mult de 3,5 tone",
    text4: "Microbus pînă la 20 locuri",
    text5: "Autobuz peste 20 locuri",
    text6: "Remorci, semiremorci",
    text7: "Refrigeratoare, cisterne",
    text8: "Tehnică specială",
    text9: "Echipament suplimentar",
  };
  return (
    <div className="flex justify-center content-center mx-auto mt-auto">
      <div className="content-center-wrapper ">
        <div className="content-center__header">
          <h4 className="font-extrabold text-white">
            Alege tipul de asigurare
          </h4>
          <div className="content-center__nav text-center lg:text-left">
            <Tab.Group>
              <Tab.List>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name1}
                      </span>
                    </button>
                  )}
                </Tab>

                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name2}
                      </span>
                    </button>
                  )}
                </Tab>

                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name3}
                      </span>
                    </button>
                  )}
                </Tab>

                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name4}
                      </span>
                    </button>
                  )}
                </Tab>

                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name5}
                      </span>
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav shadow-inner text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name6}
                      </span>
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn btn--nav text-white border rounded"
                          : "btn btn--nav text-white border rounded"
                      }
                    >
                      <span className={selected ? "btn--nav-clicked" : ""}>
                        {dataTab.name7}
                      </span>
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    <button
                      className={
                        selected
                          ? "btn--small border rounded shadow-inner font-extrabold inline-flex"
                          : "btn btn--transparent font-bold text-white inline-flex"
                      }
                    >
                      <span className={selected ? "text-red-800" : ""}>
                        {dataTab.name8}
                      </span>
                      <img
                        className="btn--icon font-bold"
                        src={arrowright}
                        alt=""
                      />
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />

                          <ContentCenterCard
                            image={technique}
                            text={datatext.text8}
                          />
                          <ContentCenterCard
                            image={otherTechnique}
                            text={datatext.text9}
                          />
                        </div>
                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right ">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />

                          <ContentCenterCard
                            image={technique}
                            text={datatext.text8}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (RCA)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (casco)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />

                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (Medicala)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left ">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />

                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />

                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10 ">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (Accidente)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left ">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={technique}
                            text={datatext.text8}
                          />
                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />

                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (Bunuri)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {" "}
                  <div className="content-center__body ">
                    <h4 className="font-extrabold text-center-body">
                      Alege tipul autovehiculului
                    </h4>
                    <div className="flex grid grid-cols-1 lg:grid-cols-2 mt-10 test-drive">
                      <div className="content-center__left ">
                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                          <ContentCenterCard
                            image={car}
                            text={datatext.text1}
                          />
                          <ContentCenterCard
                            image={minitruck}
                            text={datatext.text2}
                          />
                          <ContentCenterCard
                            image={truck}
                            text={datatext.text3}
                          />
                          <ContentCenterCard
                            image={minibus}
                            text={datatext.text4}
                          />
                          <ContentCenterCard
                            image={bus}
                            text={datatext.text5}
                          />

                          <ContentCenterCard
                            image={trailer}
                            text={datatext.text6}
                          />
                          <ContentCenterCard
                            image={refrigerant}
                            text={datatext.text7}
                          />

                          <ContentCenterCard
                            image={technique}
                            text={datatext.text8}
                          />
                          <ContentCenterCard
                            image={otherTechnique}
                            text={datatext.text9}
                          />
                        </div>

                        <div className="content-center__bottom mb-10 lg:mb-0 w-full flex justify-between mt-10">
                          <ButtonBack name="Înapoi" />
                          <ButtonForward name="Înainte" />
                        </div>
                      </div>

                      <div className="content-center__right">
                        {/* Accordion Start */}
                        <Accordion
                          header="Obiectul asigurării (Locuinte)"
                          body={
                            <>
                              <p>
                                Autovehicule înmatriculate în Republica Moldova,
                                care aparţin persoanelor fizice şi juridice.
                              </p>
                              <p>
                                Echipamentul suplimentar, care nu intră în
                                dotarea autovehiculului conform listei de dotări
                                ale uzinei producătoare.
                              </p>
                              <p>
                                Conducătorul auto şi pasagerii, pentru cazuri de
                                accidente care pot avea loc în timpul
                                accidentelor rutiere.
                              </p>
                            </>
                          }
                        />

                        {/* Accordion End */}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel></Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        {/* Place for content-center__body */}
      </div>
    </div>
  );
}
