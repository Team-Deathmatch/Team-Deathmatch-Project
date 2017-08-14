import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import Navbar from "./components/navbar";
import "./index.css";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ProfileListContainer from "./containers/profile-list-container";

//import components
import Base from "./components/base";
import Footer from "./components/footer";

//css
import "./index.css";

const STORE = createStore(reducers, applyMiddleware(thunk));



class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={ProfileListContainer}/>
                        <Route exact path="/home" component={Base} />
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
