import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";


class IndGameContainer {
    render() {
        return (
            <div></div>
        );
    }

}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(IndGameContainer);