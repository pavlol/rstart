import React, {Component} from 'react'
import Logo from './Logo'

export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <Logo title="South Derbshire Software Club" />
        <ul className="pull-right">
          <li><span className="btn btn-primary"></span></li>
        </ul>
      </div>
    )
  }
}
