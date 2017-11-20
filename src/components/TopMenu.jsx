import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from './Logo';

class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const location = this.props.history.location.pathname;
    // console.log(location);
    return(
      <div id="topMenu" >
        <div id="topMenuLeft">
          <Logo title="South Derbyshire Coding Club" />
        </div>
        <div id="topMenuRight">
          <ul>
            {/* <li><a className="btn btn-lg btn-default">About</a></li> */}
            <li>
            {(location == '/apply') ? "" : <Link id="btnJoin" className="btn btn-lg btn-success" to="/apply">Join</Link> }
            </li>
          </ul>
      </div>
      </div>
    )
  }
}
export default withRouter(TopMenu);
