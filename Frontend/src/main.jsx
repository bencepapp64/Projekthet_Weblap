import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="App" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
