import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div>
        <footer className="footer is-primary">
            <div className="container">
                <div className="columns">
                <div className="column">
                    <p>Apply now and tell us what kind of game you want.</p>
                </div>
                <div className="column has-text-right">
                    <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                    <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                </div>
                </div>
            </div>
        </footer>
      </div>
    );
};

export default Footer;
