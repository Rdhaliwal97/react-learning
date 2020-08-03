import React from 'react';

const IconDivider = ({ theme="light"}) => {
  return (
    <div className={"divider-custom divider-"+theme}>
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
      <div className="divider-custom-line"></div>
    </div>
  );
}

export default IconDivider;