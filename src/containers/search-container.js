import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";
import SearchList from "../components/search-list";

class SearchContainer extends React.Component {
    constructor(){
        super();
        autoBind(this);
        this.state = {
            search: ""
        }
    }

    handleInput(key, event){
        this.setState({
            [key]: event.target.value
        })
    }

    getValue(key){
        return this.state[key]
    }

    render() {
        console.log(this.props.searchedGames);
        return(
            <SearchList searchedGames={this.props.searchedGames} input={this.state.search} handleInput={this.handleInput} getValue={this.getValue} searchGames={this.props.searchGames}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(SearchContainer);