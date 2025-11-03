import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/Forms/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import PlantIndexPage from '../PlantIndexPage/PlantIndexPage';
import PlantFormPage from '../PlantFormPage/PlantFormPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
import Footer from '../../components/Forms/Footer/Footer';
import './App.css'
import { Routes, Route, Navigate } from 'react-router';


function App() {

  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <main>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Lexend+Deca:wght@100..900&display=swap" rel="stylesheet" />

        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plants" element={<PlantIndexPage />} />
          <Route path="/plants/:plantId" element={<PlantDetailPage />} />
          <Route path="/plants/new" element={<PlantFormPage createPlant={true} />} />
          <Route path="/plants/edit/:plantId" element={<PlantFormPage editPlant={true} />}></Route>
          <Route path="plants/confirm_delete/:plantId" element={<PlantFormPage deletePlant={true} />}></Route>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
