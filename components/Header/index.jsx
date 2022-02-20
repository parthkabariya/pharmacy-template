import React, { useState, useEffect, useRef } from "react";

// import ResponsiveNavLink from "./ResponsiveNavLink";
import Sidebar from "../Common/Sidebar";
import Banner from "./Banner";
import HeaderTop from "./HeaderTop";
import HeaderContent from "./HeaderContent";

/**
 * Header
 * @param {Object} props
 * @return {Object}
 **/
export default function Header({ showBanner = false }) {
  const [showingSidebar, setShowingSidebar] = useState(false);
  const [viaTransparent, setViaTransparent] = useState("via-transparent");
  const sidebarWrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = function () {
      if (scrollY > 50) {
        setViaTransparent("");
      } else {
        setViaTransparent("via-transparent");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarWrapperRef.current &&
        !sidebarWrapperRef.current.contains(e.target)
      ) {
        setShowingSidebar(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showingSidebar]);
  const sidebarHandler = (value) => {
    setShowingSidebar(value);
  };
  return (
    <div className="hero-wrapper">
      <header className="hero grid items-center">
        {showBanner && (
          <Banner />
        )}
        <div
          className="relative flex items-top justify-center bg-gray-100
              dark:bg-gray-900 sm:items-center sm:pt-0"
        >
          <div
            id="header-wrapper"
            className={`fixed w-full top-0 
                sm:block bg-gradient-to-r from-sky-300 ${viaTransparent}
                to-sky-800 z-10`}
          >
            <HeaderTop />
            <HeaderContent />
          </div>
          <Sidebar
            ref={sidebarWrapperRef}
            showingSidebar={showingSidebar}
            sidebarHandler={sidebarHandler}
          />
        </div>
      </header>
    </div>
  );
}
