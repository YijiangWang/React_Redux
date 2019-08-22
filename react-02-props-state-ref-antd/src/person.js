import React, { Component, Fragment } from 'react';
import Yijiang from './yijiang';
import {Button, Input, List} from 'antd';
import 'antd/dist/antd.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      currentValue: '',
      list: ['好好学习', '打羽毛球']
    }
  }

  inputChange = () => {
    console.log('yjw ---- input ----> ', this.yjwInput);
    this.setState({currentValue: ''});
  }
  addList = () => {
    console.log('yjw ---- 点击按钮', this.state.currentValue);
    if (!this.state.currentValue) return;
    this.setState((preState, props) => {
      return {
               list: [preState.currentValue, ...preState.list],
               currentValue: ''
             }
    });
  }
  delItem = (index) => {
    const {list} = this.state;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  render() { 
    const {list, currentValue} = this.state;
    const yjs = <List 
                  bordered
                  dataSource={list}
                  header={<h2>头部</h2>}
                  footer={<h2>尾部</h2>}
                  style={{width: '300px', marginTop: '10px'}}
                  renderItem={item => 
                    <List.Item>
                      {item}
                    </List.Item>
                  }
                />
    return (  
      <Fragment>
        <div style={{margin: '20px'}}>
          <div>
            <label htmlFor="hobbyInput">爱好：</label>
            <Input type="text" placeholder='please write' ref='yjwInput' value={this.state.currentValue} id='hobbyInput' onChange={this.inputChange} style={{width: '250px', marginRight: '5px'}}/>
            <Button type='primary' onClick={this.addList}>增加</Button>
          </div>
          {yjs}
        </div>
      </Fragment>
    );
  }
}
 
export default Person;