import { useState } from "react";

import "./App.css";
import Accordion from "./components/Accordion";
import DefaultCarousel from "./components/Carousel";
import ExchangeRate from "./components/ExchangeRate";
import PopUp from './components/PopUp'
import News from "./components/News";
function App() {
  return (
    <>
     <DefaultCarousel></DefaultCarousel>
      <Accordion></Accordion>
      <News></News>     
      <PopUp></PopUp>
    </>
  );
}

export default App;
