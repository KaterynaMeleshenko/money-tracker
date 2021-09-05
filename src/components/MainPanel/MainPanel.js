import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function MainPanel() {
  const { pathname } = useLocation();

  return(
    <nav className="menu">
      <div className="logo">
        <img className="logo__img" src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/coins_money_cash_dollar_gold-512.png" alt="" />
          <h1 className="logo__title">MoneyTracker</h1>
      </div>
      <ul className="menu__items">
        <li className='menu__item'> 
          <NavLink 
            to="/incomes" 
            isActive={() => ['/incomes', '/outcomes'].includes(pathname)}
            activeClassName={'selected_menu'}>
            <i className="fas fa-home"/>
              Home
          </NavLink> 
        </li>
        <li className="menu__item">
          <NavLink to="/categories" activeClassName={'selected_menu'}>
            <i className="fas fa-tasks"/>
              Categories
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/statistics" activeClassName={'selected_menu'}>
            <i className="fas fa-chart-line"/>
              Statistics
          </NavLink>
        </li>
        <li className="menu__item menu__item-settings">
          <NavLink to="/settings" activeClassName={'selected_menu'}>
            <i className="fas fa-users-cog"/>
              Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainPanel;

