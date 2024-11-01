import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header';

function App() {
  return (
    <div>

      <Header />

      <h1>App</h1>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;