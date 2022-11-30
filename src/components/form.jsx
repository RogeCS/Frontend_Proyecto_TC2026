import React from "react";
import Input from "./input.jsx";
import Button from "./Button.jsx";

import "../styles/components/form.css";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.answerRef = React.createRef(); 
    this.state = {
      pregnancies: '',
      glucose: '',
      bloodPressure: '',
      skinThickness: '',
      insulin: '',
      BMI: '',
      DPF: '',
      age: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state)
    this.answerRef.current.classList.remove('hide');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form__container" onSubmit={this.handleSubmit}>
          <div className="form__inputs">
            <Input
              label="Pregnancies"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="pregnancies"
              id="pregnancies"
            />
            <Input
              label="Glucose"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="glucose"
              id="glucose"
            />

            <Input
              label="Blood Pressure"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="bloodPressure"
              id="bloodPressure"
            />

            <Input
              label="Skin Thickness"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="skinThickness"
              id="skinThickness"
            />
            <Input
              label="Insuline"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="insuline"
              id="insuline"
            />
            <Input
              label="BMI"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="BMI"
              id="BMI"
            />

            <Input
              label="Diabetes Pedigree Function"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="DPF"
              id="DPF"
            />

            <Input
              label="Age"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="age"
              id="age"
            />
          </div>
          <div className="form__button" >
            <Button type="submit" value="Guess"/>
            <Button type="submit" value="Upload" />
          </div>
        </form>
        <div ref={this.answerRef} className="after__form hide">  
          This person ___ diabetes.
        </div>
      </div>
    );
  }
}

export default Form