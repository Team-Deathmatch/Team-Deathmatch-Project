import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";

//import components
import Base from "./components/base";
import Footer from "./components/footer";

//css
import "./index.css";

const STORE = createStore(reducers, applyMiddleware(thunk));


class App extends React.Component{
    render() {
        return (
            <div className="container-fluid">
                <Base/>
                <Footer/>
            </div>
        );
    }

}


ReactDOM.render(<Provider store={STORE}><App/></Provider>, document.querySelector("#root"));
