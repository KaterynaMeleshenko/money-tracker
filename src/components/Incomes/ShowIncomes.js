import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_INCOME } from "../../redux/types";
import btn_del from "../../img/btn_del.svg";
import btn_edit from "../../img/btn_edit.svg";



export default function ShowChargesContent({id, category, date, sum, description}) {
  const userData = useSelector(state => state.addUserInfo);
  const categories = useSelector(state => state.addCategoryReducer.categories);
  
  const dateFormatChange = (date) => {
    const dateToArray = date.split("-");
    const newFormatDate = dateToArray[2]+"."+dateToArray[1]+"."+dateToArray[0];
    
    return newFormatDate;
  }
    
  const iconForCategory = () => {
    let obj = categories.find(obj => obj.name === category);
      if (obj) {
        return obj.icon;
      } else {
        return "fas fa-dollar";
      }
  }

  const chargesData = useSelector(state => state.addChargeReducer);
  const dispatch = useDispatch();

  const deleteIncomeAction = ({
    type: DELETE_INCOME,
    data: { 
    incomeId: id, 
    sum: parseInt(sum),   
    }  
  })

  return (
    <div className="table__line">
      <div className="table__content-item category">
        <span className="table__content-img">
          <i className={iconForCategory()}/>
        </span>
        <span className="table__content-descr">
          {category}
        </span>
      </div>
      <div className="table__content-item description">
        {description}
      </div>
      <div className="table__content-item date">

        {dateFormatChange(date)}

      </div>
      <div className="table__content-item money">
        <div className="table__content-money">
          {sum}
        </div>
      </div>
      <div className="table__content-item author">
        <img className="table__author-img" src={userData.photo} alt="" />
      </div>
      <div className="table__content-action action">
        <button className="table__content-btn" id="btn-edit">
          <img 
            className="table__btn-img" 
            src={btn_edit} 
            alt="edit" 
            title="edit" 
            />
        </button>
        <button className="table__content-btn" id="btn-del">
          <img 
            className="table__btn-img"
            src={btn_del}
            alt="delete"
            title="delete"
            onClick={() => {
              dispatch(deleteIncomeAction);
            }}/>
        </button>
      </div>
    </div>
   ) 
}



