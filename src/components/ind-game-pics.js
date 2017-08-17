import React from "react";


class IndGamePics extends React.Component{
    hideVideo(){
        document.querySelector(".game-movie").style.display="none";
        document.querySelector(".current-pic").style.display="inline"
    }
    render() {
        return (
            <div style={{display: "inline-block"}} onClick={()=>{
                this.props.setCurrentPic(this.props.item.path_thumbnail);
                this.hideVideo();
            }}>
                <img style={{height: "80px", margin: "4px", border: "2px solid white"}} src={this.props.item.path_thumbnail}/>
            </div>
        );
    }

}


export default IndGamePics;