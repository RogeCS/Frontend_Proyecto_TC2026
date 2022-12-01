import React, { useState } from "react";
import axios from "axios";
import Button from "./button";
import Input from "./input";
import { get } from "../methods"
import { config } from "../config"

import "../styles/components/update.css"

const Update = () => {
  const [state, setState] = useState(0)
  const [deleted, setDelete] = useState(false)
  const [record, setRecord] = useState()
  const handleChange = (e) => {
    setState(parseInt(e.target.value))
  }

  const deleteRecord = (e) => {
    console.log(record)
    axios.post(`${config.backURL}/diabetes/deleteRecord`, {"id": parseInt(record.id)}, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( response => {
        console.log(response)
        setRecord()
        setDelete(true)
      })
      .catch(err => console.log(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(state)
    let data = await get(`${config.backURL}/diabetes/readRecord?id=${state}`)
    if (data) {
      setRecord(data[0])
      setDelete(false)
    }
  }

  return(
    <div>
      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__inputs-2">
          <Input 
            type="text" 
            label="Type your id" 
            value={state.value}
            onChange={handleChange}
            name="id" 
            id="id"
          />
          <Button type="submit" value="Get record" />
        </div>
      </form>
      <div>
        { record && (
          <div className="record__container">
            <div className="record__info">
              <h1>Your record</h1>
              <p>ID: {record.id}</p>
              <p>Pregnancies: {record.pregnancies}</p>
              <p>Glucose: {record.glucose}</p>
              <p>Blood Pressure: {record.bloodPressure}</p>
              <p>Skin Thickness: {record.skinThickness}</p>
              <p>Insulin: {record.insulin}</p>
              <p>BMI: {record.BMI}</p>
              <p>DPF: {record.DPF}</p>
              <p>Age: {record.age}</p>
            </div>
            <Button type="button" value="Delete record" onClick={deleteRecord} />
          </div>
          )
        }
        {
          deleted && <h1 className="eliminado">Record Deleted</h1>
        }
      </div>
    </div>
  )
}

export default Update;