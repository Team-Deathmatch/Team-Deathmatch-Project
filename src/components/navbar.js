import React from "react";
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar center navbar-default navbar-fixed-top center">
                    <div className="navbar-inner">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Team Deathmatch</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;