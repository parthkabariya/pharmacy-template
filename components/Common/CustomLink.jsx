import Link from "next/link";
import React from "react";

const CustomLink = ({ href, customClass, children }) => (
  <span className={customClass}>
    <Link href={href} passHref>
      {children}
    </Link>
  </span>
);

export default CustomLink;