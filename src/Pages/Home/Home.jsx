import React from 'react' 
import NavBar from '../../Componets/NavBar/NavBar'
import './Home.css'
import imgs1 from './../../imgs/1.webp'
import imgs2 from './../../imgs/2.webp'
import imgs3 from './../../imgs/3.webp'
import CardsImgs from '../../Componets/CardsImgs/CardsImgs'
import Power from '../../Componets/Power/Power'
import Features from '../../Componets/Features/Features'
import Accordient from '../../Componets/Accordient/Accordient'
import SliderImg from '../../Componets/SiderImg/SliderImg'
import Hero from '../../Componets/Hero/Hero'
const Home = () => {
  return (
    <>
    <div>
      <NavBar />
      <Hero />
  
   {/* start the under slider */}
      <div class="under-slider">
  
        <div class="content ">
          <img src={imgs1} alt="deliver" width="50px"/>
          <div class="contentTitle">
          <p class="text"> FREE SHIPPING</p>
            <p class="text2"> For orders over $50</p>
          </div>
            </div>
    
        <div class="content">
          <img src={imgs2} alt="deliver"/>
          <div class="contentTitle">
            <p class="text"> FREE SHIPPING</p>
            <p class="text2"> For orders over $50</p>
          </div>
        </div>
  
      
        <div class="content">
          <img src={imgs3} alt="deliver"/>
          <div class="contentTitle">
            <p class="text-black"> FREE SHIPPING</p>
            <p class="text-secondary"> For orders over $50</p>
          </div>
        </div>
     
   
         </div>


         {/* the second section */}

         <div className="title-section mt-4">
          <h2 className="text-center">WHAT MAKES THE ESSENTIAL DIFFERENT?</h2>
          <p className="text-center">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
         </div>
         <div className="cards">
         <div className="card-1">
          <img src="" alt="" />
          <h5></h5>
          <h5></h5>
          <p className='text-primary'></p>
         </div>

         </div>
      </div>
     
     <CardsImgs />
     <Power />
     <Features />
     <Accordient />
     <SliderImg />
     </>
  )
}

export default Home