import './Power.css'
import  lab from './../../imgs/lab.webp'

const Power = () => {
  return (
    <section class="power mt-5">
    <div class="container mt-5">
      <div class="head">
        <h2 class="text-center">POSSIBILITIES. PERFORMANCE. POWER.</h2>
        <p class="text-secondary text-center" >FASTER PROCESSING WITH LESS
          POWER</p>
      </div>
      <div class="main">
        <div class="rows">
          <div class="col">
            <div class="imgess ">
              <img src={lab} class="img-fluid w-100"/>
            </div>
            <div class="pointsss">
              <div class="point">
                <div class="spinner-grow text-danger dot" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="line"></div>
              </div>
              <div class="point">
                <div class="spinner-grow text-danger dot" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="line1"></div>
              </div>
              <div class="point">
                <div class="spinner-grow text-danger dot" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="line2">
                </div>
              </div>

              <div class="point">
                <div class="spinner-grow text-danger dot" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="line3">
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

  </section>


  )
}

export default Power