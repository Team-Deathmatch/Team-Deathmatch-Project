import React from "react";
import {Link} from "react-router-dom";

class SearchedGames extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/game/${this.props.item.appid}`}>
                <h1 onClick={()=>{
                    this.props.getIndGame(this.props.item.appid)
                }}>{this.props.item.name}</h1>
                </Link>
            </div>
        )
    }
}

export default SearchedGames;