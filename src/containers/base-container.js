import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";
import Base from "../components/base";
import ProfileList from "../components/profile-list";


class BaseContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            search: ""
        }

    }

    handleInput(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    getValue(key) {
        return this.state[key]
    }

    hideWishlist() {
        document.querySelector(".profile-wishlist").style.display = "none";
        document.querySelector(".profile-searched-games").style.display = "inline";
    }

    unhideWishlist() {
        document.querySelector(".profile-wishlist").style.display = "inline";
        document.querySelector(".profile-searched-games").style.display = "none";
    }


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
                this.props.getOwnedGames(finalObj.id);
                this.props.getWishlist(finalObj.id);
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
                    <ProfileList removeFromWishlist={this.props.removeFromWishlist} unhideWishlist={this.unhideWishlist} hideWishlist={this.hideWishlist}
                                 getIndGame={this.props.getIndGame} searchedGames={this.props.searchedGames}
                                 input={this.state.search} handleInput={this.handleInput} getValue={this.getValue}
                                 searchGames={this.props.searchGames} currentWishlist={this.props.currentWishlist}
                                 gamesOwned={this.props.gamesOwned} currentUser={this.props.currentUser}/>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(BaseContainer);