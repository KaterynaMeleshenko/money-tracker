import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import MainPanel from "../MainPanel/MainPanel";
import Balance from "../Balance/Balance";
import Donut from "./Donut";
import Bar from "./Bars";


function Statictics() {
  return (
    <div class="main">
    <MainPanel />
      <div className="content">
        <div className="content__up-form">
          <div className="content__form-wrapper content-charts">
            <h2 className="content__form-title">Statistics</h2>  
              <div className="charts">
                <div className="donut">
                  <Donut />
                </div>
                <div className="bar">
                  <Bar />
                </div>
              </div>
          </div>
          <Balance />
        </div>
      </div>
    </div>
  );
}
 
export default Statictics;