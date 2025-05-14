import React from 'react';
import './App.css'

function App() {
  // return <h1>Prathamkumar Dubey</h1>
  return React.createElement("h1" , {} , "Prathamkumar Dubey")
}

let ele = App()
console.log(ele);

export default App;
