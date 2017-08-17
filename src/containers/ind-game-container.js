import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import IndGamePics from "../components/ind-game-pics";


class IndGameContainer extends React.Component {
    indGamePics() {
        return this.props.indGame.screenshots.map((item, index) => {
            return <IndGamePics setCurrentPic={this.props.setCurrentPic} item={item} index={index} key={item + index}/>
        })
    }

    unhideVideo() {
        document.querySelector(".game-movie").style.display = "inline";
        document.querySelector(".current-pic").style.display = "none"
    }

    render() {
        if (this.props.indGame === undefined) {
            return <div>Not Valid</div>
        } else {
            if (this.props.indGame.name === undefined) {
                return <div>Loading</div>
            } else {
                let movie = "";
                let movieThumbnail = "";
                let movieStyle = {};
                let picStyle = {};
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
                console.log(this.props.indGame);
                let description = "";
                if (this.props.indGame.short_description !== "") {
                    description = this.props.indGame.short_description;
                } else {
                    description = this.props.indGame.detailed_description;
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
                                <img style={picStyle} className="current-pic" src={this.props.currentPic} height="337"
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
                                        <p style={{
                                            marginTop: "2vh",
                                            height: "100px",
                                            overflow: "hidden"
                                        }}>{description}</p>
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
                            <div className="col-md-5">

                            </div>
                        </div>
                        <div>{this.props.indGame.release_date.date}</div>
                    </div>
                );
            }

        }

    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(IndGameContainer);