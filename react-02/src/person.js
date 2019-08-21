import React, { Component, Fragment } from 'react';
import Yijiang from './yijiang';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      currentValue: '',
      list: ['好好学习', '打羽毛球']
    }
  }

  inputChange = (e) => {
    console.log(e.target.value);
    this.setState({currentValue: e.target.value});
  }
  addList = () => {
    if (!this.state.currentValue) return;
    this.setState((preState, props) => {
      return {
               list: [preState.currentValue, ...preState.list],
               currentValue: ''
             }
    });
  }
  delItem = (index) => {
    console.log('yjw ---- ', index);
    const {list} = this.state;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  render() { 
    const {list, currentValue} = this.state;
    const yjs = list.map((value, index) => {
      return <Yijiang value={value} key={index} index={index} del={this.delItem}/>
    })
    return (  
      <Fragment>
        <div>
          <label htmlFor="hobbyInput">爱好：</label>
          <input type="text" id='hobbyInput' onChange={this.inputChange} value={currentValue} />
          <button onClick={this.addList}>增加</button>
        </div>
        {yjs}
      </Fragment>
    );
  }
}
 
export default Person;