import React from "react";


class Languages extends React.Component{
    render() {
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <div className="ind-category">
                    <div className="category-name">{this.props.item}</div>
                </div>
            </div>
        );
    }

}


export default Languages;