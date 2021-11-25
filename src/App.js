import React, { Component } from 'react';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { galleryData } from './assets/gallery/data';
import './App.css';
import MobileNav from './Components/MobileNav';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeGallery: galleryData,
      isMobile: false,
      isContact: false,
      mobileNav: false,
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  handleCategory = (category) => {
    let filteredGallery = galleryData.filter(
      (item) => item.category === category
    );
    this.setState({
      activeGallery: category === 'home' ? galleryData : filteredGallery,
      isMobile: this.state.isMobile,
      isContact: false,
      mobileNav: false,
    });
  };

  renderContact = () => {
    this.setState({
      activeGallery: this.state.activeGallery,
      isMobile: this.state.isMobile,
      isContact: true,
      mobileNav: this.state.mobileNav,
    });
  };

  toggleMobileNav = () => {
    this.setState({
      activeGallery: this.state.activeGallery,
      isMobile: this.state.isMobile,
      isContact: this.state.isContact,
      mobileNav: !this.state.mobileNav,
    });
  };

  render() {
    const { activeGallery, mobileNav } = this.state;
    const handleCategory = this.handleCategory;
    const renderContact = this.renderContact;
    const toggleMobileNav = this.toggleMobileNav;

    return (
      <>
        <Header mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} handleCategory={handleCategory} renderContact={renderContact} />
        {mobileNav ? (
          <MobileNav mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} handleCategory={handleCategory} renderContact={renderContact} />
        ) : this.state.isContact ? (
          <Contact />
        ) : (
          <Gallery activeGallery={activeGallery} />
        )}
        <Footer />
      </>
    );
  }
}
