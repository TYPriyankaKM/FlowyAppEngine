import React, { Component } from 'react';

class ContentDiv extends Component {
    render() {
        return (
            <div id="propwrap">
                <div id="properties">
                    <div id="close">
                        <img src="assets/close.svg" />
                    </div>
                    <p id="header2">Properties</p>
                    <div id="propswitch">
                        <div id="dataprop">Data</div>
                        <div id="alertprop">Alerts</div>
                        <div id="logsprop">Logs</div>
                    </div>


                    <div id="proplist">
                        <p class="inputlabel"><b>Select database</b></p>
                        <div class="dropme">Database 1 <img src="assets/dropdown.svg" /></div>
                        <p class="inputlabel"><b>Check properties</b></p>
                        <div class="dropme">All<img src="assets/dropdown.svg" /></div>
                        <div class="checkus"><img src="assets/checkon.svg" /><p>Log on successful performance</p></div>

                    </div>
                    <div id="divisionthing"></div>
                    <div id="removeblock">Delete blocks</div>
                </div>
            </div>
        );
    }
}
export default ContentDiv;