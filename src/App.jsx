import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import Register from './views/Register';
import ResetPassword from './views/ResetPassword';
import NotFound from './views/NotFound';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
