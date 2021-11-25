import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
<ul className={this.props.mobileNav ? "mobile-nav" : "nav"}>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('editorial')}>EDITORIAL</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('tv')}>FILM & TELEVISION</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('celebrity')}>CELEBRITY</p></li>
                    <li><p className="nav-link" onClick={(e) => this.props.handleCategory('ecommerce')}>E-COMMERCE</p></li>
                    <li><p className="nav-link" onClick={() => this.props.renderContact()}>CONTACT</p></li>
                </ul>
        )
    }
}
