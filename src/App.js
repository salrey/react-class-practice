import { Component } from 'react';
import './App.css';
import NameForm from "./NameForm"
import EmailForm from "./EmailForm"

class App extends Component {
  render() {
    return (
        <div className="App">
          <p>Hello</p>
          <NameForm />
          <EmailForm />
        </div>
    );
  }
}

export default App;