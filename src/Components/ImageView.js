import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default class ImageView extends Component {
    render() {
        return (
            <div className="image-view-modal">
               
                <img className="active-image" src={this.props.activeImage.imgSrc}/>
                <div className="active-image-details">
                    <h2 className="photoset">{this.props.activeImage.photoSet}</h2>
                    <p className="credit">{this.props.activeImage.credit}</p>
                </div>
                 <div className="close-modal">
                <CloseIcon onClick={() => this.props.closeActiveImage()}/>
                </div>
                <p onClick={() => this.props.closeActiveImage()} className="return-to-gallery">Return to gallery</p>
            </div>
        )
    }
}
