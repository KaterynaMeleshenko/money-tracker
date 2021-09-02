import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import Balance from "../Balance/Balance";
import ShowLimitInfo from "./ShowLimit";


function Charges() {
  return(
    <>
      <Balance/>

      {ShowLimitInfo()}

      <div className="content__tabs">
        <NavLink exact to="/incomes" activeClassName={'selected'} className="content__tab">Incomes</NavLink>
        <NavLink to="/outcomes" activeClassName={'selected'} className="content__tab">Outcomes</NavLink>
      </div>
    </>   
  )
}

export default Charges;