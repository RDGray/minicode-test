import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import close from "../assets/icons/close.svg";
import plus from "../assets/icons/plus.svg";

import "./AccordionStyle.css";

export default function Accordion(props) {
  return (
    <div className="accordion w-full">
      <div className=" accordion__wrapper">
        <Disclosure
          defaultOpen
          as="div"
          className="mb-5 accordion-section"
          tabindex="1"
        >
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open
                    ? "accordion__header flex justify-between w-full border-radius-open focus:outline-none bg-white shadow "
                    : "accordion__header flex justify-between w-full rounded focus:outline-none bg-white shadow "
                } `}
              >
                <h6 className="accordion__header--text font-bold">
                  {props.header}
                </h6>
                <img
                  src={open ? close : plus}
                  alt=""
                  className={`${
                    open ? "accordion__icon " : "accordion__icon "
                  } `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="accordion__content shadow text-sm text-gray-500 bg-white "
                >
                  <div className="accordion__text-area w-full p-5 font-normal scroller">
                    <p>{props.body}</p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mb-5 accordion-section" tabindex="1">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open
                    ? "accordion__header flex justify-between w-full border-radius-open focus:outline-none bg-white shadow "
                    : "accordion__header flex justify-between w-full rounded focus:outline-none bg-white shadow "
                } `}
              >
                <h6 className="accordion__header--text font-bold">
                  {props.header}
                </h6>
                <img
                  src={open ? close : plus}
                  alt=""
                  className={`${
                    open ? "accordion__icon " : "accordion__icon "
                  } `}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  static
                  className="accordion__content shadow text-sm text-gray-500 bg-white "
                >
                  <div className="accordion__text-area w-full p-5 font-normal scroller">
                    <p>{props.body}</p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
