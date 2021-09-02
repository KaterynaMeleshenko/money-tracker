import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_USER_INFO} from "../../redux/types";
import MainPanel from "../MainPanel/MainPanel";
import Balance from "../Balance/Balance";
import { user } from "../../constants";


function UserInfo() {
  const userData = useSelector(state => state.addUserInfo);
  const [name, setName] = React.useState(userData.name);
  const [phone, setPhone] = React.useState(userData.phone);
  const [photo, setPhoto] = React.useState(userData.photo);
  const [alarm, setAlarm] = React.useState(userData.alarm);
  const [limit, setLimit] = React.useState(userData.limit);

  const dispatch = useDispatch();
  
  const addUserInfoAction = ({
    type: ADD_USER_INFO,
    newUser: {
      name,
      phone,
      photo,
      alarm, 
      limit        
    }
  })

  return(
    <div class="main">
      <MainPanel />
        <div className="content">
          <div className="content__up-form">
            <div className="content__form-wrapper">
              <div className="content__form">
                <h2 className="content__form-title">User data</h2>
                  <input
                    className="content__form-input"
                    key="name-input"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                  }}/>
                  <input
                    className="content__form-input"
                    key="phone-input"
                    type="tel"
                    placeholder="Phone number"
                    onChange={(e) => {
                      setPhone(e.target.value);
                  }}/>
                  <input
                    className="content__form-input" 
                    key="photo-input"
                    type="url"
                    placeholder="Link for a photo"
                    onChange={(e) => {
                      setPhoto(e.target.value);
                  }}/>
                  <div className="checkbox__wrapper">
                    <input
                      key="alarm-input" 
                      type="checkbox" 
                      class="custom-checkbox" 
                      id="limit" 
                      name="limit" 
                      onChange={(e) => {
                        setAlarm(!alarm);
                      }}/>   
                    <label className="checkbox__lable" for="limit">Inform about limit</label>
                  </div>
                  <input 
                    className="content__form-input" 
                    key="limit-input"
                    type="number"
                    placeholder="Limit"
                    min="0"
                    onChange={(e) => {
                      setLimit(e.target.value);
                    }}/>
                  <a 
                    className="content__form-btn"
                    key="save-info-button" 
                    onClick={ () => {
                    dispatch(addUserInfoAction)
                  }}> ADD/CHANGE USER DATA 
                  </a>
              </div>
              <div className="user__img-wrapper">
                <div className="user__img">
                  <img className="user__img-size" src={userData.photo} alt="user"/>
                </div> 
                <div className="user__img-descr-wrapper">
                  <div className="display-inline">
                    <i class="fas fa-user"/>
                    <p className="user__img-descr" id="user__img-name">Name: {userData.name}</p>
                  </div>
                </div>
                <div className="user__img-descr-wrapper">
                  <div className="display-inline">
                    <i class="fas fa-phone"/>
                    <p className="user__img-descr" id="user__img-phone">Phone: {userData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
           <Balance />
        </div>
      </div>
    </div>
  )
}

export default UserInfo;