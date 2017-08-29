import React from "react";
import {Link} from "react-router-dom";

class SearchedGames extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div>
                <Link to={`/game/${this.props.item.appid}`}>
                    <div className="ind-game">
                        <h1 onClick={() => {
                            this.props.getIndGame(this.props.item.appid);
                            this.props.unhideWishlist();
                        }}>{this.props.item.name}</h1>
                    </div>
                </Link>
            </div>
        )
    }
}

export default SearchedGames;