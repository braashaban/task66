
import './AboutCard22.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutCard22 = (props) => {
  return (
    <div className="card p-4 shadow m-auto position-relative" >
    <div className="card-body">
      <div className="iconn text-center mb-3">
        <div className="icon">
        <FontAwesomeIcon icon={props.icons} className="icons" />
        </div>
      </div>
      <h5 className="card-title text-center mt-3 text-primary">{props.title}</h5>
      <p className="card-text text-center text-secondary">{props.content}</p>

    </div>
    <div class="overlay"></div>
  </div>
  )
}

export default AboutCard22