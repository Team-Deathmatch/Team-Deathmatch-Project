import React from "react";


class Categories extends React.Component{
    render() {
        return (
            <div>{this.props.item.description}</div>
        );
    }

}


export default Categories;