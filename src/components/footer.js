import React from 'react';
import {Link} from "react-router-dom";

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="row foot">
                <div className="foot-dev">
                    <Link className="link" to="/developers">Developers</Link>
                </div>

                    <h5 className="rights">Copyrights <FontAwesome name="copyright"/> Team-Deathmatch 2017</h5>
                

            </div>
        );
    }
}

export default Footer;