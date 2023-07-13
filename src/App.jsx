import { useState } from "react";
import Carousel from "./Carousel";
import { shortList, list, longList } from "./data";
import SlickCarousel from "./slickCarousel";


function App() {
  return (
    <main>
      <SlickCarousel />
    </main>
  );
}

export default App;
