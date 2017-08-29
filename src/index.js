import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import "./index.css";
import {Route, HashRouter, Switch} from "react-router-dom";

//import components
import BaseContainer from "./containers/base-container"
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Contact from "./components/contact";


//css
import "./index.css";
import SearchContainer from "./containers/search-container";
import IndGameContainer from "./containers/ind-game-container";

const STORE = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HashRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={BaseContainer}/>
                            <Route exact path="/search" component={SearchContainer} />
                            <Route exact path="/game/:id" component={IndGameContainer}/>
                            <Route exact path="/developers" component={Contact}/>
                        </Switch>
                        <Footer/>
                    </div>
                </HashRouter>
            </div>
        );
    }

}


ReactDOM.render(
    <Provider store={STORE}><App/></Provider>
    , document.querySelector("#root"));
