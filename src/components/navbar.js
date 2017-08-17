import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";


class Navbar extends React.Component {
    render() {
        let profile = "";
        let signInStyle = {};
        let signOutStyle = {};
        let imageStyle = {};
        if(this.props.currentUser.id === undefined){
            profile = "Profile";
            signInStyle = {
                display: "inline"
            };
            signOutStyle = {
                display: "none"
            };
            imageStyle = {
                display: "none"
            };
        } else {
            profile = this.props.currentUser.displayName;
            signInStyle = {
                display: "none"
            };
            signOutStyle = {
                display: "inline"
            };
            imageStyle = {
                display: "inline"
            }
        }
        return (
            <div className="row">
                <div className="navbar-custom">
                    <div className="nav-items">
                        <i className="fa fa-gamepad fa-2x" aria-hidden="true"></i>
                        <li><Link className="link-title" to="/">Team Deathmatch</Link></li>
                        <li><Link className="link" to="/"><img style={imageStyle} className="profile-pic" src={this.props.currentUser.avatar}/>{profile}</Link></li>
                        <li><Link className="link" to="/search">Search</Link></li>
                        <li><a style={signInStyle} className="link sign-in" href="auth/steam">Sign In</a></li>
                        <li><a style={signOutStyle} className="link sign-out" href="/">Sign Out</a></li>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(Navbar);