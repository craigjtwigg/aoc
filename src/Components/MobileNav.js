import React, { Component } from 'react'
import Nav from './Nav';

export default class MobileNav extends Component {
    render() {
        return (
            <>
             

                <Nav mobileNav={this.props.mobileNav}
              handleCategory={this.props.handleCategory}
              renderContact={this.props.renderContact}/>
                  
            </>
        )
    }
}
