import React from "react";
import Link from "next/link";
import ApplicationLogo from "../Common/ApplicationLogo";
import Dropdown from "../Common/Dropdown";
import CustomLink from "../Common/CustomLink";

const HeaderContent = () => (
  <div className="mx-2 flex justify-between">
    <div className="hidden md:flex">
      <Link href="/">
        <ApplicationLogo className="block h-9 w-auto text-gray-500" />
      </Link>
    </div>

    {/* Sidebar Open/Close Button */}
    <div className="flex flex-grow items-center sm:hidden">
      <button
        onClick={() => setShowingSidebar((previousState) => !previousState)}
        className="inline-flex items-center justify-center p-2 ml-2 rounded-md text-gray-400 focus:outline-none
        focus:text-gray-500 transition duration-150 ease-in-out text-xl
        h-8 w-8 rounded-full bg-sky-700"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
    </div>
    {/* Sidebar Open/Close Button */}

    <div className="hidden md:flex flex-row-reverse gap-4 items-center">
      <CustomLink
        href="#"
        customClass="text-sm
        text-white py-2 px-3 hover:bg-sky-600
        rounded-sm"
      >
        Register
      </CustomLink>
      <CustomLink
        href="/login"
        customClass="text-sm text-white
        hover:bg-sky-600 py-2 px-3 
        rounded-sm"
      >
        Log in
      </CustomLink>
      <CustomLink
        href="/contact"
        customClass="text-sm text-white
                        hover:bg-sky-600 py-2 px-3
                        rounded-sm"
      >
        Contact
      </CustomLink>
      <Dropdown>
        <Dropdown.Trigger triggerClasses="hover:bg-sky-600">
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex text-sm text-white
                                        py-2 px-3
                                        rounded-sm transition ease-in-out duration-150"
            >
              Our Services
            </button>
          </span>
          <Dropdown.Content align="center" contentClasses="bg-sky-600">
            <Dropdown.Link href="/dme" method="get" as="button">
              Compounding
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              MTM
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              Immunization
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              DME
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              Free Delivery
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              Parking Pickup/Dropoff
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              Refill 24 hours a day
            </Dropdown.Link>
            <Dropdown.Link href="/dme" method="get" as="button">
              Dollar Items/Gifts
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown.Trigger>
      </Dropdown>
      <CustomLink
        href="#"
        customClass="text-sm text-white
                        hover:bg-sky-600 py-2 px-3
                        rounded-sm"
      >
        About
      </CustomLink>
    </div>
    <div className="flex gap-1 items-center divide-x-2 divide-sky-500">
      <div className="flex flex-col items-center">
        <a
          href="mailto:kpdpharma@mail.com"
          className="text-sm
                          text-white px-2 hover:bg-sky-700 hover:bg-opacity-60
                          rounded-sm cursor-pointer"
        >
          kpdpharma@mail.com
        </a>
        <a
          href="tel:1111111111"
          className="text-sm
                          text-white px-2 hover:bg-sky-700 hover:bg-opacity-60
                          rounded-sm cursor-pointer"
        >
          +1 (111) 111-1111
        </a>
      </div>
      <div
        className="text-sm
                        text-white p-2 hover:bg-sky-700 hover:bg-opacity-60
                        rounded-sm cursor-pointer"
      >
        <Link href="#">
          <i className="fas fa-map-marked-alt"></i>
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderContent;
