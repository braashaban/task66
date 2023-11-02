import React from 'react'
import './Features.css'
import ic from './../../imgs/ic1.webp'
import ic1 from './../../imgs/ic2.png'
import ic2 from './../../imgs/ic3.webp'
import ic3 from './../../imgs/ic4.webp'
import ic4 from './../../imgs/ic5.png'
import ic5 from './../../imgs/ic6.webp'
import center from './../../imgs/centaet.webp'





const Features = () => {
  return (

    <section class="features mt-5">
      <div class="container mt-5">
        <div class="head">
          <h2 class="text-center">INNOVATIVE QUALITIES & FEATURES</h2>
          <p class="text-secondary text-center" >SHOW YOURS TO THE WORLD</p>
        </div>
        <div class="main-features mt-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="feat1  mb-5">
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
                <img src={ic} alt="deliver"/>
              </div>
  
              <div class="feat1 d-flex mb-5">
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
                <img  src={ic1} alt="deliver"/>
              </div>
              <div class="feat1 d-flex mb-5">
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
                <img src={ic2} alt="deliver"/>
              </div>
  
            </div>
            <div class="col-lg-4">
              <img  src={center} alt="centersd" className="center-img" />
            </div>
            <div class="col-lg-4">
              <div class="feat1 d-flex mb-5 ">
                <img  src={ic3} alt="deliver"/>
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
  
              </div>
              <div class="feat1 d-flex mb-5 ">
                <img  src={ic4} alt="deliver"/>
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
              </div>
              <div class="feat1 d-flex mb-5 ">
                <img src={ic5} alt="deliver"/>
                <div class="mb-3 p-3">
                  <h5 class="text-black">INTELLIGENT PROCESSOR</h5>
                  <p> Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti
                    qeueri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features