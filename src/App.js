// import logo from './logo.svg';
import './App.css';
// import TextClass from './TextClass'
// import Text from './text'
// import Greeting from './Greeting'
import React, { Component, useState } from 'react'
// import React, { useState } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  IncrementItem = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  DecreamentItem = () => {
    this.setState({ counter: this.state.counter - 1 });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.DecreamentItem}>-</button>  <input className="InputNumber" value={this.state.counter} />   <button onClick={this.IncrementItem}>+</button>
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   state = {
//     counter: 1
//   };

//   render() {
//     return (
//       <div>
//         <button>-</button><input value={this.state.counter} /><button>+</button>
//       </div>
//     );
//   }
// }

// export default App;
// export default function App(props) {
//   const [name, setName] = useState('Hanif');

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }

//   return (
//     <div>
//       <p>Nama saya adalah {name}</p>
//       <input value={name} onChange={handleNameChange} />
//     </div>
//   );
// }

// export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Angga', age: 19 }
//     ]
//   };
//   submitHandler = (event) => {
//     // alert('Hallo')
//     // this.state.persons.name[0].name = 'Agat'
//     this.setState({
//       persons: [
//         { name: 'Agat' }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div>
//         <p>Nama saya adalah {this.state.persons[0].name}</p>
//         <button onClick={this.submitHandler}>Submit</button>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Agat', age: 19 },
//       { name: 'Hanif', age: 29 },
//       { name: 'Adi', age: 39 },
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <Greeting name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Greeting name={this.state.persons[1].name} age={this.state.persons[1].age} />
//         <Greeting name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div >
//     );
//   }
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>React Js</h1>
//         <p>
//           Percobaan Pertama
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Apa itu React?
//         </a>
//         <Text color="yellow" text="contoh 1" />
//         <TextClass color="white" text="contoh 2" />

//         <Greeting name='Dewi' age='25'>
//           Children Property
//         </Greeting>




