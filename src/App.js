// import logo from './logo.svg';
import './App.css';
// import TextClass from './TextClass'
// import Text from './text'
// import Greeting from './Greeting'
import React, { Component } from 'react'
// import React, { useState } from 'react'
import Input from './Input'
import Output from './Output'
import Submit from './Submit'
import Age from './Age'

class App extends Component {
  state = {
    name: '',
    age: ''
  }

  changeNameHandler = (event) => {
    console.log(event)
    this.setState(
      { name: event.target.value }
    )
  }

  changeAge = (event) => {
    this.setState(
      { age: event.target.value }
    )
  }

  checkSubmit = (event) => {
    if (this.state.name === '' || this.state.age === '') {
      alert('Please Input Both of Your Name and Age')
    } else if (isNaN(this.state.age)) {
      alert('Age Must be in Number Only')
    } else {
      alert('Welcome ' + this.state.name + ' ' + this.state.age);
    }
  }

  render() {
    return (
      <div className='main'>
        <h1>Hello Gaes...</h1> <hr />
        <Input name={this.state.name} changeName={this.changeNameHandler} /> <br /><br />
        <Age age={this.state.age} changeAge={this.changeAge} /> <br />
        <Output name={this.state.name} age={this.state.age} /> <br />
        <Submit checkSubmit={this.checkSubmit} />
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.input = React.createRef();
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.input.current.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         Name:<input type="text" ref={this.input} />
//         <button onSubmit={this.handleSubmit}>Submit</button>
//       </form>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   inputSubmit = () => {
//     alert('Your Name Was Submitted: ' + this.state.input)
//   }

//   state = {
//     name: <input type="text" />,
//     submit: <button onClick={this.inputSubmit}>Submit</button>
//   }

//   render() {
//     return (
//       <div>
//         <Greeting name={this.state.name} submit={this.state.submit} />
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   state = {
//     title: 'Welcome',
//     desc: 'to this page made by',
//     author: 'Dewi'
//   }
//   render() {
//     return (
//       <div>
//         <Greeting title={this.state.title} desc={this.state.desc} author={this.state.author}></Greeting>
//       </div>
//     )
//   }
// }

// export default App;


// class App extends Component {
//   state = {
//     counter: 0
//   }


//   IncrementItem = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   }
//   DecreamentItem = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.DecreamentItem}>-</button>
//         <input className="InputNumber" value={this.state.counter} />
//         <button onClick={this.IncrementItem}>+</button>
//       </div>
//     );
//   }
// }

// export default App;


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




