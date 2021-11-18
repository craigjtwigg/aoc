import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="top-wrapper">
            <div className="logo-wrapper">
                <h1 onClick={(e) => this.props.handleCategory('home')}>ALEX OGDEN CLARK</h1>
            </div>
            <div className="nav-wrapper">
                <ul className="nav">
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('editorial')}>EDITORIAL</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('tv')}>FILM & TELEVISION</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('celebrity')}>CELEBRITY</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('ecommerce')}>E-COMMERCE</p></li>
                    <li><p className="nav-link" onClick={() => this.props.renderContact()}>CONTACT</p></li>
                </ul>
            </div>
        </div>
        )
    }
}
