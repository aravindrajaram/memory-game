import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MemoryGameBoard from './components/MemoryGameBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MemoryGameBoard noOfCards='15' />
  </StrictMode>,
)
