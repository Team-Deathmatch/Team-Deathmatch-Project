import React from "react";


class User extends React.Component{
    render() {
        console.log(this.props.gamesOwned);
        return (
            <div style={{marginTop: "15vh"}}>
                <img src={this.props.currentUser.avatar}/>
                <h1>Welcome {this.props.currentUser.displayName}</h1>
            </div>
        );
    }

}


export default User;