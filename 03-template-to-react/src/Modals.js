import React from 'react';
import PortfolioModal from './PortfolioModal';
const Modals = () => {
  return (
    <React.Fragment>
      <PortfolioModal id="portfolioModal1" title="title 1" btnTxt="button 1" txt="main text 1" imgLink="assets/img/portfolio/cabin.png" />
      <PortfolioModal id="portfolioModal2" title="title 2" btnTxt="button 2" txt="main text 2" imgLink="assets/img/portfolio/cake.png" />
      <PortfolioModal id="portfolioModal3" title="title 3" btnTxt="button 3" txt="main text 3" imgLink="assets/img/portfolio/circus.png" />
      <PortfolioModal id="portfolioModal4" title="title 4" btnTxt="button 4" txt="main text 4" imgLink="assets/img/portfolio/game.png" />
      <PortfolioModal id="portfolioModal5" title="title 5" btnTxt="button 5" txt="main text 5" imgLink="assets/img/portfolio/safe.png" />
      <PortfolioModal id="portfolioModal6" title="5title " btnTxt="button 6" txt="main text 6" imgLink="assets/img/portfolio/submarine.png" />
    </React.Fragment>
  );
}
 
export default Modals;