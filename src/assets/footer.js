import React from "react";

class Footer extends React.Component {
    render() {
        return (  
<footer>
        <div class="wrapper">
            <div class="row middle-md">
                <div class="col-xs-12 col-sm-8">
                    <div class="copyright">
                        Copyright &copy; 2012 - 2023, Venice Unleashed
                    </div>
                    <div class="trademark-notice">
                        *This project is not affiliated with Electronic Arts Inc. or EA Digital Illusions CE AB. Battlefield and Origin are registered trademarks of Electronic Arts Inc. All company, product, and service names, logos, and brands, and any other copyrighted materials are property of their respective owners and are used for identification purposes only. Use of these materials does not imply endorsement.
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 end-sm socials">
                    <a href="https://discord.gg/dpJwaVZ" target="_blank">
        <i class="fab fa-discord"></i>
    </a>
    <a href="https://reddit.com/r/VeniceUnleashed/" target="_blank">
        <i class="fab fa-reddit"></i>
    </a>
    <a href="https://twitter.com/VeniceUnleashed" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://fb.me/VeniceUnleashed" target="_blank">
        <i class="fab fa-facebook"></i>
    </a>			</div>
            </div>
        </div>
    </footer>

        )
    }
}

export default Footer;