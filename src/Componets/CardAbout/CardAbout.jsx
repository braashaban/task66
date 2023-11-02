import './CardAbout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardAbout = (props) => {
  return (
  
    <>
      <div class="content d-flex justify-content-around align-center">
            <div class="icons">
            <FontAwesomeIcon icon={props.iconss}  className="iconabout"/>
            </div>
            <div>
              <h6>{props.title}</h6>
              <span class="text-secondary">{props.headd}</span>
            </div>
          </div>
    </>
  )
}

export default CardAbout