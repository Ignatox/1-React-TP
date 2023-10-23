import AboutUs from "../components/AboutUs/AboutUs";
import CarouselHome from "../components/CarouselHome/CarouselHome";


function HomePage() {
    return (
      <>
        <CarouselHome/>
        <div className="titulo-1">
        <p>About Us</p>
        Know more about us clicking on the text fields.
        </div>
        <AboutUs/>
      </>
    )
  }
  
  export default HomePage