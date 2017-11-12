import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchItem} from '../actions';

class ShowItem extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if(!this.props.item){  //prevent re-fetch if already exists
      const {id} = this.props.match.params;// this.props.match.params.id; //provided by react-router-dom
        this.props.fetchItem(id);
      }
  }
  onDeleteClick(){
      const {id} = this.props.match.params;
      this.props.deleteItem(id, ()=>{
        this.props.history.push('/');
      })
  }
  render(){
    const {item} = this.props;
    if(!item){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <p>{item.id}</p>
        <button onClick={this.onDeleteClick.bind(this)}
          >DELETE</button>
      </div>
    );
  }
}

function mapStateToProps({items}, ownProps){
  return {item : items[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchItem})(ShowItem);
