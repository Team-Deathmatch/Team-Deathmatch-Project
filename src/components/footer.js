import React from 'react';

import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <div className="row foot">
                <div className="col-lg-4">
                        <h3>Dakota Heninger</h3>
                        <span className="fa-stack fa-lg hub">
                        <FontAwesome stack="2x" name="github"/>
                        </span>
                </div>
                <div className="col-lg-4">
                    <h3>Jordan Jensen</h3>
                    <span className="fa-stack fa-lg hub">
                        <FontAwesome stack="2x" name="github"/>
                        </span>    
                </div>
                <div className="col-lg-4">
                    <h3>Wyatt Blackhurst</h3>
                    <span className="fa-stack fa-lg hub">
                        <FontAwesome stack="2x" name="github"/>
                        </span>
                
                </div>
                
            </div>
        );
    }
}

export default Footer;