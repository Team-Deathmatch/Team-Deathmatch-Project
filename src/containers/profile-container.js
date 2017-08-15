import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import Profile from "../components/profile";

class ProfileContainer extends React.Component {
    render() {
        return(
            <Profile/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(ProfileContainer);