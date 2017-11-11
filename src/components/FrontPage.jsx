import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import fetchItems from "../actions";


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
      <div>
        <div>
          <h1>Learn to Code in your spare time</h1>
          <h3>Text...</h3>
        </div>
        <div>
          <h2>Vision and Goals</h2>
        </div>
        <div>
          <h2>Plan</h2>
        </div>
        <div>
          <h2>Technology</h2>
        </div>
        <div>
          <h2>Timeline/Calendar</h2>
        </div>
        <div>
          <h2>About/Cost</h2>
        </div>
        <div>
          <h1>
            Apply/Buy/Order
          </h1>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {items:state.items}
}
export default connect(mapStateToProps, {fetchItems})(FrontPage);
