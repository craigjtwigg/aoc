import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
    };

    this.filterGallery = this.filterGallery.bind(this);
  }

  filterGallery = (category) => {
    console.log(category)
    this.setState({
      view: category,
    });
  };

  render() {
    const { view } = this.state;
    const filterGallery = this.filterGallery;

    return (
      <>
        <Header filterGallery={filterGallery} />
        <Body />
        <Footer />
      </>
    );
  }
}
