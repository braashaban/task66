
import AboutHero from '../../Componets/AboutHero/AboutHero'
import CardAbout from '../../Componets/CardAbout/CardAbout'
import NavBar from '../../Componets/NavBar/NavBar'
import './Android.css'
import { faBook, faBriefcase, faCalculator, faCamera, faMusic, faPen, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import AboutSection2 from '../../Componets/AboutSection2/AboutSection2'
import AboutCard22 from '../../Componets/AboutCard22/AboutCard22'
const Android = () => {
  return (
    <>
      <NavBar />
      <AboutHero />

      <section id="our-stsff" className="catagory">
        <h2 className="text-center head"> Browse top Catagory</h2>
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faStar} title="Seneice" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faBriefcase} title="Busines" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faCalculator} title="Finance According" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faPen} title="Design" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faMusic} title="Music" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faDribbble} title="Markiting" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faCamera} title="Photograph" headd="1,582 couser" />
            </div>
            <div className="col-lg-3  col-md-4 col-sm-6 col-xs-6 mb-2 box">
              <CardAbout iconss={faPlus} title="Animations" headd="1,582 couser" />
            </div>
          </div>
        </div>
      </section>


       {/*AboutSection2  */}
      <AboutSection2 />
     {/* end AboutSection2  */}


     <section id="education" className="educatio">
      <div className="container mt-5">
        <h3 className="text-center text-primary">We Have Best Education </h3>
        <p className="text-center text-secondary m-auto w-50 mt-3 mb-5">
          far far away Behind the word montaines far from the
          from the ccountry syria and ccountry syria and coustonis there live the bind text</p>
        <div className="row m-auto">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
          <AboutCard22  icons={faCalculator} title="music class" content="y Behind the word montaines far from the"/>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
          <AboutCard22  icons={faBook} title="book class" content="y Behind the word montaines far from the" />
          </div>
          <div className="col-lg-4  col-md-6 col-sm-12 mb-2">
          <AboutCard22  icons={faMusic} title="music class" content="y Behind the word montaines far from the" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  mb-3">
          <AboutCard22  icons={faCamera} title="music class" content="y Behind the word montaines far from the" />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <AboutCard22  icons={faCalculator} title="music class" content="y Behind the word montaines far from the" />
          </div>
          <div className="col-lg-4  col-md-6 col-sm-12 mb-3">
          <AboutCard22   icons={faCalculator} title="music class" content="y Behind the word montaines far from the"/>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default Android