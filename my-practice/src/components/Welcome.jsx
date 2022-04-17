import React, {Component} from 'react'

class Welcome extends Component {
  render() {
    console.log(this.props);  
    return (
      <div>
        <h1>
          Hello I'm : {this.props.name} and my NickName is : {this.props.nickname}
        </h1>
        children: {this.props.children}
      </div>
    )
  }
}

export default Welcome;