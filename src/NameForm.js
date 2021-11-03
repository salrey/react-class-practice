import "./NameForm.css"
import Input from "./Input"
import { Component } from "react";

class NameForm extends Component {
    constructor() {
        super()
        this.text = 'Submit Your Name'
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

  export default NameForm