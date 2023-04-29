/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './contact.css';

export default function Contact() {
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.758208335492!2d-73.99309938489946!3d40.7493789428372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90aaad17c4089122!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1613544367072!5m2!1sen!2sus";
    // const al = "map";
  return (
    <section className='section'>
        <div className="container">
            <h1 className='heading'>Contact Us</h1>
            <div className="row">
            <div className="col-md-6">
                <div className="contact-info">
                <span href="mailto:info@example.com"><i className="fas fa-envelope"></i>info@example.com</span>
                <span href="tel:+123456789"><i className="fas fa-phone"></i>+123456789</span>
                <span><i className="fas fa-map-marker-alt"></i>123 Main St, New York, NY</span>
                </div>
                <div className="map-responsive">
                <iframe src={map} ></iframe>
                </div>
            </div>
            <div className="col-md-6 Contact">
                <div className="contact-form">
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                    <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
