import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_INCOME } from "../../redux/types";
import MainPanel from "../MainPanel/MainPanel";
import Balance from "../Balance/Balance";
import formattedDate from "../Date/Date";


function NewIncome() {
  
  formattedDate();

  const chargesData = useSelector(state => state.addChargeReducer);
  const categories = useSelector(state => state.addCategoryReducer.categories); 
  const [sum, setSum] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("salary");
  const [date, setDate] = React.useState(formattedDate());
  const dispatch = useDispatch();
  
  const addIncomeAction = ({
    type: ADD_INCOME,
    newIncome: {
      category,
      description,
      date,
      sum: parseInt(sum),         
    }
  })

  return(
    <div className="main">
      <MainPanel />
        <div className="content">
          <div className="content__up-form">
            <div className="content__form">
              <h2 className="content__form-title">New income</h2>
                <input 
                  className="content__form-input"
                  key="sum-input"
                  type="text"
                  placeholder="Total"
                  value={sum}
                  min="0"
                  onChange={(e) => {
                    setSum(e.target.value);
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
                <select 
                  className="content__form-select"
                  id="filter-by"
                  key="category-select"
                  type="select"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}> 

                {categories.map(category => {
                  return <option key={category.id}>{category.name}</option> || null})}

                </select>
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
              <div
                className="content__form-btn"
                key="add-income-button" 
                href=""
                onClick={ () => {
                  dispatch(addIncomeAction);
                  setSum(0);
                  setDescription("");
                  setCategory("salary");
                  setDate(formattedDate())
                }}> ADD NEW INCOME   
              </div>
            </div>
            <Balance />
          </div> 
        </div>
    </div>
    )
}

export default NewIncome;