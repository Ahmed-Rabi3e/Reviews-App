import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="bg-[#fff] px-6 py-8 rounded-md shadow-xl text-center transition-all duration-200">
      <div className="relative w-36 h-36 rounded-full my-auto mx-auto mb-6 before:content-[''] before:w-full before:h-full before:bg-cofy before:absolute before:-top-1 before:-right-2  before:rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full block h-full object-cover rounded-full relative"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="mb-1 capitalize">{name}</h4>
      <p className="mb-2 uppercase text-cofy text-2xl">{job}</p>
      <p className="mb-3 text-[#777]">{text}</p>
      <div className="button-container">
        <button
          className="text-cofy hover:text-[#000000] mr-2"
          onClick={prevPerson}
        >
          <FaChevronLeft size={30} />
        </button>
        <button className="text-cofy hover:text-[#000000] ml-2" onClick={nextPerson}>
          <FaChevronRight size={30} />
        </button>
      </div>
      <button
        onClick={randomPerson}
        className="mt-4 capitalize rounded-md bg-cofy px-3.5 py-2.5 text-sm font-semibold text-[#fff] shadow-sm hover:bg-[#000000]"
      >
        surprise me
      </button>
    </article>
  );
};

export default Review;
