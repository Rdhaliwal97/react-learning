import React from "react";
import IconDivider from './IconDivider';

const HeaderMain = () => (
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      {/* <!-- Masthead Avatar Image--> */}
      <img
        className="masthead-avatar mb-5"
        src="assets/img/avataaars.svg"
        alt=""
      />
      {/* <!-- Masthead Heading--> */}
      <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
      {/* <!-- Icon Divider--> */}
      <IconDivider />
      {/* <!-- Masthead Subheading--> */}
      <p className="masthead-subheading font-weight-light mb-0">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  </header>
);

export default HeaderMain;
