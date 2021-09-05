import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_CATEGORY } from "../../redux/types";
import MainPanel from "../MainPanel/MainPanel";
import Balance from "../Balance/Balance";
import IconsOptions from "./CategoriesOptions";
import formattedDate from "../Date/Date";

function NewCategory() {
  
  formattedDate();

  const categories = useSelector(state => state.addCategoryReducer.categories);

  const [name, setName] = React.useState("New category");
  const [description, setDescription] = React.useState("");
  const [icon, setIcon] = React.useState("&#xf155; fas fa-dollar");
  const [date, setDate] = React.useState(formattedDate());
  const dispatch = useDispatch();
  const iconClass = icon.split(" ")[1]+" "+icon.split(" ")[2];

  const addCategoryAction = ({
    type: ADD_CATEGORY,
    newCategory: {
      name,
      icon: iconClass,
      description,
      date,      
    }
  })
  
  return(
    <div className="main">
      <MainPanel />
        <div class="content">
          <div class="content__up-form">
            <div class="content__form">
              <h2 class="content__form-title">New category</h2>
                <input 
                    className="content__form-input"
                    key="name-input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}/>
                <input 
                  className="content__form-input"
                  key="description-input"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}/>
                <input
                  className="content__form-date"
                  id="date-select"
                  key="date-select"
                  type="date"
                  value={date}
                  min="01/01/1900" 
                  max="01/01/2100"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}/> 
                <select 
                  className="content__form-select icon-select"
                  id="filter-by"
                  key="category-select"
                  type="select"
                  value={icon}
                  onChange={(e) => {
                    setIcon(e.target.value);
                  }}> 

                  {IconsOptions() }

                </select>
                <div
                  className="content__form-btn"
                  key="add-income-button" 
                  onClick={ () => {
                    dispatch(addCategoryAction);
                    setName("New category");
                    setDescription("");
                    setIcon("&#xf155;");
                    setDate(formattedDate())
                  }}> ADD NEW CATEGORY   
                </div>
            </div>
            <Balance />
         </div> 
       </div>
    </div>
  )
}

export default NewCategory;

