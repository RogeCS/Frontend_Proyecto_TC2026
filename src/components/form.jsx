import React from "react";
import axios from 'axios';
import Input from "./input.jsx";
import Button from "./Button.jsx";

import "../styles/components/form.css";
import Checkbox from "./checkbox.jsx";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.answerRef = React.createRef(); 
    this.check = false;
    this.state = {
      pregnancies: 0,
      glucose: 0,
      bloodPressure: 0,
      skinThickness: 0,
      insulin: 0,
      BMI: 0,
      DPF: 0,
      age: 0,
      class: 0,
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData = async () => {
    await axios.post('http://localhost:3000/diabetes/createRecord', {
      mydata
    })
}

  handleChange(event) {
    this.setState({[event.target.name]: parseInt(event.target.value)});
  }

  handleCheck(event) {
    this.upload = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.pregnancies)
    if(this.upload){
      const mydata = JSON.stringify(this.state)
      console.log(typeof mydata)
      axios.post('http://localhost:3000/diabetes/createRecord', mydata, {
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err))

    }
    this.answerRef.current.classList.remove('hide');
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
              label="Insulin"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="insulin"
              id="insulin"
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

            <Input
              label="Class (0/1)"
              type="input"
              value={this.state.value}
              onChange={this.handleChange}
              name="class"
              id="class"
            />

            <Checkbox onChange={this.handleCheck} name="upload">Upload to database</Checkbox>
          </div>
          <div className="form__button" >
            <Button type="submit" value="Guess" name="guess" />
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