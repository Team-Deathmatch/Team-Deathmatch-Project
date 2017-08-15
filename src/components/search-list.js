import React from "react";
import SearchedGames from "./searched-games";


class SearchList extends React.Component{
    genSearchedGames(){
        return this.props.searchedGames.map((item, index) =>{
            return <SearchedGames item={item} index={index} key={item +index}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <input className="form-control" value={this.props.getValue("search")} onChange={(event) => {
                        this.props.handleInput("search", event);
                    }}/>
                    <a onClick={()=>{
                        this.props.searchGames(this.props.input)
                    }}>Search</a>
                </div>
                <div className="searched-games">
                    {this.genSearchedGames()}
                </div>
            </div>
        );
    }

}

export default SearchList;