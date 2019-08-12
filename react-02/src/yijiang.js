import React, { Component } from 'react';

class Yijiang extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {value} = this.props;
    return ( 
      <div>
        {value}
      </div>
    );
  }
}
 
export default Yijiang;