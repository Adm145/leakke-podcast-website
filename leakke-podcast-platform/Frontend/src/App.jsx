import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShamelessPlug from './components/ShamelessPlug/ShamelessPlug';

function App() {
  return (
    <div className='App d-flex flex-column min-vh-100'>

      <Header />
      
      <div className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about/*' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>


      <Footer />
      <ShamelessPlug />

    </div>
  );
}

export default App;