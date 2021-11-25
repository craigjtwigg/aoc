import React, { Component } from 'react';
import { ImageList, ImageListItem} from '@mui/material';

export default class Gallery extends Component {
  

  //filteredGallery = this.data.filter(item => item.category === this.props.view)

  //gallery = this.props.view === 'home' ? this.data : this.filteredGallery

  render() {
    return (
      <div className="gallery">
        <ImageList variant="masonry" cols={3} gap={8}>
  {this.props.activeGallery.map((item) => (
    <ImageListItem key={item.imgSrc}>
      <img className="gallery-item"
      onClick={()=> this.props.setActiveImage(item)}
        src={`${item.imgSrc}?w=248&fit=crop&auto=format`}
        srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.alt}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </div>
    );
  }
}
