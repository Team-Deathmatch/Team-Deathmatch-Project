import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import Base from "../components/base";
import User from "../components/user";
import ProfileList from "../components/profile-list";


class BaseContainer extends React.Component {
    componentWillMount() {
        if (this.props.currentUser.id === undefined) {
            let infoArr = window.location.href.split("&");
            let finalArr = [];
            for (let i = 0; i < infoArr.length; i++) {
                finalArr.push(infoArr[i].split("="));

            }
            let finalObj = {};
            finalArr.forEach((item => {
                finalObj[item[0]] = [item[1]];
            }));
            this.props.setUser(finalObj);
            if (finalObj.id !== undefined) {
                console.log(finalObj.id);
                this.props.getOwnedGames(finalObj.id);
            }
        }

    }

    render() {
        if (this.props.currentUser.id === undefined) {
            return (
                <div>
                    <Base/>
                </div>
            )
        } else {
            return (
                <div>
                    <ProfileList gamesOwned={this.props.gamesOwned} currentUser={this.props.currentUser}/>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(BaseContainer);