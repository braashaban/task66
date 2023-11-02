import './AboutHero.css'
import imgabout from './../../imgs/bro.jpg'
const AboutHero = () => {
  return (
<div className="mainhero">
    <div class="hero" style={{ backgroundImage: `url(${imgabout})` }}>
      <div class="container">
        <div class="row justify-content-center align-center">
          <div class="col-lg-6 text-center">
            <p class="pb-1">watch the video</p>
            <h1 class="pb-3">Education is the Mother of Leadership</h1>
            <button type="button" class="btn-33  rounded-pill">EXPLORER COURSE</button>
          </div>
        </div>
      </div>

  </div>
  </div>
  )
}

export default AboutHero