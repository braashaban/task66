import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import sectImg from './../../imgs/news.jpg'
import './AboutSection2.css'
const AboutSection2 = () => {
  return (
    <section id="news" className="news pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2 className="text-primary mb-4">Become an Instuler</h2>
          <p className="text-secondary w-75">Lorem ipsum, dolor sit amet consectetur
            sit amet consectetus adipisicing elit. Et atque quas
            i assumenda possimus, adipisci quod necessitatibus dolorem! Commodi
            dolor aut obcaecati nemo, enim ad </p>
          <div className="list-news mb-5">
            <div>
            <FontAwesomeIcon icon={faCheck} className="icons" />
              <span className="text-secondary p-2">Behind the world Mountains</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faCheck} className="icons" />
              <span className="text-secondary p-2">Far fae away Mountains</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faCheck} className="icons" />
              <span className="text-secondary p-2">Large langueg occean </span>
            </div>

            <button type="button" class="btn btn-primary rounded-pill  mb-5 mt-5" data-bs-container="body"
              data-bs-toggle="popover" data-bs-placement="right" data-bs-content="GET STARTED">
              GET STARTED
            </button>

          </div>
        </div>
        <div class="col-lg-6 mt-5">
          <div className="imges">
            <img src={sectImg} alt="news" className="border-primary"/>
          </div>
        </div>
      </div>
    </div>

  </section>


  )
}

export default AboutSection2