import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import Emergency from './Components/Dropdown/Emergency/Emergency';
import Contact from './Components/Contact/Contact';
import Washing from './Components/Dropdown/Washing/Washing';
import Plumbing from './Components/Dropdown/Plumbing/Plumbing';

function App() {
  return (


    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/washing">
          <Washing/>
        </Route>
        <Route path="/plumbing">
      <Plumbing/>
        </Route>
        <Route path="/emergency">
          <Emergency />
        </Route>
        <Route path="/contact">
      <Contact/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
