import React, { Component } from "react";
import searchIcon from '../img/searchIcon.png';
class Header extends Component {

    state = {}

    render() {
        return (
            <header>
                <h1> <span>.</span>MOV</h1>
                <div className='search-box'>
                    <input type="text" placeholder="Search Something"></input>
                    <div className='search-icon-box'><img src={searchIcon}></img></div>
                </div>
                <a href="#addmovie">Add movies</a>
            </header>
        );
    }
}

export default Header;