import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutComponent from "./components/About";
import HomeStackGallery from "./components/Gallery";
import HomeVideoSection  from "./components/Videos";
import HomeTestimonials from "./components/Testimonials";



export default function Home() {
  return (
    <div>      
      <Hero/>
      <Services/>
      <AboutComponent/>
      <HomeStackGallery/>
      <HomeVideoSection/>
      <HomeTestimonials/>
    </div>
  );
}
