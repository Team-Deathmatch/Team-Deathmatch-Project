import React from "react";
import ProfileContainer from "../containers/profile-container";

class ProfileList extends React.Component {
    // genGames() {
    //     return this.props.ownedGameList.map((item, index) => {
    //         return <ProfileContainer game={item} key={item.game + index} />
    //     })
    // }
    render() {
        return(
            <div>
                <ProfileContainer/>
            </div>
        )
    }
}

export default ProfileList;