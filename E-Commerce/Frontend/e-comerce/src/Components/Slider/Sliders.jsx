import SliderItem from "./SliderItem";
import "./Sliders.css";

const Sliders = () => {
  return (
    <section className="slider">
      <div className="slider-elements">
        <SliderItem/>
        <div className="slider-buttons">
          <button onClick="plusSlide(-1)">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick="plusSlide(1)">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button className="slider-dot active" onClick="currentSlide(1)">
            <span></span>
          </button>
          <button className="slider-dot" onClick="currentSlide(2)">
            <span></span>
          </button>
          <button className="slider-dot" onClick="currentSlide(3)">
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;
