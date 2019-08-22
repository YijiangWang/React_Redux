import React, { Component } from 'react';
import {Button, Input, List, Icon} from 'antd';
import store from './store/index.js';
import 'antd/dist/antd.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const data = store.getState();
    console.log(data)
    this.state = { list:data.list }
  }
  render() { 
    console.log('state ===> ',this.state)
    return ( 
      <div style={{margin: '20px'}}>
        <div style={{marginBottom: '20px'}}>
          <label htmlFor='yjwInput'>项目：</label>
          <Input id='yjwInput' placeholder='周末做点什么呢。。。' size='small' style={{width: '250px', marginRight: '5px'}} />
          <Button type='primary' size='small'>添加</Button>
        </div>
        <List 
          bordered
          header={<h3>开头</h3>}
          footer={<h3>结尾</h3>}
          dataSource={this.state.list}
          itemLayout='horizontal'
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