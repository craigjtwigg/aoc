import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-form">
                <h2 className="contact-header">CONTACT</h2>
                <form>
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Your Email"></input>
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
