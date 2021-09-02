import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MainPanel from "../MainPanel/MainPanel";
import Charges from "../Charges/Charges";
import ShowChargesContent from "./ShowIncomes";
import down_arrow from "../../img/down_arrow.svg";
import moment from "moment";


function Incomes() {
  
  const categories = useSelector(state => state.addCategoryReducer.categories);

  function formattedMonth(date = new Date) {
    let month = String(date.getMonth() + 1);
    
    if (month.length < 2){
      month = '0' + month;
    }
    
    return month;
  }
  
  let currDate = new Date();
  let days = String(currDate.getDay());
  let formDays = parseInt(days, 2);
  let thisWeek = moment().subtract(formDays || 6, 'days').format('L').split("/");
  let thisWeekFormatted = thisWeek[2] + "-" + thisWeek[0] + "-" + thisWeek[1];

  const chargesData = useSelector(state => state.addChargeReducer);
  
  const [filter, setFilter] = useState("All");
  const [filterValue, setFilterValue] = useState("All categories");
  const [filterArray, setFilterArray] = useState(chargesData.incomes);
  const [filterTimeArray, setFilterTimeArray] = useState(filterArray);

  const [sort, setSort] = useState("All");
  const [sortArray, setSortArray] = useState(filterArray);
  
  function showResult() {
    if (filter === "Category" && filterValue !== "All categories") {
      return (chargesData.incomes)
        .filter(income => income.category === filterValue)
        .map(income => <ShowChargesContent {...income} key={income.id}/>); 
    } else if (filter === "Week") {
      return (chargesData.incomes)
        .filter(income => (income.date) > thisWeekFormatted)
        .map(income => <ShowChargesContent {...income} key={income.id}/>);
    } else if (filter === "Month") {
      return (chargesData.incomes)
        .filter(income => (income.date)
        .split("-")[1] === formattedMonth())
        .map(income => <ShowChargesContent {...income} key={income.id}/>);
    } else {
      return (chargesData.incomes)
        .map(income => <ShowChargesContent {...income} key={income.id}/>);
      }
  }

  return(
    <div className="main">
      <MainPanel />
        <div className="content">
          <div className="content__up">
            <Charges />
              <div className="content__filters">
                <div className="content__filter">
                  <h2 className="content__filter-title">Filter by category:</h2>
                    <select 
                      className="content__filters-select" 
                      id="filter-by"
                      onChange={(e) => {
                        setFilter("Category");
                        setFilterValue(e.target.value);
                    }}>
                      <option key="all categories">All categories</option>
                    
                      {categories.map(category => {
                        return <option key={category.name}>{category.name}</option>
                      })}

                    </select>
                </div>
                <div className="content__filter">
                  <h2 className="content__filter-title">Filter by date:</h2>              
                    <div className="radio-filter__content radio-filter__content-radio">
                      <div className="radio-filter__content-box">
                        <label className="radio-filter__content-label">
                          <input 
                            className="filter-radio"
                            type="radio"
                            name="radio"
                            onChange={() => {
                              setFilter("Week");
                            }}/> this week
                        </label>
                      </div>
                      <div className="radio-filter__content-box">
                        <label className="radio-filter__content-label">
                          <input 
                            className="filter-radio"
                            type="radio"
                            name="radio"
                            onChange={() => {
                              setFilter("Month");
                            }}/> this month
                        </label>
                      </div>
                      <div className="radio-filter__content-box">
                        <label className="radio-filter__content-label">
                          <input 
                            className="filter-radio"
                            type="radio"
                            name="radio"
                            onChange={() => {
                              setFilter("All time");
                            }}/> all the time
                        </label>
                  </div>
                </div>
              </div>

              <NavLink to="/incomes/newincome" className="content__filters-btn">ADD INCOME</NavLink>
            </div>

            <div className="table__head">
              <div className="table__head-item category">
                <p className="table__head-title">Category</p>
                  <button 
                    className="table__head-btn" 
                    id="head-btn__category" key="header-title-category"
                    onClick={() => {
                      setSort("Category");
                      setSortArray(() => (filterArray).sort((a, b) => a.category> b.category ? 1 : -1));
                    }}>
                      <img className="table__head-img" src={down_arrow} alt=""/>
                  </button>              
              </div>
              <div className="table__head-item description">
                <p className="table__head-title">Description</p>
                  <button 
                    className="table__head-btn"
                    id="head-btn__description"
                    key="header-title-description"
                    onClick={() => {
                      setSort("Description");
                      setSortArray(() => (filterArray).sort((a, b) => a.description > b.description? 1 : -1));
                    }}>
                    <img className="table__head-img" src={down_arrow}  alt=""/>
                  </button> 
              </div>
              <div className="table__head-item date">
                <p className="table__head-title">Date</p>
                  <button 
                    className="table__head-btn"
                    id="head-btn__date"
                    onClick={() => {
                      setSort("Date");
                      setSortArray(() => (filterArray).sort((a, b) => a.date > b.date ? 1 : -1));
                    }}>
                    <img className="table__head-img" src={down_arrow} alt=""/>
                  </button>
              </div>
              <div className="table__head-item money">
                <p className="table__head-title">Money</p>
                  <button 
                    className="table__head-btn"
                    id="head-btn__money"
                    key="header-title-money"
                    onClick={() => {
                      setSort("Sum");
                      setSortArray(() => (filterArray).sort((a, b) => +a.sum > +b.sum ? 1 : -1));
                    }}>
                    <img className="table__head-img" src={down_arrow}  alt=""/>
                  </button>
              </div>
              <div className="table__head-item author">
                Author
              </div>
              <div className="table__head-item action">
                <p className="table__head-title">Action</p>
              </div>
            </div>
          </div>

          <div className="content__bottom">
            <div className="table__content">

            { showResult() }

            </div>
          </div>
        </div>
    </div>    
  )
}

export default Incomes;
        
