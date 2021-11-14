import React, { Component } from 'react';
//import LazyLoad from 'react-lazyload';
import Img01 from './assets/gallery/01.JPG';
import Img02 from './assets/gallery/02.jpeg';
import Img03 from './assets/gallery/03.jpeg';
import Img04 from './assets/gallery/04.jpg';
import Img05 from './assets/gallery/05.jpeg';
import Img06 from './assets/gallery/06.jpg';
import Img07 from './assets/gallery/07.jpg';
import Img08 from './assets/gallery/08.jpg';
import Img09 from './assets/gallery/09.jpeg';

export default class Body extends Component {
  data = [
    {
      id: 1,
      imgSrc: Img01,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
      category: ''
    },
    {
      id: 2,
      imgSrc: Img02,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 3,
      imgSrc: Img03,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 4,
      imgSrc: Img04,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 5,
      imgSrc: Img05,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 6,
      imgSrc: Img06,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 7,
      imgSrc: Img07,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 8,
      imgSrc: Img08,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
    {
      id: 9,
      imgSrc: Img09,
      alt: 'Alex Ogden Clark',
      photographer: 'Unknown',
       category: ''
    },
  ];
  render() {
    return (
      <div>
        <div className="gallery">
          {this.data.map((item, index) => {
            return (
              
                <div className="pics" key={index}>
                  
                  <img
                    key={index}
                    src={item.imgSrc}
                    alt={item.alt}
                    style={{ width: '100%' }}
                  />
                 
                </div>
             
            );
          })}
        </div>
      </div>
    );
  }
}
