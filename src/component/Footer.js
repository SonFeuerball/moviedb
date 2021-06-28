import React, { Component } from 'react';
import getString from '../data/strings';

class Footer extends Component {

    state = {

    }

    render() {
        return (
            <footer className="foot-style">
                <h1><span className="dot">. </span>MOV</h1>
                <p>{getString('footerImprint')}</p>
                <div className="socialmedia-icon">
                    <a href="instagram"><img src="./img/instagram.png" alt="" /></a>
                    <a href="facebook"><img src="./img/facebook.png" alt="" /></a>
                </div>
            </footer>
        );
    }
}

export default Footer;