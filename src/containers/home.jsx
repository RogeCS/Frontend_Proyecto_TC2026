import React from "react";
import Hero from '../components/hero.jsx'
import Form from "../components/form.jsx";

import "../styles/components/home.css";
import Button from "../components/Button.jsx";
import Footer from "../components/footer.jsx";

const Index = () => {
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
              <h1>Train the model</h1>
              <p>Click the button to train the model with the new record uploaded</p>
            </div>
            <Button type="submit" value="Train"/>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;