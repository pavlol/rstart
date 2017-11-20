import _ from 'lodash';
import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {createItem} from '../actions/';
import './ApplyForm.css';
import backImage from '../img/students-overhead-discussion.jpg';

class ApplyForm extends Component{

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

  renderTextArea(field){
    console.log("renderTextArea");
    console.log(field);
    //const {meta : { touched, error}} = field;  //destructuring and assigning
    const fieldClassName = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return(
      <div className={fieldClassName}>
        <label>{field.label}</label>
        <textarea className="form-control"
          type="text" rows="5"
        {...field.input}
        ></textarea>
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    )
  }

  onSubmit(values){
    console.log(this.props.history.location.pathname);
    console.log("...form submitted", values);
    this.props.createItem(values, ()=>{
      //this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="applyFormBackground">
        <div id="applyTopSpace"></div>
        <form className="applyForm form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="applyUserArea">
          <Field
            className="applyField"
            label="Name"
            name="firstname"
            component={this.renderField}
          />
          <Field
            label="Email"
            name="email"
            component={this.renderField}
          />
          <Field
            label="Tell us about yourself. Ask questions. Time preference?"
            name="notes"
            component={this.renderTextArea}
          />
          <button type="submit" className="btn apply_medium">Submit</button>
          {/* <Link to="/" className="btn btn-danger"></Link> */}
        </div>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};
  if(!values.firstname){
    errors.firstname="Enter your name";
  }
  if(!values.email){
    errors.email="Enter your email address";
  }

  return errors;
}


export default reduxForm({
  validate,
  form:"ItemNewForm"
})(
  connect(null, {createItem})(ApplyForm)
);
