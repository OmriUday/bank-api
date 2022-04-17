import React from 'react';

const Greet = props => {
  console.log(props);  
  return (
    <div>
      <h1>
        Hello I'm : {props.name} and my NickName is : {props.nickname}
      </h1>
      children: {props.children}
    </div>
  )
}

export default Greet;