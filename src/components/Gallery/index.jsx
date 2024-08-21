import { React, useState } from "react";
import "../../styles/Gallery/Gallery.css";
import next from "../../assets/icone_fleche_next.png";
import previous from "../../assets/icone_fleche_previous.png";

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="slideshowContainer">
      <img src={pictures[currentIndex]} alt={title} className="picture" />
      {pictures.length === 1 ? null : (
        <div>
          <img
            src={previous}
            onClick={handlePrevious}
            alt={title}
            className="previousButton"
          />
          <img
            src={next}
            onClick={handleNext}
            alt={title}
            className="nextButton"
          />
        </div>
      )}
    </div>
  );
}

export default Slideshow;
