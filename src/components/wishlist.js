import React from "react";
import {Link} from "react-router-dom";

class Wishlist extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div>
                <Link to={`/game/${this.props.item.appId}`}>
                    <div className="ind-wish" onClick={()=>{
                        this.props.getIndGame(this.props.item.appId);
                        this.props.unhideWishlist();
                    }}>
                        <img src={this.props.item.image} height="40px"/>
                        <h1>{this.props.item.name}</h1>
                        <p>{this.props.item.price}</p>
                    </div>
                </Link>
                <a onClick={() => {
                    this.props.removeFromWishlist(this.props.item.steamId, this.props.item._id);
                }}>Remove</a>
            </div>
        );
    }

}


export default Wishlist;