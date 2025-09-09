import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NavermapsProvider } from 'react-naver-maps'

console.log('VITE 환경 변수:', import.meta.env.VITE_NAVER_MAPS_CLIENT_ID);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <NavermapsProvider 
      ncpKeyId="9a58ndwoeh"
    >
    <App />
    </NavermapsProvider>
  </React.StrictMode>,
)
