import _ from 'lodash';
import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";

class Form extends Component{

  renderTitleField(field){
    return(
      <div className="form-group">
        <label>Title</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }
  render(){
    return(
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form:"PostNewForm"
})(Form);
