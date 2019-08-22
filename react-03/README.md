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
      placeHolder: '周末干点啥。。。'
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

## 安装 redux 插件：
- 在 chrome 商店搜索 `Redux DevTools`；
- 在创建 store 时添加使用插件代码：
```
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
```
- 其中，`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` 与 `window.devToolsExtension ? window.devToolsExtension() : () => { }` 都可以，选择一个即可。