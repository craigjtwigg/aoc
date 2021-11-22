import React, { Component } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default class MobileNav extends Component {
    render() {
        return (
            <>
            <div className="closeNav">
                <CloseIcon onClick={() => this.props.toggleMobileNav()}/>
            </div>
            </>
        )
    }
}
