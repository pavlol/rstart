import _ from 'lodash';
import React, {Component} from 'react'

const styles = {
  input:{
    width:"95%"
  }
}

export default class Draft extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      lib:{
        'allow': 1, 'a':4, 'user':2, 'to':3, 'upload':1, 'file':2, 'containing':4, 'the':5, 'data':2, 'they':4, 'wish':5,
        'validate':1, 'and':4, 'transform':1
      },
    }
  }
  handleInput(e){
  //  console.log(e.target.value);
    this.setState({inputValue:e.target.value.toLowerCase()});
  }
  getResult(){
    // let dog = {legs:4};
    // let cat = {legs:4};
    // let result = dog === cat? "true": "false";
    // let result2 =  _.isEqual(dog,cat)? "true": "false";
  // const lib = {
  //   'allow': 1, 'a':4, 'user':3, 'to':1, 'upload':1, 'file':2
  // };
  let input = this.state.inputValue.split(" "); //= ['allow', 'a','user','to', 'upload','a','file','containing','the','data' ];
  //for each in input -> find lib -> get lib weight - > return only required values
  let weightArr = input.map((item, i)=>{
    let weight = this.state.lib[item];
    //console.log(weight);
    return weight < 3
  })
  let filteredWeights = input.filter((item, i) => {
    if(weightArr[i])
    return item ;
  })
  //console.log(filteredWeights);
      return(
        <div>
          {/* <h3>{result}</h3>
          <h3>{result2}</h3> */}
          <h3>{filteredWeights.join(" ")}</h3>
        </div>
    )
  }
  render(){
    return(
      <div>
        <h2>Enter text:</h2><br></br>
        <textarea style={styles.input} value={this.state.inputValue} onChange={this.handleInput.bind(this)}></textarea>
        <h2>Understood text:</h2><br></br>
        {this.getResult()}
      </div>
    )
  }
}
