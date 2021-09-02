import React from "react";
import MainPanel from "../MainPanel/MainPanel";
import Charges from "../Charges/Charges";

function Home() {
  return(
    <div className="main">
      <MainPanel />
      <Charges />
    </div>
  )
}

export default Home;

