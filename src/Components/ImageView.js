import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default class ImageView extends Component {
    render() {
            let relatedGallery = this.props.activeGallery.filter(
      (item) => item.photoSet === this.props.activeImage.photoSet && item !== this.props.activeImage
    );
        return (
            <div className="image-view-modal">
               
                <img className="active-image" src={this.props.activeImage.imgSrc}/>
                <div className="active-image-details">
                    <h2 className="photoset">{this.props.activeImage.photoSet}</h2>
                    <p className="credit">{this.props.activeImage.credit}</p>

                     <div className="related-images">
                   {relatedGallery.map((item) => (
                       <img className="related-images-thumb" src={item.imgSrc} alt={item.alt} onClick={() => this.props.setActiveImage(item)}/>
        ))}
                </div>
                </div>
               
                 <div className="close-modal">
                <CloseIcon onClick={() => this.props.closeActiveImage()}/>
                </div>
                <p onClick={() => this.props.closeActiveImage()} className="return-to-gallery">Return to gallery</p>
            </div>
        )
    }
}
