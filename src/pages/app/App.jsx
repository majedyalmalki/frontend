import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/Forms/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import PlantIndexPage from '../PlantIndexPage/PlantIndexPage';
import PlantFormPage from '../PlantFormPage/PlantFormPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
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
          <Route path="/plants/:plantId" element={<PlantDetailPage />} />
          <Route path="/plants/new" element={<PlantFormPage createPlant={true} />} />
          <Route path="/plants/edit/:plantId" element={<PlantFormPage editPlant={true} />}></Route>
          <Route path="plants/confirm_delete/:plantId" element={<PlantFormPage deletePlant={true} />}></Route>

        </Routes>
      </main>
    </>
  )
}

export default App
