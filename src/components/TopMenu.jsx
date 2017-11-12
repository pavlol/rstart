import React, {Component} from 'react';
import Logo from './Logo';

const styles={

}
export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div id="topMenu" >
        <div id="topMenuLeft">
          <Logo title="South Derbyshire Coding Club" />
        </div>
        <div id="topMenuRight">
          <ul>
            <li><a className="btn btn-lg btn-default">About</a></li>
            <li><a className="btn btn-lg btn-success">Join</a></li>
          </ul>
      </div>
      </div>
    )
  }
}
