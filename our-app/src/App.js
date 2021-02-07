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



import Card from "./Card";
import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";
import FormValidation from "./FormValidation";
import ShoppingList from "./shoppingList/ShoppingList";
import CardStateful from "./examples/CardStateful"
import CardStateless from "./examples/CardStateless"

import AddressBook from "./addresBook/AddressBook"
import PersonCardHooks from "./addresBook/PersonCardHooks";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false
        }
    }

    doLogIn = () => {
        this.setState({
            authenticated: true
        })
    }

    doLogOut = () => {
        this.setState({
            authenticated: false
        })
    }


    render (){
      return (
            <div className="App">
                {/*<Card/>*/}
                {/*<InputEvents></InputEvents>*/}
                {/*<MovementEvents></MovementEvents>*/}
                {/*<FormValidation></FormValidation>*/}
                {/*<ShoppingList></ShoppingList>*/}
                {/*<CardStateful food="Test"></CardStateful>*/}
                {/*<CardStateless food="Test2"></CardStateless>*/}
                {/*<AddressBook> </AddressBook>*/}
                {/*<PersonCardHooks> </PersonCardHooks>*/}
                <h1>Hello react router</h1>
                <Router>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Aniu Kliknij Tu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about/123">About 123</Link></li>
                    </ul>
                    <Switch>
                        {/*<Route exact path="/" component={Home} />*/}
                        <Route exact path="/" render={() => {
                            return (
                                this.state.authenticated ? (
                                    <Redirect to="/account"/>
                                ) : (
                                    <React.Fragment>
                                        <Home />
                                        <p> Please log in</p>
                                        <button onClick={this.doLogIn}>Log in</button>
                                    </React.Fragment>


                                )
                            )
                        }} />
                        {/*<Route path="/account" componet={Account}*/}
                        <Route path="/account" render={()=> {
                            return (
                                this.state.authenticated ? (
                                    <>
                                        <Home/>
                                        <p>Welcome back!</p>
                                        <button onClick={this.doLogOut}> Log out</button>
                                    </>
                                ) : (
                                    <Redirect to="/"/>
                                )
                            )
                        }}
                        />

                        <Redirect from="/about/:userId" to="/info/:userId"/>
                        <Route path="/info/:userId" component={About} />

                        <Redirect from="/about" to="/info"/>

                        <Route path="/info" component={About} />

                        <Route path="/contact" component={Contact}/>

                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
          );
    }
}

export default App;
