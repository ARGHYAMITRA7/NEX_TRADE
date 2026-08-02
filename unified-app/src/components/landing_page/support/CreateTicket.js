import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          To create a Ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">
            <i class="fa-solid fa-circle-plus"></i>Account Opening
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Resident individual</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Minor</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Non Resident Indian (NRI)</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Company, Partnership, HUF and LLP</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Glossary</li>
            </a>
          </ul>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">
            <i class="fa-solid fa-circle-user"></i>Your Zerodha Account
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Your Profile</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Account modification</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>
                Client Master Report (CMR) and Depository Participant (DP)
              </li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Nomination</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Transfer and conversion of securities</li>
            </a>
          </ul>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h4 className="">
            <i class="fa-solid fa-chart-column"></i>Kite
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>IPO</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Trading FAQs</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Margin Trading Facility (MTF) and Margins</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Charts and orders</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Alerts and Nudges</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>General</li>
            </a>
          </ul>
        </div>
        <div className="col-4 p-5">
          <h4 className="">
            <i class="fa-solid fa-indian-rupee-sign"></i>Funds
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Add money</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Withdraw money</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Add bank accounts</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>eMandates</li>
            </a>
          </ul>
        </div>
        <div className="col-4 p-5">
          <h4 className="">
            <i class="fa-solid fa-terminal"></i>Console
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Portfolio</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Corporate actions</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Funds statement</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Reports</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Profile</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Segments</li>
            </a>
          </ul>
        </div>
        <div className="col-4 p-5">
          <h4 className="">
            <i class="fa-solid fa-coins"></i>Coin
          </h4>
          <ul style={{lineHeight: "2.5"}}>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Mutual funds</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>National Pension Scheme(NPS)</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Features on Coin</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Payments and Orders</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>General</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
