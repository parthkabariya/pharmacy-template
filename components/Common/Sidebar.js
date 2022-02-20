import React, {forwardRef} from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';
import ApplicationLogo from './ApplicationLogo';

/**
 * Header
 * @param {Object} props
 * @param {Object} ref
 * @param {Object} showingSidebar
 * @return {Object}
 **/
const Sidebar = (props, ref) => (
//   return (
  <>
    <div ref={ref} className={`z-10
      fixed h-full inset-0 bg-sky-700 bg-opacity-95 
      rounded-r-lg sm:hidden transition-all ease-out duration-150 `+
      (props.showingSidebar?'w-3/4':'w-0')}>
      {props.showingSidebar && <div>
        <div className="absolute right-2 top-2">
          <i className="far fa-times-circle text-xl text-white
            hover:text-black" onClick={() => props.sidebarHandler(false)}></i>
        </div>
        <div className="grid justify-items-centera bg-gradient-to-t from-sky-800 via-blue-500 to-sky-800
          items-center h-40 border-b-2">
          <div className="grid flex flex-col justify-items-center gap-3">
            <Link href="/">
              <ApplicationLogo className="block h-9 w-auto text-gray-500" />
            </Link>
          </div>
        </div>
        <div className="h-14 grid justify-items-center border-b-2
        items-center">
          <Link href='/logout' className="">
            <span className="text-white">Login</span>
          </Link>
        </div>
        <div className="h-14 grid justify-items-center border-b-2
        items-center">
          <Link href='/logout' className="">
            <span className="text-white">Register</span>
          </Link>
        </div>
        <div className="h-14 grid justify-items-center border-b-2
        items-center">
          <Link href='/logout' className="">
            <span className="text-white">Contact</span>
          </Link>
        </div>
        <div className="h-14 grid justify-items-center border-b-2
        items-center">
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
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Compounding
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        MTM
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Immunization
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        DME
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Free Delivery
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Parking Pickup/Dropoff
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Refill 24 hours a day
                    </Dropdown.Link>
                    <Dropdown.Link href='/logout' method="post" as="button">
                        Dollar Items/Gifts
                    </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown.Trigger>

          </Dropdown>
        </div>
        <div className="h-14 grid justify-items-center border-b-2
        items-center">
          <Link href='/logout' className="">
            <span className="text-white">About</span>
          </Link>
        </div>
      </div>}
    </div>
  </>
//   );
);

export default forwardRef(Sidebar);
