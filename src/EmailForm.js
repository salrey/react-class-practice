import { Component } from "react";
import "./EmailForm.css"
import Input from "./Input"

class EmailForm extends Component {
    constructor() {
        super();
        this.text = 'Submit Your Email';
    }
    
    render() {
        return (
          <form>
            <Input />
            <button type="submit">{this.text}</button>
          </form>
        )
    }
  }

  export default EmailForm