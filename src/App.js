
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './components/pages/team/Team';
import Events from './components/pages/Events/Events';
import Contact from './components/pages/contact/Contact';
import MemberShip from './components/pages/membership/MemberShip';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />}/>
       <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<MemberShip/>} />
       </Routes>
    <Footer/>
       
    </BrowserRouter> 
    
  );
}

export default App;
