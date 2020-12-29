import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div id="navigation" className="bg-dark">
                <div id="leftside">
                    <div id="details">
                        <div id="back"><img src="assets/arrow.svg" /></div>
                        <div id="names">
                            <p id="title" className="mt-2">Your automation pipeline</p>
                            <p id="subtitle"><b>Marketing automation</b></p>
                        </div>
                    </div>
                </div>
                <div id="centerswitch">
                    <div id="leftswitch"><b>Diagram view</b></div>
                </div>
                <div id="buttonsright">
                    <div id="discard">Discard</div>
                    <div id="publish">Publish to site</div>
                </div>
            </div>
        );
    }
}
export default Navbar;