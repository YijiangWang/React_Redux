import React, { Component } from 'react';

class Yijiang extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('next ---> ',nextProps.value,this.props.value)
    if(nextProps.value !== this.props.value){
      return true;
    }
    return false;
  }
  render() { 
    const {value, del, index} = this.props;
    return ( 
      <div onClick={()=>{del(index)}}>
        我今天要 ----- {value}
      </div>
    );
  }
}
 
export default Yijiang;