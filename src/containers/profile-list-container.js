import React from "react";
import ProfileList from "../components/profile-list";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

import autoBind from "react-autobind";

class ProfileListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            price: "",
            hoursPlayed: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return(
            <ProfileList handleChange={this.handleChange} />
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(ProfileListContainer);