import React from "react";
import ProfileList from "../components/profile-list";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

import autoBind from "react-autobind";
// import {ScrollBox} from "react-scroll-box/src/main/ScrollBox";

class ProfileListContainer extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "",
    //         hoursPlayed: ""
    //     };
    //     autoBind(this);
    // }
    //
    // handleChange(key, event) {
    //     this.setState({
    //         [key]: event.target.value
    //     })
    // }

    render() {
        return (
                <ProfileList gamesOwned={this.props.gamesOwned} currentUser={this.props.currentUser}/>

        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(ProfileListContainer);