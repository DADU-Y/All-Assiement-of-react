import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../../assets/ExampleCarouselImage1.webp';
import ExampleCarouselImage2 from '../../assets/ExampleCarouselImage2.webp';
import ExampleCarouselImage3 from '../../assets/ExampleCarouselImage3.webp';

function Mycarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Mycarousel;