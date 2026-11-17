import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Fade out the boot loader once the first paint (and fonts) are ready.
const hideLoader = () => document.getElementById('boot-loader')?.classList.add('done')
Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]).then(() =>
  setTimeout(hideLoader, 250),
)
