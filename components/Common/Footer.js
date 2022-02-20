
export default function Footer() {
    return (
        <footer className="py-10 bg-sky-800 text-white divide-y-2 divide-sky-500 divide-opacity-50">
          <div className="grid grid-cols-1 gap-10 md:gap-1 md:grid-cols-3 justify-items-center items-center">
            <ul className="text-center">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
            <div className="text-center">
              <div className="text-lg font-bold">Follow Us On</div>
              <a><i className="fab fa-twitter"></i></a>
              <a className="ml-2"><i className="fab fa-facebook"></i></a>
              <a className="ml-2"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="text-center">
              <h3 className='text-lg font-bold'>INSURANCE</h3>
              <div>
                We accept all major insurances including<br/>
                Medicare & Medicaid
              </div>
            </div>
          </div>
          <ul className="text-center mt-5 pt-5">
            <li>©&nbsp;&nbsp;2022&nbsp;&nbsp;www.kpdpharma.com.<br/>
              All Rights Reserved.</li>
          </ul>
        </footer>
    );
}