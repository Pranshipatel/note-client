import React from 'react'
import AppRoutes from './components/routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  )
}

export default App
