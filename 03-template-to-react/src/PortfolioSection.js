import React from 'react';
import Portfolio from './Portfolio';
import IconDivider from './IconDivider';

const PortFolioSection = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {/* <!-- Icon Divider--> */}
        <IconDivider theme="dark" />
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row">
          {/* <!-- Portfolio Item 1--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <Portfolio url="assets/img/portfolio/cabin.png" target="#portfolioModal1" />
          </div>
          {/* <!-- Portfolio Item 2--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <Portfolio url="assets/img/portfolio/cake.png" target="#portfolioModal2" />
          </div>
          {/* <!-- Portfolio Item 3--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <Portfolio url="assets/img/portfolio/circus.png" target="#portfolioModal3" />
          </div>
          {/* <!-- Portfolio Item 4--> */}
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <Portfolio url="assets/img/portfolio/game.png" target="#portfolioModal4" />
          </div>
          {/* <!-- Portfolio Item 5--> */}
          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <Portfolio url="assets/img/portfolio/safe.png" target="#portfolioModal5" />
          </div>
          {/* <!-- Portfolio Item 6--> */}
          <div className="col-md-6 col-lg-4">
            <Portfolio url="assets/img/portfolio/submarine.png" target="#portfolioModal6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortFolioSection;