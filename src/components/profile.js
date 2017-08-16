import React from "react";

class Profile extends React.Component {
    render() {
        return (
                    <div>
                        <h3>{this.props.game.name}</h3>
                        <h5>Hours Played: {(parseInt(this.props.game.playtime_forever) / 60).toFixed(2)}</h5>
                    </div>
        )
    }
}

export default Profile;