import React, { useState } from "react";
import { Link, useRouteMatch} from 'react-router-dom';
import { useSelector } from "react-redux";
import MainPanel from "../MainPanel/MainPanel";
import Balance from "../Balance/Balance";
import ShowCategoriesContent from "./ShowCategories";
import down_arrow from "../../img/down_arrow.svg";


function Categories() {
  
  const match = useRouteMatch();
  const categoriesData = useSelector(state => state.addCategoryReducer);
  
  const [sortCat, setSortCat] = useState("All");
 
  function showCategories() {
    if (sortCat === "All") {
      return categoriesData.categories
        .map(category => <ShowCategoriesContent {...category} key={category.id}/>); 
    } else if (sortCat === "Name") {
        return categoriesData.categories
          .sort((a, b) => a.name > b.name ? 1 : -1)
          .map(category => <ShowCategoriesContent {...category} key={category.id}/>);
    } else if (sortCat === "Description") {
        return categoriesData.categories
          .sort((a, b) => a.description > b.description? 1 : -1)
          .map(category => <ShowCategoriesContent {...category} key={category.id}/>);
    } else if (sortCat === "Date") {
        return categoriesData.categories
          .sort((a, b) => a.date > b.date ? 1 : -1)
          .map(category => <ShowCategoriesContent {...category} key={category.id}/>);
      }
  }

  return(
    <div className="main">
      <MainPanel />
        <div className="content">
          <div className="content__up">
            <Balance />
              <div className="content__tabs" style={{marginTop: 223 + "px"}}>
                <div className="content__filters" >
                  <div className="content__filter">
                    <h2 className="content__filter-title">Categories</h2>
                  </div>
                  <Link to={ match.path + "/newcategory" } className="content__filters-btn">ADD MORE</Link>
                </div>
              </div>
              <div className="table__head">
                <div className="table__head-item category">
                  <p className="table__head-title">Category</p>
                    <button 
                      className="table__head-btn" 
                      id="head-btn__category" key="header-title-category"
                      onClick={() => {
                        setSortCat("Name");
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
                        setSortCat("Description");
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
                        setSortCat("Date");
                      }}>
                      <img className="table__head-img" src={down_arrow} alt=""/>
                    </button>
                </div>
                <div className="table__head-item author">
                  Author
                </div>
                <div className="table__head-item action">
                  <p className="table__head-title">Action</p>
                </div>
              </div>
              <div className="content__bottom">
                <div className="table__content">

                { showCategories() }

                </div>
              </div>
          </div>
        </div>
    </div> 
    )
}

export default Categories;