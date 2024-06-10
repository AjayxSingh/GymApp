import Navbar from "./scenes/navbar/index"
import './App.css'
import { useEffect, useState } from "react"
import { SelectedPage } from "./Shared/types";
import Home from "./scenes/Home";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOnPage , setIsTopOnPage] = useState<boolean>(true);
  
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY == 0) {
        setIsTopOnPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY != 0){
      setIsTopOnPage(false);  
      }
      window.addEventListener("scroll", handleScroll);
      return ()=>{
        window.removeEventListener("scroll", handleScroll);
      }
    }
  } , [])
  return (
    <>
     <div className='app bg-gray-20'>
        <Navbar isTopOnPage={isTopOnPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer />
     </div>
    </>
  )
}

export default App


