import "./NameForm.css"
import Input from "./Input"

function NameForm() {
    const text = 'Submit Your Name';
    return (
      <form>
        <Input />
        <button type="submit">{text}</button>
      </form>
    )
  }

  export default NameForm