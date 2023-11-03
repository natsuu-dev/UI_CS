import React from "react";
const test = require('./text.json');
class MainContent extends React.Component {
    render() {
        return (  

<section id="homepage">
            <div class="background-video-wrapper">
                <video muted autoplay loop>
                 
                </video>
            </div>
            <div class="wrapper">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <h1>Project Aceucore<span class="star"></span></h1>
                        <p class="subhero">Test</p>
    
                        <div class="hero-buttons">
                            <a href="/download" class="btn btn-primary btn-download">
                                <i class="fas fa-download"></i>
                                Download
                            </a>
                            <a href="/download?zip" class="btn btn-secondary">
                                <i class="fas fa-file-archive"></i>
                                ZIP Archive
                            </a>
                        </div>
                        <div class="row requirements">
                            <div class="col-xs-12 col-md-6">
                                <h5>Requirements</h5>
                                <ul>
                                    <li>Test description</li>
                                    <li>Test description</li>
                                    <li>Test description</li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <h5>Latest build</h5>
                                <ul>
                                    <li>Build 20041</li>
                                    <li>Size: 109 MB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="features">
                            <div class="feature">
                                <div class="feature-title">
                                    <i class="fa fa-server"></i>
                                    Dedicated servers
                                </div>
                                <div class="feature-content">
                                    Host your own dedicated servers, with full control over them. Configure them in any way you want to provide your players
                                    with a unique experience.
                                </div>
                                <div class="feature-buttons">
                                    <a class="btn btn-dark btn-small" href="https://docs.veniceunleashed.net/hosting/" target="_blank"  rel="noreferrer">
                                        Host a server
                                    </a>
                                    <a class="btn btn-dark btn-small" href="https://community.veniceunleashed.net/c/modding/releases/13" target="_blank"  rel="noreferrer">
                                        Find mods
                                    </a>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-title">
                                    <i class="fa fa-lightbulb"></i>
                                    Mods & customizations
                                </div>
                                <div class="feature-content">
                                    Join in on entirely custom experiences like Reality Mod, created by the community. Create your own experiences using VU's
                                    extensive modding capabilities.
                                </div>
                                <div class="feature-buttons">
                                    <a class="btn btn-dark btn-small" href="https://bf3reality.com/" target="_blank"  rel="noreferrer">
                                        Reality Mod
                                    </a>
                                    <a class="btn btn-dark btn-small" href="https://github.com/Joe91/fun-bots" target="_blank"  rel="noreferrer">
                                        Fun bots
                                    </a>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature-title">
                                    <i class="fa fa-bolt"></i>
                                    New and unleashed features
                                </div>
                                <div class="feature-content">
                                    Experience smooth gameplay on high-tickrate 60Hz and 120Hz servers, watch matches in real-time
                                    using the built-in spectating features, and much more!
                                </div>
                                <div class="feature-buttons">
                                    <a class="btn btn-dark btn-small" href="https://docs.veniceunleashed.net/" target="_blank"  rel="noreferrer">
                                        Wiki
                                    </a>
                                    <a class="btn btn-dark btn-small" href="https://docs.veniceunleashed.net/general/changelog/" target="_blank"  rel="noreferrer">
                                        Changelog
                                    </a>
                                </div>
                            </div>
                            <div class="feature project-changelog">
                                <div class="feature-title">
                                    Looking for <span>Bad Company 2</span>?
                                </div>
                                <div class="feature-content">
                                Test
                                </div>
                                <div class="feature-buttons">
                                    <a class="btn btn-yellow btn-small" href="/">
                                        Test
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row" id="announcement">
				<div class="alert alert-warning">
					<p>{test.AlertMessage}
						<a href="/">Status Update</a>.
					</p>
				</div>
			</div>
       
            </div>
        </section>

        )
    }
}

export default MainContent;