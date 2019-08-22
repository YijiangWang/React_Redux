import React, {Component} from 'react';
import Person from './person';

class App extends Component{
  componentDidMount(){
    console.log('Welcome to Yijiangs World')
  }

  render(){
    return (
      <div>
        <h2> Hello A JavaScript library for building user interfaces, HaHaHa </h2>
        <Person />
      </div>
    )
  }
}

export default App;