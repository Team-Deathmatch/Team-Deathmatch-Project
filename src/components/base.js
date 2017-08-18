import React from 'react';

class Base extends React.Component {
    render() {
        return (
            <div className="row content">
            <div className="col-lg-12">
                <div className="signup">
                <h1 className="title">A Website to Manage Your Games</h1>
                    <button className="main-sign-in" onClick={() =>{
                        window.location="/auth/steam"
                    }}>Sign In</button>
                </div>
            </div>
            </div>
        );
    }
}

export default Base;