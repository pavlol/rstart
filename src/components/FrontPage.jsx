import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {fetchItems} from "../actions";
import './FrontPage.css';
import topRowImage from '../img/topdownrownew.jpg';
import paymentBlockImage from '../img/newpairing.jpg';
import jsImage from '../img/768px-JavaScript-logo.png';
import htmlCssImage from '../img/HTML5CSS3Logos.svg';
import reactImage from '../img/react.svg';
import tddImage from '../img/TDD.jpg';
import sqlImage from '../img/SQL.jpg';
import csharpImage from '../img/csharp.jpg';


class FrontPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //this.props.fetchItems();//fetches data async using axios
  }
  renderItems(){
    return _.map(this.props.items, item => {
      return(
        item
      );
    }) //allows to map through object instead of array
  }
  render(){
    return(
      <div id="rootFrontPage">
        <section id="frontPageBlock1" style={{backgroundImage: "url(" + topRowImage + ")"}}>
          <div>
            <h1>Learn to Code in your spare time</h1>
            <h3>Join like-minded people</h3>
            <h3>Get guidance and help</h3>
            <h3>Build your own projects</h3>
          </div>
        </section>
        {/* <section id="frontPageBlock2">
          <div>
            <h2>Vision and Goals</h2>
          </div>
        </section> */}
        <section id="frontPageBlock3">
          <div>
            <h1>Mission and Goals</h1>
            <p>Learn how to create software</p>
            <p>Get help with your own project</p>
            <p>Bring your ideas to reality</p>
            <p>Get valuable skills for your next job</p>
            <p>Develop skills that are must have in today's world</p>
          </div>
        </section>
        <section id="frontPageBlockTech">
          <div>
          <h2>Technology</h2>
          <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <img className="d-block" src={jsImage} alt="JS" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>JAVASCRIPT</h3>
                  <p>JavaScript is rapidly becoming the biggest programming language in the world. You can use it anywhere: to animate text on a page, to run a high-throughput server, and to enable your coffee machine to work over WiFi.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block" src={htmlCssImage} alt="html and css" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>HTML5 and CSS3</h3>
                  <p>HTML is the building material of the web. We'll guide you towards building beautiful, structured webpages and altering content dynamically, both on the server and client-side.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block" src={reactImage} alt="ReactJs" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>ReactJs</h3>
                  <p>React is a modern JavaScript library for building user interfaces. React is used in web and mobile app development.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block" src={tddImage} alt="TDD" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>TDD</h3>
                  <p>Test-Driven Development is an engineering methodology that helps to produce stable, tested code.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block" src={csharpImage} alt="TDD" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>C#</h3>
                  <p>C# is a general-purpose, object-oriented programming language. It's an intuitive route into programming. C# is used in web applications, game development, desktop apps and any more.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block" src={sqlImage} alt="TDD" /><br />
                <div className="carousel-caption d-none d-md-block rotatorItem">
                  <h3>SQL</h3>
                  <p>SQL is a language used in programming and designed for managing data.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
        </section>
        <section id="frontPageBlockTimeline">
          <div>
            <h1>Applications for 6th of January 2018!</h1>
          </div>
        </section>
        <section id="frontPageBlockAbout">
          <div>
            <h2>About/Cost</h2>
            <table id="frontAboutTable" className="table">
              <tbody>
                <tr><td>DELIVERY</td><td>Part-time, Offline, in Hilton, Derby </td></tr>
                <tr><td>FORMAT</td><td>Theory followed by hands-on work</td></tr>
                <tr><td>PAIR PROGRAMMING</td><td>Face-to-Face</td></tr>
                <tr><td>YOUR OWN PROJECT</td><td>Guidance sessions</td></tr>
                <tr><td>MEMBERSHIP</td><td>As long as you want</td></tr>
                <tr><td>PAYMENT</td><td>Advance, per month</td></tr>
                <tr><td>TIME</td><td>Weekends, as long as you want</td></tr>
                <tr><td>PAYMENT OPTIONS</td><td>Saturday 2 hours, Sunday 2 hours</td></tr>
                <tr><td></td><td><span className="priceTag">£80 per month</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="frontPageBlockApply" style={{backgroundImage: "url(" + paymentBlockImage + ")"}}>
          <div>
            <h1>
              APPLY NOW
            </h1>
            <h4>We are starting in the new year. There are only 10 places in the class. Apply early to avoid disappointment</h4>
            <Link id="btnJoin" className="btn apply_large" to="/apply">Apply</Link>
            {/* <button className="btn apply_large">Apply</button> */}
          </div>
        </section>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {items:state.items}
}
export default connect(mapStateToProps, {fetchItems})(FrontPage);
