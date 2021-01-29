import React from 'react';
import '../css/sideNav.css'

export default class sideNav extends React.Component {
    render() {
        return (
            <div id="sideNavMain" className="sideNavMain">
                <div id="sideNavProfile" className="sideNavProfile">
                    <div id="sideNavProfilePic" className="sideNavProfilePic">
                        <img src="https://avatars.githubusercontent.com/u/78114643?s=460&u=983f3122d5efe434df431f9e2b90b9d05f0f12d0&v=4" alt="Profile Headshot"></img>
                    </div>
                    <div id="sideNavProfileName" className="sideNavProfileName">
                        Ronald T. Conroy III
                    </div>
                    <div id="sideNavProfileSocials" className="sideNavProfileSocials">
                        <a href="https://www.linkedin.com/in/ronald-conroy/" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="mailto:ron@ronaldconroy.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a href="https://github.com/Ron-Conroy" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                </div>
                <div id="sideNavMenu" className="sideNavMenu">
                    <ul>
                        <li>
                            <a href="/">
                                <i className="fa fa-home"></i>
                                <span>Introduction</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-user"></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-file"></i>
                                <span>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-wrench"></i>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-phone"></i>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
