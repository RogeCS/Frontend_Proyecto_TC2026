import React, { useState } from "react";
import axios from "axios";
import Hero from '../components/hero.jsx'
import Form from "../components/form.jsx";
import { config } from "../config";

import "../styles/components/home.css";
import Button from "../components/Button.jsx";
import Footer from "../components/footer.jsx";
import Update from "../components/update.jsx";

const Index = () => {
  const [accuracy, setAccuracy] = useState();

  function handleClick(e) {
    axios.post(`${config.modelURL}/trainDiabetes`, {}, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': true,
        }
      })
        .then((response) => {
          console.log(response.data)
          setAccuracy(response.data.Resultado)
        })
        .catch((err) => console.log(err))
  }

  return (
    <main className="main">
      <Hero></Hero>
      <div className="grid_container">
        <section className="home__body">
          <div>
            <div className="home__info">
              <h1>Let's analyze!</h1>
              <p>Enter the health values of the person so I can analyze if he/she has diabetes.</p>
            </div>
            <Form></Form>
          </div>
          <div className="train__container">
            <div className="home__info">
              <h1>Manage an existing rsecord</h1>
              <p>if you need to update a record or delete one please type its ID</p>
            </div>
            <Update></Update>
          </div>
          <div className="train__container">
            <div className="home__info">
              <h1>Train the model</h1>
              <p>Click the button to train the model with the new record uploaded</p>
            </div>
            <Button type="button" value="Train" onClick={handleClick}/>
            <p className="ya">The model has been trained, the new accuracy is: {accuracy}</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;