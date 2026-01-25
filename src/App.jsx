import { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import ContextProvider from './context/ContextProvider'

function App() {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    
    if(code) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/url/${code}`, {
        method: 'GET',
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
        if(data.longUrl) {
          window.location.href = data.longUrl;
        }
      })
      .catch(err => console.log("Invalid code"));
    }
  }, []);

  return (
    <ContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </ContextProvider>
  )
}

export default App
