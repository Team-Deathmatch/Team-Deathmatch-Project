import React from "react";
import Profile from "./profile";


class ProfileList extends React.Component {
    genGames() {
        return this.props.gamesOwned.sort((a, b) => {
            return b.playtime_forever - a.playtime_forever;
        }).map((item, index) => {
            return <Profile game={item} index={index} key={item + index}/>
        })
    }

    render() {
        return (
            <div className="main-page">
                <div className="row">
                    <h1 className="play">{this.props.currentUser.displayName} Game List</h1>
                    <div className="bar"/>
                    <div className="col-md-offset-1 col-md-5 games-scroll">
                        {this.genGames()}
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                        <input placeholder="Add Games To Wish List" className="form-control"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileList;