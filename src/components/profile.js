import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div className="main-page">
                {/*<div className="container-fluid">*/}
                <div className="row">
                    <div className="col-md-12">


                        <h3>{this.props.game.name}</h3>
                        <h5>Hours Played: {(parseInt(this.props.game.playtime_forever) / 60).toFixed(2)}</h5>
                    </div>
                    {/*<div className="col-md-6">*/}
                    {/*<h1 className="play">STEAM WISHLIST</h1>*/}
                    {/*<div className="bar"/>*/}
                    {/*<h3>WARFRAME</h3>*/}
                    {/*<h5>COST: FREE</h5>*/}

                    {/*<h3>FORTNITE</h3>*/}
                    {/*<h5>COST: $59.88</h5>*/}

                    {/*<h3>LAWBREAKERS</h3>*/}
                    {/*<h5>COST: $29.99</h5>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Profile;