import React from 'react';
import IconDivider from './IconDivider';

const PortfolioModal = ({ title, txt, btnTxt, id, imgLink }) => {
  return (
    <div className="portfolio-modal modal fade" id={id} tabIndex="-1" role="dialog"
      aria-labelledby="portfolioModal1Label" aria-hidden="true">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i className="fas fa-times"></i></span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* <!-- Portfolio Modal - Title--> */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{title}</h2>
                  {/* <!-- Icon Divider--> */}
                  <IconDivider theme="dark" />
                  {/* <!-- Portfolio Modal - Image--> */}
                  <img className="img-fluid rounded mb-5" src={imgLink} alt="" />
                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-5">{txt}</p>
                  <button className="btn btn-primary" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>{btnTxt}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioModal;