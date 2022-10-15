import Carousel from "react-bootstrap/Carousel";

const imgs = ["hc1.png", "hc2.png", "hc3.png"];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel controls={false} indicators={false} interval={2000}>
        {imgs.map((item) => (
          <Carousel.Item key={item}>
            <img
              src={`assets/${item}`}
              width="280px"
              className="d-block mx-auto"
              alt=""
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
