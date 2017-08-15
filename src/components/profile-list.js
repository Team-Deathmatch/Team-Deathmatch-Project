import React from "react";
import Profile from "./profile";


class ProfileList extends React.Component {
    genGames() {
        return this.props.gamesOwned.sort((a, b) => {
            return b.playtime_forever - a.playtime_forever;
        }).map((item, index) => {
            return <Profile currentUser={this.props.currentUser} game={item} index={index} key={item + index}/>
        })
    }

    render() {
        return (
                <div className="games-scroll">
                    <h1 className="play">OWNED GAMES</h1>
                    <div className="bar"/>
                    {this.genGames()}
                </div>
        )
    }
}

export default ProfileList;