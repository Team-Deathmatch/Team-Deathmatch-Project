import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="profile-pic">
                    </div>
                    <h1 className="profile-name">MonteBlack94</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="play">OWNED GAMES</h1>

                            <div className="bar"/>

                            <h3>PLAYERUNKNOWN'S BATTLEGROUNDS</h3>
                            <h5>HOURS PLAYED: 77</h5>

                            <h3>HALO: REACH</h3>
                            <h5>HOURS PLAYED: 903</h5>

                            <h3>FINAL FANTASY XV</h3>
                            <h5>HOURS PLAYED: 15</h5>

                            <h3>DESTINY: THE TAKEN KING</h3>
                            <h5>HOURS PLAYED: 485</h5>

                            <h3>COD: BLACK OPS III</h3>
                            <h5>HOURS PLAYED: 53</h5>

                            <h3>MARIO KART</h3>
                            <h5>HOURS PLAYED: 8</h5>
                        </div>
                        <div className="col-md-6">
                            <h1 className="play">STEAM WISHLIST</h1>
                            <div className="bar"/>
                            <h3>WARFRAME</h3>
                            <h5>COST: FREE</h5>

                            <h3>FORTNITE</h3>
                            <h5>COST: $59.88</h5>

                            <h3>LAWBREAKERS</h3>
                            <h5>COST: $29.99</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;