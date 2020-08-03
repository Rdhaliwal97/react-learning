import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card
              title="Card title 1"
              btnText="Go somewhere 1"
              link="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-4">
            <Card
              title="Card title 2"
              btnText="Go somewhere 2"
              link="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-4">
            <Card
              title="Card title 3"
              btnText="Go somewhere 3"
              link="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
