import React from 'react';

class Base extends React.Component {
    render() {
        return (
            <div className="row content">
            <div className="col-lg-12">
                <div className="signup">
                <h1>A Website to Manage Your Games</h1>

                    <button className="btn btn-success shift">
                        Sign Up
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

export default Base;