import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import "./index.css";
import {Route, BrowserRouter, Switch} from "react-router-dom";

//import components
import BaseContainer from "./containers/base-container"
import Footer from "./components/footer";
import ProfileListContainer from "./containers/profile-list-container";
import Navbar from "./components/navbar";


//css
import "./index.css";
import SearchContainer from "./containers/search-container";
import IndGame from "./components/ind-game";
import IndGameContainer from "./containers/ind-game-container";

const STORE = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/profile" component={ProfileListContainer}/>
                            <Route exact path="/" component={BaseContainer}/>
                            <Route exact path="/search" component={SearchContainer} />
                            <Route exact path="/game/:id" component={IndGameContainer}/>
                        </Switch>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

}


ReactDOM.render(
    <Provider store={STORE}><App/></Provider>
    , document.querySelector("#root"));
