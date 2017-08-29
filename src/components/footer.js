import React from 'react';
import {Link} from "react-router-dom";

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="row foot">
                <div className="foot-dev navbar-inverse navbar-default navbar-fixex-bottom">
                    <Link className="link" to="/developers">Developers</Link>
                    <h5 className="rights">Copyrights <FontAwesome name="copyright"/> Team-Deathmatch 2017</h5>

                </div>
            </div>
        );
    }
}

export default Footer;