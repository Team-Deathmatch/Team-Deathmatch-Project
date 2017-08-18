import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";
import SearchList from "../components/search-list";

class SearchContainer extends React.Component {
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

    render() {
        return (
            <SearchList unhideWishlist={this.unhideWishlist} hideWishlist={this.hideWishlist}
                        getIndGame={this.props.getIndGame} searchedGames={this.props.searchedGames}
                        input={this.state.search} handleInput={this.handleInput} getValue={this.getValue}
                        searchGames={this.props.searchGames}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SearchContainer);