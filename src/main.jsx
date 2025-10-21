import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Paises from './Paises'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Paises />
  </StrictMode>,
)
