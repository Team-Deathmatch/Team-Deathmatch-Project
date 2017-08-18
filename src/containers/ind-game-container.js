import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import IndGamePics from "../components/ind-game-pics";
import Categories from "../components/categories";
import Developers from "../components/developers";
import Genres from "../components/genres";
import Publishers from "../components/publishers";


class IndGameContainer extends React.Component {
    indGamePics() {
        return this.props.indGame.screenshots.map((item, index) => {
            return <IndGamePics setCurrentPic={this.props.setCurrentPic} item={item} index={index} key={item + index}/>
        })
    }

    categories() {
        return this.props.indGame.categories.map((item, index) => {
            return <Categories item={item} index={index} key={item + index}/>
        })
    }

    developers() {
        return this.props.indGame.developers.map((item, index) => {
            return <Developers item={item} index={index} key={item + index}/>
        })
    }

    genres() {
        return this.props.indGame.genres.map((item, index) => {
            return <Genres item={item} index={index} key={item + index}/>
        })
    }

    publishers() {
        return this.props.indGame.publishers.map((item, index) => {
            return <Publishers item={item} index={index} key={item + index}/>
        })
    }

    unhideVideo() {
        document.querySelector(".game-movie").style.display = "inline";
        document.querySelector(".current-pic").style.display = "none"
    }

    addOrNot(arr) {
        let saveData = {
            name: this.props.indGame.name,
            image: this.props.indGame.header_image,
            price: "",
            appId: this.props.indGame.steam_appid,
            steamId: ""
        };
        if (this.props.indGame.is_free === true) {
            saveData.price = "Free"
        } else {
            saveData.price = `$${(this.props.indGame.price_overview.final / 100).toFixed(2)} ${this.props.indGame.price_overview.currency}`;
        }
        if (this.props.currentUser.id === undefined) {
            saveData.steamId = "";
        } else {
            saveData.steamId = this.props.currentUser.id[0];
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === this.props.indGame.name) {
                return (
                    <Link to="/">
                        <button onClick={() => {
                            if (this.props.currentUser.id === undefined) {
                                window.location = "/auth/steam"
                            } else {
                                this.props.removeFromWishlist(this.props.currentUser.id, this.props.currentWishlist[i]._id);
                            }
                        }}>Remove From Wishlist
                        </button>
                    </Link>
                )
            }
        }
        return (
            <Link to="/">
                <button onClick={() => {
                    if (this.props.currentUser.id === undefined) {
                        window.location = "/auth/steam"
                    } else {
                        this.props.addToWishlist(saveData);
                    }
                }}>Add to Wishlist
                </button>
            </Link>
        )
    }

    render() {
        if (this.props.indGame === undefined) {
            return <div>Not Valid</div>
        } else {
            console.log(this.props.indGame.type);
            if (this.props.indGame.type !== "game") {
                return <div>This is not a game! Select Another!</div>
            } else {
                if (this.props.indGame.name === undefined) {
                    return <div>Loading</div>
                } else {
                    let movie = "";
                    let movieThumbnail = "";
                    let movieStyle = {};
                    let picStyle = {};
                    let price = "";
                    let platforms = "";
                    if (this.props.indGame.movies === undefined) {
                        if (this.props.currentPic === "") {
                            this.props.setCurrentPic(this.props.indGame.screenshots[0].path_thumbnail);
                        }
                        movie = "";
                        movieThumbnail = "";
                        movieStyle = {
                            display: "none"
                        };
                        picStyle = {
                            display: "inline"
                        };
                    } else {
                        movie = this.props.indGame.movies[0].webm['480'];
                        movieThumbnail = this.props.indGame.movies[0].thumbnail;
                        movieStyle = {
                            display: "inline"
                        };
                        picStyle = {
                            display: "none"
                        };
                    }
                    if (this.props.indGame.is_free === true) {
                        price = "Free"
                    } else {
                        price = `$${(this.props.indGame.price_overview.final / 100).toFixed(2)} ${this.props.indGame.price_overview.currency}`;
                    }
                    let description = "";
                    if (this.props.indGame.short_description !== "") {
                        description = this.props.indGame.short_description;
                    } else {
                        description = this.props.indGame.detailed_description;
                    }
                    for (let key in this.props.indGame.platforms) {
                        if (this.props.indGame.platforms[key] === true) {
                            platforms += `<li>${key}</li> `;
                        }
                    }
                    return (
                        <div style={{backgroundImage: `url(${this.props.indGame.background})`}}>
                            <div className="row">
                                <div className="col-md-offset-1 col-md-11">
                                    <h1>{this.props.indGame.name}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <img style={picStyle} className="current-pic" src={this.props.currentPic}
                                         height="337"
                                         width="600"/>
                                    <video className="game-movie" style={movieStyle} width="600" height="337" controls
                                           src={movie}></video>
                                </div>
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={`${this.props.indGame.header_image}`}/>
                                        </div>
                                        <div className="col-md-10">
                                            <p dangerouslySetInnerHTML={{__html: description}} style={{
                                                marginTop: "2vh",
                                                height: "100px",
                                                overflow: "hidden"
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <div className="game-pics"><img onClick={() => {
                                        this.unhideVideo();
                                    }} className="game-thumbnail" height="80px" style={movieStyle}
                                                                    src={movieThumbnail}/>{this.indGamePics()}</div>
                                </div>
                            </div>
                            <div>{this.props.indGame.release_date.date}</div>
                            <div>{this.categories()}</div>
                            <div>{this.developers()}</div>
                            <div>{this.genres()}</div>
                            <div>
                                <div>
                                    Platforms
                                </div>
                                <ul dangerouslySetInnerHTML={{__html: platforms}}/>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: this.props.indGame.pc_requirements.minimum}}/>
                            <div dangerouslySetInnerHTML={{__html: this.props.indGame.pc_requirements.recommended}}/>
                            <div>{this.props.indGame.supported_languages}</div>
                            <div>{price}</div>
                            <div>{this.publishers()}</div>
                            <div>{this.props.indGame.legal_notice}</div>
                            <div>
                                {this.addOrNot(this.props.currentWishlist)}
                            </div>
                            <button onClick={() =>{
                                window.location=`http://store.steampowered.com/app/${this.props.indGame.steam_appid}`
                            }}>Buy</button>


                        </div>
                    );
                }
            }
        }
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(IndGameContainer);