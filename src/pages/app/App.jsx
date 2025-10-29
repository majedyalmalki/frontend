import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/Forms/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import PlantIndexPage from '../PlantIndexPage/PlantIndexPage';
import PlantFormPage from '../../components/Forms/PlantFormPage/PlantFormPage';
import './App.css'
import { Routes, Route, Navigate } from 'react-router';


function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <NavBar />
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plants" element={<PlantIndexPage />} />
          <Route path="/plants/new" element={<PlantFormPage />} />

        </Routes>
      </main>
    </>
  )
}

export default App
