import React from "react";

class SearchedGames extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div>
                <h1>{this.props.item.name}</h1>
            </div>
        )
    }
}

export default SearchedGames;