import react from "react";

const ContactVia = () => (
  <>
    <span
      className="bg-gradient-to-r from-sky-800 via-blue-500 to-sky-600 
            flex flex-grow font-bold text-2xl p-2 m-1 rounded-sm"
    >
      Contact Us Via
    </span>
    <br />
    <ul className="list-inside">
      <li className="flex flex-cols m-1 ml-3 p-1 bg-gradient-to-r from-sky-700 to-sky-600">
        <span className="pl-2">
          <i className="fas fa-map-marked-alt"></i>
        </span>
        <span className="ml-3">
          7201 Wyoming Springs Drive, Suite 300 Round Rock TX 78681
        </span>
      </li>
      <li className="flex flex-cols m-1 ml-3 p-1 bg-gradient-to-r from-sky-700 to-sky-600">
        <span className="pl-2">
          <i className="fas fa-phone-alt"></i>
        </span>
        <span className="ml-3">Call: +1 512-296-2633</span>
      </li>
      <li className="flex flex-cols m-1 ml-3 p-1 bg-gradient-to-r from-sky-700 to-sky-600">
        <span className="pl-2">
          <i className="fas fa-fax"></i>
        </span>
        <span className="ml-3">Fax: +1 512-296-2731</span>
      </li>
      <li className="flex flex-cols m-1 ml-3 p-1 bg-gradient-to-r from-sky-700 to-sky-600">
        <span className="pl-2">
          <i className="fas fa-at"></i>
        </span>
        <span className="ml-3">Email: info@texanpharmacy.com</span>
      </li>
    </ul>
  </>
);

export default ContactVia;
