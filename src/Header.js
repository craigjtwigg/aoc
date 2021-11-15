import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="top-wrapper">
            <div className="logo-wrapper">
                <h1>ALEX OGDEN CLARK</h1>
            </div>
            <div className="nav-wrapper">
                <ul className="nav">
                    <li><p className="nav-link" key="editorial" onClick={(e) => this.props.filterGallery('editorial')}>EDITORIAL</p></li>
                    <li><a href="/tv.html">FILM & TELEVISION</a></li>
                    <li><a href="/glow-up.html">CELEBRITY</a></li>
                    <li><a href="/ecommerce.html">E-COMMERCE</a></li>
                    <li><a href="/contact.html">CONTACT</a></li>
                </ul>
            </div>
        </div>
        )
    }
}
