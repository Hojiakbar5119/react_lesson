// ?  this component yordamida ishladik

// import React, { Component } from "react";

// export default class Hook extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//     };
//   }
//   render() {
//     // const plus=()=>{
//     //   this.setState({count: this.state.count+1})
//     //   console.log(this.state.count);
//     // }
//     return (
//       <div>
//         <h1>Hook</h1>
//         <h3>Count = {this.state.count} </h3>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           increment
//         </button>
//       </div>
//     );
//   }
// }

import React, { useState, useReducer } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const [counter, dispatch] = useReducer((state, action) => {
    console.log(state, action);

    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "doubleplus":
        return state + action.payload;
      default:
        state;
    }
  },0);
  // console.log(count, setCount);
  return (
    <div>
      <h1>Hook</h1>
      <h2>Count {count} </h2>
      <h3>Counter : {counter} </h3>
      <button onClick={() => dispatch({ type: "plus" })}>plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
      <button onClick={() => dispatch({ type: "doubleplus", payload:5 })}>5</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>incrememnt</button>
    </div>
  );
};
export default Hook;
