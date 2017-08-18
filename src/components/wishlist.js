import React from "react";
import {Link} from "react-router-dom";

class Wishlist extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div className="row-fluid">

                <div onClick={() => {
                    this.props.getIndGame(this.props.item.appId);
                    this.props.unhideWishlist();
                }}>
                    <div className="each-game">
                        <img className="ind-wish" src={this.props.item.image} height="40px"/>
                        <button onClick={() => {
                            this.props.removeFromWishlist(this.props.item.steamId, this.props.item._id);
                        }} className="remove-button">Remove
                        </button>
                        <div>
                            <Link to={`/game/${this.props.item.appId}`}>
                                <h1 className="wish-list-item">{this.props.item.name}</h1>
                            </Link>
                            <button className="wish-list-price" onClick={() =>{
                                window.location=`http://store.steampowered.com/app/${this.props.item.appId}`
                            }}>{this.props.item.price}</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}


export default Wishlist;