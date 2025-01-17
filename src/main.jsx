import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import GlobalStyles from './components/GlobalStyles/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </StrictMode>,
)
