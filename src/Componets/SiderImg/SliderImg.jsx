import  './SliderImg.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cardss from '../Cardss/Cardss';
import {BData}  from '../../BData'
const SliderImg = () => {
 

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
 <div>

<Carousel  infinite={true}responsive={responsive}>

  {BData.map((product,indexs) =>
  <Cardss key={indexs}
  img={product.img}
   name={product.name}
    price={product.price} />
  )}
  
      </Carousel>;
 </div>

  )
}

export default SliderImg