const defaultState = {
  defaultValue: '周末干点啥。。。',
  list: [
    '周末我要学习',
    '我要打篮球。。。'
  ]
}

export default (state = defaultState, action) => {
  console.log('reducer -----> ', action)
  switch(action.type){
    case 'ADD_EVENT' : {
      const tempState = {...state};
      tempState.defaultValue = action.value;
      return tempState;
    }
    default: 
      return state;
  }
}