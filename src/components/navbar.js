import React from "react";
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="navbar-custom">
                    <div className="nav-items">
                        <i className="fa fa-gamepad fa-2x" aria-hidden="true"></i>
                        <li><Link className="link-title" to="/">Team Deathmatch</Link></li>
                        <li><Link className="link" to="/profile">Profile</Link></li>
                        <li><Link className="link" to="/search">Search</Link></li>
                        {/*<li><Link className="link" to="#">Sign In</Link></li>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;