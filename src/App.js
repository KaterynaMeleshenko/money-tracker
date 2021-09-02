import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import NewCategory from './components/NewCategory/NewCategory';
import Statistics from './components/Statistics/Statictics';
import Settings from './components/Settings/Settings';
import Incomes from './components/Incomes/Incomes';
import Outcomes from './components/Outcomes/Outcomes';
import NewIncome from './components/NewIncome/NewIncome';
import NewOutcome from './components/NewOutcome/NewOutcome';
import './App.css';
import './css/style.css';
import './css/reset.css';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/money-tracker">
          <Redirect to="/" />
        </Route>    
        <Route exact path="/">
          <Redirect to="/incomes" />
        </Route> 
        <Route path = "/" component = { Home } exact/>
        <Route exact path = "/categories/:link" children = { <NewCategory />} />
        <Route path = "/categories" component = { Categories }/>
        <Route path = "/statistics" component = { Statistics }/>
        <Route path = "/settings" component = { Settings }/>
        <Route exact path = "/incomes/:link" children = { <NewIncome />} />
        <Route path = "/incomes" component = { Incomes }/>
        <Route exact path = "/outcomes/:link" children = { <NewOutcome/>} />
        <Route path = "/outcomes" component = { Outcomes }/>
      </Switch>
    </Router>
  );
}

export default App;