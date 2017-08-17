import React from "react";


class Genres extends React.Component{
    render() {
        return (
            <div>{this.props.item.description}</div>
        );
    }

}


export default Genres;