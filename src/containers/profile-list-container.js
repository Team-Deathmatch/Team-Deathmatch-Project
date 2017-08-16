import React from "react";
import ProfileList from "../components/profile-list";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class ProfileListContainer extends React.Component {

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