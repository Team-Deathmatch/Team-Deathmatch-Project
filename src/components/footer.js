import React from 'react';

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="row foot">
                <div className="col-lg-4">
                        <h3>Dakota Heninger</h3>
                        <span className="fa-stack fa-lg hub">
                        <a href="https://github.com/dakotaheninger" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                        </span>
                </div>
                <div className="col-lg-4">
                    <h3>Jordan Jensen</h3>
                    <span className="fa-stack fa-lg hub">
                        <a href="https://github.com/JordanDJensen" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                        </span>
    
                </div>
                <div className="col-lg-4">
                    <h3>Wyatt Blackhurst</h3>
                    <span className="fa-stack fa-lg hub">
                        <a href="https://github.com/monteblack7" target="_blank"><FontAwesome stack="2x" name="github"/></a>
                        </span>
                
                </div>
                <div className="row">
                 <div className="col-lg-offset-4 col-lg-4">
                     <h5 className="rights">Copyrights <FontAwesome name="copyright"/> Team-Deathmatch 2017</h5>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;