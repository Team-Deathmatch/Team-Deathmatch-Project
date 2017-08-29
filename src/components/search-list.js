import React from "react";
import SearchedGames from "./searched-games";


class SearchList extends React.Component {
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

    render() {
        return (
            <div className="margin-search">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.searchGames(this.props.input);
                    this.props.hideWishlist();
                }} className="input-group">
                    <input className="form-control" value={this.props.getValue("search")} onChange={(event) => {
                        this.props.handleInput("search", event);
                    }}/>
                    <span className="input-group-btn">
                    <button className="wish-list-button" type="submit">Search</button>
                    </span>
                </form>
                <div className="searched-games">
                    {this.genSearchedGames()}
                </div>
            </div>
        );
    }

}

export default SearchList;