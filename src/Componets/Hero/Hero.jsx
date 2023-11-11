
import "./Hero.css"

function Hero() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner ">
      <div className="carousel-item active carousel-item1 position-relative">
        <div className="contant position-absolute text-center">
          <h2>Zania Black Edition</h2>
          <h1>
            Curvy Bevel <br />
            Dual Audio
          </h1>
          <div className="shop-now">
            <button type="button" className="btn btn-outline-danger rounded-pill">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-item carousel-item2">
        <div className="contant position-absolute text-center">
          <h2 className=" ">4K Resolution</h2>
          <h1 className="">
            Exclusive <br />
            Steel Frame
          </h1>
          <div className="shop-now">
            <button type="button" className="btn btn-outline-danger rounded-pill">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-item carousel-item3">
        <div className="contant position-absolute text-center">
          <h2 className="banner__sub_heading">Delta Zertiga Processor</h2>
          <h1 className="banner__heading h0 mb-5">
            Full Screen <br />
            Display
          </h1>
          <div className="shop-now">
            <button type="button" className="btn btn-outline-danger rounded-pill">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Hero