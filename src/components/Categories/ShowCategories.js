import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_CATEGORY } from "../../redux/types";
import btn_del from "../../img/btn_del.svg";
import btn_edit from "../../img/btn_edit.svg";



export default function ShowCategoriesContent({id, name, date, description, icon}) {

  const userData = useSelector(state => state.addUserInfo);
  const dispatch = useDispatch();

  const dateFormatChange = (date) => {
    const dateToArray = date.split("-")
    const newFormatDate = dateToArray[2]+"."+dateToArray[1]+"."+dateToArray[0];
    return newFormatDate;
  }

  const deleteCategoryAction = ({
    type: DELETE_CATEGORY,
    categoryId: id,    
  })

  return (
    <div className="table__line">
      <div className="table__content-item category">
        <span className="table__content-img">
          <i className={icon}/>
        </span>
        <span className="table__content-descr">
            {name}
        </span>
      </div>
        <div className="table__content-item description">{description}</div>
          <div className="table__content-item date">{dateFormatChange(date)}</div>
            <div className="table__content-item author">
              <img className="table__author-img" src={userData.photo} alt=""/>
            </div>
            <div className="table__content-action action">
              <button className="table__content-btn" id="btn-edit">
                <img className="table__btn-img" src={btn_edit} alt="edit" title="edit" />
              </button>
              <button className="table__content-btn" id="btn-del">
                <img 
                  className="table__btn-img"
                  src={btn_del}
                  alt="delete"
                  title="delete"
                  onClick={() => {
                  dispatch(deleteCategoryAction);
                  }}/>
              </button>
            </div>
        </div>
) 
}
