import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/Forms/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import PlantIndexPage from '../PlantIndexPage/PlantIndexPage';
import PlantFormPage from '../PlantFormPage/PlantFormPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
import Footer from '../../components/Forms/Footer/Footer';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css'
import { Routes, Route, Navigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { getUser } from '../../utilities/users-api';

function App() {
  const [user, setUser] = useState(null)

  const location = useLocation();

  const routes = ["about", "plants", "home"]

  useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      setUser(foundUser)
    }
    checkUser()
  }, [])


  return (
    <>
      <header className="navbar">
        <nav className="navbar-links">
          <NavBar user={user} setUser={setUser} />
        </nav>
      </header>

      <main>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />

        <Routes>
          {user ? <>
            <Route path='/home' element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/plants" element={<PlantIndexPage />} />
            <Route path="/plants/:plantId" element={<PlantDetailPage />} />
            <Route path="/plants/new" element={<PlantFormPage createPlant={true} />} />
            <Route path="/plants/edit/:plantId" element={<PlantFormPage editPlant={true} />}></Route>
            <Route path="plants/confirm_delete/:plantId" element={<PlantFormPage deletePlant={true} />}></Route>
          </> : <>
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path='/home' element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<RegisterPage user={user} setUser={setUser} />} />
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
          </>}
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
