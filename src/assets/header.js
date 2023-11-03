import React from "react";

class Header extends React.Component {
    render() {
        return (  
<header id="header">
    <div class="wrapper">
        <div class="left-content">
            <div id="main-logo">
                <a href="/">
                    <img src="./logo.png" alt="Logo" />
                </a>
            </div>

        <nav id="main-nav">
                <a href="/" class="active">Test</a>
                <a href="/" class="">Test</a>
                <a href="/" class="">Test</a>
                <a href="/" class="">Test</a>
                <a href="/" class="">Test</a>
                <a href="/" class="">Test &amp; Test</a>
        </nav>
    </div>

    <div class="right-content">
        <div class="header-socials">
            <a href="/" target="_blank">
                <i class="fab fa-discord"></i>
            </a>

            <a href="/" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
        </div>

    <div class="account-actions">
            <a href="/login" class="btn btn-small btn-transparent">Zip Archive</a>
            <a href="/signup" class="btn btn-small btn-primary">Download</a>
    </div>

        <a href="#" id="header_toggle">
            <i class="fas fa-bars"></i>
        </a>
    </div>

    <div class="mobile-menu">
        <a href="#" id="header_toggle_inside">
            <i class="fas fa-times"></i>
        </a>

        <nav id="mobile-nav">
            <a href="/" class="active">Test</a>
            <a href="/about" class="">Test</a>
            <a href="https://docs.veniceunleashed.net" class="">Test</a>
            <a href="https://community.veniceunleashed.net" class="">Test</a>
            <a href="/donate" class="">Test</a>
            <a href="/help" class="">Test &amp; Test</a>
        </nav>

        <div class="account-actions">
            <a href="/login" class="btn btn-transparent">Test</a>
            <a href="/signup" class="btn btn-primary">Test</a>
        </div>

        <div class="header-socials">
            <a href="https://discord.gg/dpJwaVZ" target="_blank" rel="noreferrer">
                <i class="fab fa-discord"></i>
            </a>

            <a href="https://reddit.com/r/VeniceUnleashed/" target="_blank" rel="noreferrer">
                <i class="fab fa-reddit"></i>
            </a>

            <a href="https://twitter.com/VeniceUnleashed" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
            </a>

            <a href="https://fb.me/VeniceUnleashed" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook"></i>
            </a>			
        </div>
    </div>
</div>
</header>
        )
    }
}

export default Header;