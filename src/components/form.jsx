import React from "react";
import Input from "./input.jsx"

import "../styles/components/form.css"


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + ' ' + this.state.surname);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form__container" onSubmit={this.handleSubmit}>
        <Input
          label="Name"
          type="input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="name"
          name="name"
          id="name"
        />
        <Input
          label="Surname"
          type="input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="surname"
          name="surname"
          id="surname"
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form