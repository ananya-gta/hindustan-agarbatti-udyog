import React from "react";
import LOGO from "../../assets/logo.jpg";
import "../header/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-top-left">
          <img className="logo" src={LOGO} alt="logo of HAU" />
          <div className="desc">
            <h1>Hindustan Agarbatti Udyog</h1>
            <div className="gst-loc-tsh">
              <div className="loc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <g data-name="Group 2198" transform="translate(-172 -287)">
                    <circle
                      data-name="Ellipse 103"
                      cx="9"
                      cy="9"
                      r="9"
                      transform="translate(173 287)"
                      fill="#777"
                    ></circle>
                    <path
                      data-name="Path 1044"
                      d="M5.71,1.679a3.286,3.286,0,0,0-4.728,0A3.762,3.762,0,0,0,.714,6.407L3.39,10.243,6.067,6.407A4.036,4.036,0,0,0,5.71,1.679ZM3.39,5.158a1.071,1.071,0,0,1,0-2.141A.984.984,0,0,1,4.461,4.087,1.085,1.085,0,0,1,3.39,5.158Zm0,0"
                      transform="translate(178.59 291.182)"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>{" "}
                <a
                  href="https://www.google.co.in/maps/dir//26.41741000,80.33089500"
                  target="_blank"
                >
                  <span>Virat Nagar, Kanpur, Uttar Pradesh</span>
                </a>
              </div>
              <div className="gst">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                >
                  <g data-name="Group 2121" transform="translate(-1303 -208)">
                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="8.5"
                      fill="#36d336"
                      data-name="Ellipse 102"
                      transform="translate(1303 208)"
                    ></circle>
                    <path
                      d="M4380.563 5908.823l-1.076 1.076-4.009 4.011-2.033-2.032-.276-.278-.545.547-.544.545 3.4 3.4 6.176-6.177zm0 0"
                      fill="#e9e9e9"
                      data-name="Path 1028"
                      transform="translate(-3065.596 -5695.823)"
                    ></path>
                  </g>
                </svg>
                <span>
                  GST No.
                  <span class="fw_p">09AAIFH5913M1ZY</span>
                </span>
              </div>
              <div class="tsH">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17.274"
                  viewBox="0 0 16.543 17.274"
                >
                  <g
                    data-name="Group 1336"
                    transform="translate(-4369.391 -5904.945)"
                  >
                    {" "}
                    <circle
                      cx="8.271"
                      cy="8.271"
                      r="8.271"
                      fill="#efc732"
                      data-name="Ellipse 81"
                      transform="translate(4369.391 5904.945)"
                    ></circle>{" "}
                    <path
                      d="M0 0h16.542v2.789H0z"
                      fill="#efc732"
                      data-name="Rectangle 624"
                      transform="translate(4369.391 5919.429)"
                    ></path>{" "}
                    <path
                      d="M4380.563 5908.823l-1.076 1.076-4.009 4.011-2.033-2.032-.276-.278-.545.547-.544.545 3.4 3.4 6.176-6.177zm0 0"
                      fill="#d02627"
                      data-name="Path 939"
                      transform="translate(.796 1.148)"
                    ></path>
                  </g>
                </svg>
                <span>
                  <a
                    href="https://trustseal.indiamart.com/members/hindustan-agarbatti-udyog"
                    target="_blank"
                    rel="noreferrer"
                    class="trustseal"
                  >
                    TrustSEAL Verified
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="header-top-right">
          <div className="call-cta">
            <div className="call_cta">
              <div class="call-icon">
                <svg
                  class="d55_call"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 480.56 480.56"
                  // style={{"fill-color":"white;"}}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
		c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4 c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
		c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
		c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
		c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"
                    ></path>
                    <path
                      d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
		c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"
                    ></path>
                    <path
                      d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
		l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="ds1 p3" id="Sms_cta">
                <span id="pns_details">Call 08047641868</span>
                <span>73% Response Rate</span>
              </div>
            </div>
          </div>
          <div className="email-cta">
            <div class="email">
              <div class="email-icon"></div>
              <div class="email-text">Send Email</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="header-nav">
        <div class="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Products</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact Us</a>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
