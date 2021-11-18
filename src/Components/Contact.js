import React, { Component } from 'react';
import { TextField } from '@mui/material';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
       
        <div className="contact-info">Fill in the contact form and press submit, Alex will get back to you ASAP!</div>
        <form>
          <div className="name-and-email">
            <TextField
              className="textfield"  
              required
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              color="warning"
              sx={{
                margin: 1
              }}
            />
            <TextField
            className="textfield"  
              required
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              color="warning"
               sx={{
                margin: 1
              }}
            />
          </div>{' '}
          <div className="message-and-submit">
            {' '}
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={6}
              color="warning"
               sx={{
                margin: 1
              }}
              fullWidth
            />
            <button type="submit">Send</button>{' '}
          </div>
        </form>
      </div>
    );
  }
}
