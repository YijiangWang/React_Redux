import React, { Component } from 'react';
import Yijiang from './yijiang';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'hobby': ['热爱学习','爱好运动']
    }
  }
  render() { 
    const {hobby} = this.state;
    const yijiangs = hobby.map((value, index) => {
      return (<Yijiang value={value}/>);
    });
    return (  
      yijiangs
    );
  }
}
 
export default Person;