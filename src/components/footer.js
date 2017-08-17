import React from 'react';

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="row foot">
                <div className="col-lg-4 git">
                    <h3>Dakota Heninger</h3>
                    
                </div>
                <div className="col-lg-4 git">
                    <h3>Jordan Jensen</h3>
                   
                </div>
                <div className="col-lg-4 git">
                    <h3>Wyatt Blackhurst</h3>
        
                </div>
                    <h5 className="rights">Copyrights <FontAwesome name="copyright"/> Team-Deathmatch 2017</h5>
                

            </div>
        );
    }
}

export default Footer;