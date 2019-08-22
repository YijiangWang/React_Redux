## redux 使用
- 安装 `redux`；
- 通过 *createStore* 创建 store，并绑定对应的 reducer（reducer 应该是一个函数）
  ```
    import {createStore} from 'redux';
    import reducer from './reducer';

    const store = createStore(reducer);
    export default store;
  ```
- reducer.js 文件内容暂时如下：
  ```
    const defaultState = {
      list: [
        '周末我要学习',
        '我要打篮球'
      ]
    }

    export default (state = defaultState, action) => {
      return state;
    }
  ```
- 获取 store 仓库中的数据：
  `store.getState()`。