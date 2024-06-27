import {Routes, Route} from  'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import UberUns from './pages/UberUns';
import Kontakt from './pages/Kontakt';
import Webdesign from './pages/Webdesign';
import Footer from './components/Footer';
import AngebotForm from './pages/AngebotFrom';

function App() {
  return (
    <div className="App">

      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uberuns" element= {<UberUns />} />
        <Route path="/kontakt" element= {<Kontakt />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/angebot-form" element={<AngebotForm />} />
        

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
