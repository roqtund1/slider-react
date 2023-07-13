import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { shortList, list, longList } from "./data";

export default function Carousel() {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
  const peopleLength = people.length;

  function prevSlide() {
    if (currentPerson === 0) {
      return setCurrentPerson(peopleLength - 1);
    }
    return setCurrentPerson(currentPerson - 1);
  }
  function nextSlide() {
    if (currentPerson === peopleLength - 1) {
      return setCurrentPerson(0);
    }
    return setCurrentPerson(currentPerson + 1);
  }

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person;
        return (
          <article
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: currentPerson === personIndex ? 1 : 0,
              visibility: currentPerson === personIndex ? 1 : 0,
            }}
            className="slide"
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button onClick={prevSlide} className="prev">
        <FiChevronLeft />
      </button>
      <button onClick={nextSlide} className="next">
        <FiChevronRight />
      </button>
    </section>
  );
}
