import React from 'react';
import './css/App.css'
import SideNav from './components/sideNav'
import Introduction from './components/introduction'

class App extends React.Component {
    render() {
        return (
            <div id="mainContainer">
                <div id="sideNav" className="sideNav">
                    <SideNav></SideNav>
                </div>
                <div id="mainContent" className="mainContent">
                    <Introduction></Introduction>
                </div>
            </div>
        );
    }
}

export default App;
