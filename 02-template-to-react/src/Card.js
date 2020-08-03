import React from "react";

const Card = ({ title = "Card title", link, cardTxt="lorem ipsum", btnText="Button" }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img
        src={link}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardTxt}</p>
        <a href="#" className="btn btn-success">{btnText}</a>
      </div>
    </div>
  );
};

export default Card