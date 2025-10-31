import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Paises from './Paises'
import Pais from './Pais'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/paises" element={<Paises/>}>
        <Route path=":pais" element={<Pais/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
