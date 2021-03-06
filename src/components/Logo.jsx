import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div>
          <h1>
            <Link className="homeLogoLink" to="/">
            {this.props.title}
            </Link>
          </h1>
        </div>
    )
  }
}
