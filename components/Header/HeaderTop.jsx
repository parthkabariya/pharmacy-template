import React from "react";

const HeaderTop = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 py-1 bg-sky-600">
    <div className="p-1 py-2 text-white text-md text-center">
      4270 Bonny Oaks Dr, Chattanooga, Tennessee - 78759, Phone: (111) 111-1111
    </div>
    <div className="p-1 py-2 text-white text-md text-center">
      <span className="font-bold text-md">OPENING HOURS | </span>
      Monday - Friday: 9am to 7pm &nbsp;|&nbsp; Saturday: 9am to 2pm
      &nbsp;|&nbsp; Sunday: CLOSED
    </div>
  </div>
);

export default HeaderTop;
