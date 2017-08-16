// import React from "react";
// import {connect} from "react-redux";
// import * as actionCreators from "../actions/";
// import Profile from "../components/profile";
// import autoBind from "react-autobind";
//
// class ProfileContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             ...this.props.game
//         };
//         autoBind(this);
//     }
//
//     handleChange(key, event) {
//         this.setState({
//             [key]: event.target.value
//         })
//     }
//
//     render() {
//         return(
//             <Profile handleChange={this.handleChange} game={this.props.game} input={this.state} currentUser={this.props.currentUser}/>
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     return state;
// };
//
//
// export default connect(mapStateToProps, actionCreators)(ProfileContainer);