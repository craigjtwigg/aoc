import React, { Component } from 'react';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { galleryData } from './assets/gallery/data';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeGallery: galleryData,
      isMobile: false,
      isContact: false,
    };

    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory = (category) => {
    let filteredGallery = galleryData.filter(item => item.category === category)
    this.setState({
      activeGallery: category === 'home' ? galleryData : filteredGallery,
      isMobile: this.state.isMobile,
      isContact: false,
    });
  };

    renderContact = () => {
    this.setState({
      activeGallery: this.state.activeGallery,
      isMobile: this.state.isMobile,
      isContact: true,
    });
  };

  

  render() {
    const { activeGallery } = this.state;
    const handleCategory = this.handleCategory;
    const renderContact = this.renderContact

    return (
      <>
        <Header handleCategory={handleCategory} renderContact={renderContact}/>
        {this.state.isContact ? (<Contact />) : (<Gallery activeGallery={activeGallery}/>)}
        
        
        <Footer />
      </>
    );
  }
}
