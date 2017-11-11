import _ from 'lodash';
import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {createItem} from '../actions/';
import '../style/style.css'

class Form extends Component{

  renderField(field){
    //const {meta : { touched, error}} = field;  //destructuring and assigning
    const fieldClassName = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return(
      <div className={fieldClassName}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    )
  }

  onSubmit(values){
    console.log("...form submitted", values);
    this.props.createItem(values, ()=>{
      this.props.history.push('/');
    });
  }
  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="First Name"
          name="firstname"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="lastname"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger"></Link>
      </form>
    )
  }
}
function validate(values){
  const errors = {};
  if(!values.firstname){
    errors.firstname="Enter a first name";
  }
  if(!values.lastname){
    errors.lastname="Enter a last name";
  }

  return errors;
}

export default reduxForm({
  validate,
  form:"PostNewForm"
})(
  connect(null, {createItem})(Form)
);
