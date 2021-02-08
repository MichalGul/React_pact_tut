import './App.css';
import './Default.css'
import React, {Component, Fragment} from "react";
import {BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Nav from "./starWars/Nav";
import Vehicle from "./starWars/Vehicle";


class AppSW extends Component {

    render () {
      return (
            <div className="App">
                <h1>Star Wars Vehicles</h1>
                <Router>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                    <hr/>
                        <Nav/>
                    <hr/>
                    <Switch>

                        <Route exact path="/" component={Home} />

                        <Route path="/vehicle/:vehicleId" component={Vehicle} />

                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
          );
    }
}

export default AppSW;
