import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchItems} from "../actions";
import './FrontPage.css';
import backgroundImg from '../img/topdownrownew.jpg';


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
        <section id="frontPageBlock1" style={{backgroundImage: "url(" + backgroundImg + ")"}}>
          <div>
            <h1>Learn to Code in your spare time</h1>
            <h3>Join like-minded people</h3>
            <h3>Get guidance and help</h3>
            <h3>Build your own projects</h3>
          </div>
        </section>
        <section id="frontPageBlock2">
          <div>
            <h2>Vision and Goals</h2>
          </div>
        </section>
        <section id="frontPageBlock3">
          <div>
            <h2>Plan</h2>
          </div>
        </section>
        <section id="frontPageBlock4">
          <div>
            <h2>Technology</h2>
          </div>
        </section>
        <section id="frontPageBlock5">
          <div>
            <h2>Timeline/Calendar</h2>
          </div>
        </section>
        <section id="frontPageBlock6">
          <div>
            <h2>About/Cost</h2>
          </div>
        </section>
        <section id="frontPageBlock6">
          <div>
            <h1>
              Apply/Buy/Order
            </h1>
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
