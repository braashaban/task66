import './CardsImgs.css'
import imgess1 from './../../imgs/ic11.webp'
import imgess2 from './../../imgs/ic12.webp'
import imgess3 from './../../imgs/ic13.avif'

const CardsImgs = () => {
  return (
   
<section className="performance">
      <div className="container mt-5">
        <div className="head-perfonce">
          <h2 className="text-center">WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
          <p className="text-secondary text-center">EXPERIENCE HIGH PERFORMANCE
            AND SECURE</p>
        </div>
        <div className="main-performance mt-5">
          <div className="row m-auto">
            <div className="col-lg-4  col-md-6 col-sm-12 text-center mb-4">
              <div className="card ">
                <img className="card-img-top mb-3" src={imgess1} alt="Card image cap"/>
                <p className="p-card">PERFECT CUT</p>
                <h4 className="p-card">DUAL CAMERA</h4>
                <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.</p>

              </div>
            </div>
  
            <div className="col-lg-4  col-md-6 col-sm-12 text-center mb-4">
              <div className="card">
                <img className="card-img-top mb-3" src={imgess2} alt="Card image cap"/>
  
                <p className="p-card">PERFECT CUT</p>
                <h4 className="p-card">DUAL CAMERA</h4>
                <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.</p>
  
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
              <div className="card">
                <img className="card-img-top mb-3" src={imgess3} alt="Card image cap"/>
                <p className="p-card">PERFECT CUT</p>
                <h4 className="p-card">DUAL CAMERA</h4>
                <p className="card-text text-secondary">Tristique senectus et netus et malesuada ant reiet fames.s </p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
  
    </section>

  )
}

export default CardsImgs