import Model from "./model"
import Features from "./features"
import Video_solution from "./video_solution"
import Dashboard from "./dashboard"
import Mentor_chat from "./mentor_chat"
import Success from "./success"
import FAQs from "./FAQs"
import Footer from "./footer"

const Home = () => {
  return (
    <div>
     <Model/>
     <Features/>
     <Video_solution/>
     <Dashboard/>
     <Mentor_chat/>
     <Success/>
     <FAQs/>
     <Footer/>
    </div>
  )
}

export default Home