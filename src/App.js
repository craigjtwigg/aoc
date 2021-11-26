import React, { Component } from 'react';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { galleryData } from './assets/gallery/data';
import './App.css';
import MobileNav from './Components/MobileNav';
import ImageView from './Components/ImageView';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeGallery: galleryData,
      activeImage: undefined,
      isMobile: false,
      isContact: false,
      mobileNav: false,
    };
    this.setActiveImage = this.setActiveImage.bind(this);
    this.closeActiveImage = this.closeActiveImage.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  setActiveImage = (image) => {
    this.setState ({
      activeGallery: this.state.activeGallery,
      activeImage: image,
      isMobile: this.state.isMobile,
      isContact: false,
      mobileNav: false,
    })
  }

  closeActiveImage = () => {
        this.setState ({
      activeGallery: this.state.activeGallery,
      activeImage: undefined,
      isMobile: this.state.isMobile,
      isContact: false,
      mobileNav: false,
    })
  }

  handleCategory = (category) => {
    let filteredGallery = galleryData.filter(
      (item) => item.category === category
    );
    this.setState({
      activeGallery: category === 'home' ? galleryData : filteredGallery,
      activeImage: this.state.activeImage,
      isMobile: this.state.isMobile,
      isContact: false,
      mobileNav: false,
    });
  };

  renderContact = () => {
    this.setState({
      activeGallery: this.state.activeGallery,
      activeImage: this.state.activeImage,
      isMobile: this.state.isMobile,
      isContact: true,
      mobileNav: this.state.mobileNav,
    });
  };

  toggleMobileNav = () => {
    this.setState({
      activeGallery: this.state.activeGallery,
      activeImage: this.state.activeImage,
      isMobile: this.state.isMobile,
      isContact: this.state.isContact,
      mobileNav: !this.state.mobileNav,
    });
  };

  render() {
    const { activeImage, activeGallery, mobileNav } = this.state;
    const handleCategory = this.handleCategory;
    const renderContact = this.renderContact;
    const toggleMobileNav = this.toggleMobileNav;
    const setActiveImage = this.setActiveImage;
    const closeActiveImage = this.closeActiveImage;

    return (
       this.state.activeImage?<> <ImageView setActiveImage={setActiveImage} activeImage = {activeImage} activeGallery={activeGallery} closeActiveImage={closeActiveImage}/> </> : 
       <>
        <Header mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} handleCategory={handleCategory} renderContact={renderContact} />
        {mobileNav ? (
          <MobileNav mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} handleCategory={handleCategory} renderContact={renderContact} />
        ) : this.state.isContact ? (
          <Contact />
        ) : (
          <Gallery setActiveImage={setActiveImage} activeGallery={activeGallery} />
        )}
        <Footer />
      </> 
      
    );
  }
}
