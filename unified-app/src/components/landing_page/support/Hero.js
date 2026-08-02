import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{fontSize: "20px"}}>Track Tickets</a>
      </div>
      <div className=" row p-5 m-3" id="supportWrapper">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. How do I activate F&O, whyb is my order is getting rejected" />
          <br></br>
          <a href="">Track account opening</a>&nbsp;
          <a href="">Track segement activation</a>&nbsp;
          <a href="">Intraday margins</a>&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages -MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
