import React from "react";


class Categories extends React.Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div className="ind-category">
                    <div className="category-name">{this.props.item.description}</div>
                </div>
            </div>
        );
    }

}


export default Categories;