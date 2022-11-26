import React from "react";
import Input from "./input.jsx";
import Button from "./Button.jsx";

import "../styles/components/form.css";


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
        <div className="form__inputs">
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

          <Input
            label="Surname"
            type="input"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="surname"
            name="surname"
            id="surname"
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
        </div>
        <div className="form__button" >
          <Button type="submit" value="Enviar" />
        </div>
      </form>
    );
  }
}

export default Form