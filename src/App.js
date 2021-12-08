import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Firestore
import { useFetch } from './firebase/useFetch';

// Styles
import './App.scss';

// Pages
import LandingPage from './pages/LandingPage';
import Codebook from './pages/Codebook';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CreateCodebook from './pages/CreateCodebook';

function App() {
  const {data} = useFetch()
  const [isLandingPage, setIsLandingPage] = useState(false)

  const handleIsLandingPage = (value) =>{
    setIsLandingPage(value)
  }

  return (
    <div className="App">
      <BrowserRouter>
        {!isLandingPage && <Sidebar />}
        <div className={'main' + (isLandingPage ? ' lp': '')}>
          {!isLandingPage && <Navbar />}
          
          <Routes>
            <Route path="/" element={<LandingPage handleIsLandingPage={handleIsLandingPage} /> } />
            <Route path="/codebook" element={<Codebook /> } />
            <Route path="/codebook/create" element={<CreateCodebook /> } />
          </Routes>
        </div>
      </BrowserRouter>

      {/* {data && data.map(data=> (
        <div key={data.id}>{data.nama}</div>
      ))} */}
    </div>
  );
}

export default App;
