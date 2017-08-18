import React from "react";
import Profile from "./profile";
import Wishlist from "./wishlist";
import SearchedGames from "./searched-games";


class ProfileList extends React.Component {
    genSearchedGames() {
        let gamesInSystem = [];
        return this.props.searchedGames.sort((a, b) => {
            return a.appid - b.appid
        }).filter((item, index) => {
            if (gamesInSystem.indexOf(item.name) === -1) {

                if (item.name.includes('Trailer') || item.name.includes('Demo') || item.name.includes('Soundtrack') || item.name.includes('Monstercat') || item.name.includes('Pack') || item.name.includes('DLC') || item.name.includes('-') || item.name.includes('Guide') || item.name.includes('trailer') || item.name.includes('Gameplay') || item.name.indexOf("RU") === item.name.length - 3 || item.name.includes('Stash') || item.name.includes('Tactics') || item.name.includes('Teaser') || item.name.includes('Season') || item.name.includes('Pass') || item.name.includes('Beta') || item.name.includes('Movie') || item.name.includes('Test') || item.name.includes('Server')) {
                    return false
                } else {
                    gamesInSystem.push(item.name);
                    return true
                }
            } else {
                return false
            }

        }).map((item, index) => {
            return <SearchedGames unhideWishlist={this.props.unhideWishlist} getIndGame={this.props.getIndGame}
                                  item={item} index={index} key={item + index}/>
        })
    }

    genGames() {
        return this.props.gamesOwned.sort((a, b) => {
            return b.playtime_forever - a.playtime_forever;
        }).map((item, index) => {
            return <Profile game={item} index={index} key={item + index}/>
        })
    }

    genWishlist() {
        return this.props.currentWishlist.map((item, index) => {
            return <Wishlist getIndGame={this.props.getIndGame} unhideWishlist={this.props.unhideWishlist}
                             removeFromWishlist={this.props.removeFromWishlist} item={item} index={index}
                             key={item + index}/>
        })
    }

    render() {
        return (
            <div className="main-page">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="play">{this.props.currentUser.displayName} Game List</h1>
                        <div className="bar"/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="play">{this.props.currentUser.displayName} Wish List</h1>
                        <div className="bar"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-1 col-md-5 games-scroll">
                        {this.genGames()}
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                        <div className="row">
                            <div className="col-md-12 games-scroll">
                                <div className=" search-profile">
                                    <input placeholder="Add Games To Wish List" className="form-control"
                                           value={this.props.getValue("search")} onChange={(event) => {
                                        this.props.handleInput("search", event);
                                    }}/>
                                    <a onClick={() => {
                                        this.props.searchGames(this.props.input);
                                        this.props.hideWishlist();
                                    }}>Search</a>
                                </div>
                                <div className="profile-wishlist">
                                    {this.genWishlist()}
                                </div>
                                <div className="profile-searched-games">
                                    {this.genSearchedGames()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileList;