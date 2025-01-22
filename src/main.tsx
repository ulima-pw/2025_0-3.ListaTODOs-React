import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoPage from './TodoPage'
//import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoPage />
  </StrictMode>,
)
