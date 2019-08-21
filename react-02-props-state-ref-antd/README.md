### react-02-xxx
#### 1、这里主要学习子组件通过 props 属性获取父组件传下来的值；
#### 2、组件内部通过修改 state 来更新数据；
#### 3、子组件不可以直接修改父组件的数据，但是可以通过父组件传下来的方法来进行修改
#### 4、React 中 ref 的常用两种方式：
  ```
  // 使用方法一
  <input type="text" ref={input=>this.yjwInput=input} onChange={this.inputChange} />

  // 其它地方获取 input 元素 ：this.yjwInput
  this.yjwInput.value 
  ```

  ```
  // 使用方法二
  <input type="text" ref='yjwInput' onChange={this.inputChange} />

  // 其它地方获取该 input 元素 ：this.refs.yjwInput
  this.refs.yjwInput.value 
  ```
#### 5、antd 的使用
- 首先进行安装： `npm i antd --save`;
- 引入样式：`import 'antd/dist/antd.css';`；
- 根据需要使用的组件从 antd 中引入：`import {Button, List} from 'antd'`