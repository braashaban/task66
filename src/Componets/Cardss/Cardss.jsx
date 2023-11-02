import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import'./Cardss.css'
import { Container } from 'react-bootstrap';
const Cardss = (props) => {
  return (
  <>
    <Container />
<Card style={{ width: '16rem' }} className="cardslider">
    <Card.Img variant="top" src={props.img}  />
    
    <button className="btnsss"> Add TO Catagory</button>
    <Card.Body className="cardbody">
      <Card.Title>{props.name}</Card.Title>
      <FontAwesomeIcon icon={faStar} className="icons" />
      <FontAwesomeIcon icon={faStar} className="icons" />
      <FontAwesomeIcon icon={faStar} className="icons" />
      <FontAwesomeIcon icon={faStar} className="icons" />
      <FontAwesomeIcon icon={faStar} className="icons" />
      <Card.Text>

      {props.price}
      </Card.Text>
    
    </Card.Body>
  </Card>
  </>
  )
}

export default Cardss