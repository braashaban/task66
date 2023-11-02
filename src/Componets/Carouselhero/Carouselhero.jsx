import Carousel from 'react-bootstrap/Carousel';
import slid1 from '../../imgs/phono-slider-1.webp'
import slid2 from '../../imgs/phono-slider-2.webp'
import slid3 from '../../imgs/phono-slider-3.webp'
import  './Carouselhero.css'

const Carouselhero = () => {
  return (
    <Carousel data-bs-theme="dark" className="carouselll">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slid1}
        alt="First slide"
      />
      <Carousel.Caption className="titleCaro">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src={slid2}
        alt="Second slide"
      />
      <Carousel.Caption className="titleCaro2">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src={slid3}
        alt="Third slide"
      />
      <Carousel.Caption className="titleCaro">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carouselhero