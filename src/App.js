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
    };

    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory = (category) => {
    let filteredGallery = galleryData.filter(item => item.category === category)
    this.setState({
      activeGallery: category === 'home' ? galleryData : filteredGallery,
    });
  };



  render() {
    const { activeGallery } = this.state;
    const handleCategory = this.handleCategory;

    return (
      <>
        <Header handleCategory={handleCategory} />
        <Gallery activeGallery={activeGallery}/>
        <Contact />
        <Footer />
      </>
    );
  }
}
