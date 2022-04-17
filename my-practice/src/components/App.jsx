import React from "react";
// import Greet from './Greet';
// import Welcome from './Welcome';
// import Message from './Message';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      // Part 1 - just Props Basic :
      // <div>
      //   <h1>----------- This 3 next lines is Function Component : ---------------</h1>
      //   <h1> </h1>

      //   <Greet name="omri" nickname="king">
      //     <h3>I am a Child of the Props of Omri's !!! "the h3 after" </h3>
      //     <h4>and i am the children number 2 </h4>
      //     <h5>and i am the children number 3 </h5>
      //   </Greet>

      //   <Greet name="roey" nickname="prince">
      //     <button>Im am Button Just to Roey --> Child of Roey's Props</button>
      //   </Greet>

      //   <Greet name="lihi" nickname="qween" />
        
      //   <h1> -------------- This 3 next lines is Class Component : -----------------</h1>
      //   <h1> </h1>

      //   <Welcome name="omri" nickname="king">
      //     <h3>I am a Child of the Props of Omri's !!! "the h3 after" </h3>
      //     <h4>and i am the children number 2 </h4>
      //     <h5>and i am the children number 3 </h5>
      //   </Welcome>
      //   <Welcome name="roey" nickname="prince">
      //     <button>Im am Button Just to Roey --> Child of Roey's Props</button>
      //   </Welcome>
      //   <Welcome name="lihi" nickname="qween" />
      // </div>

      // Part 2 - With States (Class Component "Message"):
      <div>
        <Counter addValue={+3} />
        <h1></h1>
        <Counter addValue={+2} />
        <h1></h1>
        <Counter addValue={+1} />
      </div>
    )
  }
}

export default App;