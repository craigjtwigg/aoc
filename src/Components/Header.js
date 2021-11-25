import React, { Component } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div className="top-wrapper">
        <div className="logo-wrapper">
          <h1 onClick={(e) => this.props.handleCategory('home')}>
            ALEX OGDEN CLARK
          </h1>
        </div>
        <div className="nav-wrapper">
          <div className="mobile-nav-icon">
            {' '}
           {this.props.mobileNav ? <CloseIcon onClick={() => this.props.toggleMobileNav()}/> : <FilterListIcon onClick={() => this.props.toggleMobileNav()} />} 
          </div>
          <div className={this.props.mobileNav ? "desktop-nav" : ""}>    <Nav
              mobileNav={this.props.mobileNav}
              handleCategory={this.props.handleCategory}
              renderContact={this.props.renderContact}
            /> </div>
        </div>
      </div>
    );
  }
}
