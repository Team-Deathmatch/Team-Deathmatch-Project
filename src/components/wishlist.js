import React from "react";
import {Link} from "react-router-dom";

class Wishlist extends React.Component {
    render() {
        console.log(this.props.item);
        return (
            <div onClick={() => {
                this.props.getIndGame(this.props.item.appId);
                this.props.unhideWishlist();
            }}>
                <div className="row each-game">
                    <img className="col-md-6 col-sm-12 ind-wish" src={this.props.item.image} height="40px"/>
                    <div className="col-md-6 col-sm-offset-1 col-sm-11">
                        <div className="row button-spacing">
                            <div className="col-md-6">
                                <button onClick={() => {
                                    this.props.removeFromWishlist(this.props.item.steamId, this.props.item._id);
                                }} className="remove-button">Remove
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <button className="wish-list-price" onClick={() => {
                                    window.location = `http://store.steampowered.com/app/${this.props.item.appId}`
                                }}>{this.props.item.price}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/game/${this.props.item.appId}`}>
                        <h1 className="wish-list-item">{this.props.item.name}</h1>
                    </Link>

                </div>
            </div>


        );
    }

}


export default Wishlist;