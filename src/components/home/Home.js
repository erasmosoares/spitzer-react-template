import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
    	
        let heading = "The power of our imagination make us infinite";
        let subheading = "We have the privilege of working with some of the most brilliant professionals.";

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">{ heading }</h1>
                        <div className="is-two-thirds column is-paddingless">
                            <h2 className="sub">{ subheading }</h2>
                        </div>
                        <a className="button is-large is-primary" id="learn">Learn more</a>
                        </div>
                    </div>
                </section>


    <section className="section">
      <div className="container">
        <div className="columns pd is-desktop">
          <div className="column is-1 has-text-centered">
            <i className="fa fa-cog is-primary"></i>
          </div>
          <div className="column is-one-third-desktop">
            <p className="title"><strong>We provide the best games inspiring the world.</strong></p>
          </div>
          <div className="column">
            <p>We are a home based game studio providing the best games on demand. We believe in excelence, we provide fun and we are looking forward to be part of your history.</p>
          </div>
        </div>
      

      <div className="columns pd">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">"Awesome!. I can't wait for the next game."</p>
              <p className="subtitle">- Mathew Douglas</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">"I think it's an absolutely excellent studio. We work together since 2013, now we're a family."</p>
              <p className="subtitle">- Jenny Andrew</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title">"I work here and this is the best game studio, truly the best team. Be here and be forced to agree!."</p>
              <p className="subtitle">- Tony Stark</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
            </div>
        );
    }
}

export default Home;