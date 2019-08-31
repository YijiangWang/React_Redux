import React, { Component } from 'react';
import {Button, Input, List, Icon} from 'antd';
import store from './store/index.js';
import * as actions from './store/actions'
import 'antd/dist/antd.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const data = store.getState();
    console.log('data ===> ', data)
    this.state = data;
  }

  inputChange = (e) => {
    store.dispatch(actions.addEvent(e.target.value));
    console.log('input ---> ', e.target.value)  
  }

  insertEvent = () => {
    this.setState(preState => {
      debugger
      const {defaultValue, list} = preState;
      const total = [defaultValue, ...list];
      return {
        list: total
      }
    })
  }

  render() { 
    console.log('state ===> ',this.state)
    const {list, defaultValue} = this.state;
    return ( 
      <div style={{margin: '20px'}}>
        <div style={{marginBottom: '20px'}}>
          <label htmlFor='yjwInput'>项目：</label>
          <Input id='yjwInput' placeholder={defaultValue} size='small' style={{width: '250px', marginRight: '5px'}} onChange={this.inputChange}/>
          <Button type='primary' size='small' onClick={this.insertEvent}>添加</Button>
        </div>
        <List 
          bordered
          header={<h3>开头</h3>}
          footer={<h3>结尾</h3>}
          dataSource={list}
          size='large'
          renderItem={
            item => (
              <List.Item actions={[<Button type='danger' size='small'><Icon type='close'/>&nbsp;delete</Button>]}>{item}</List.Item>
            )
          }
        />
      </div>
    );
  }
}
 
export default TodoList;