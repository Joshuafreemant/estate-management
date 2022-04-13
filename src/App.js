import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


import Home from './Component/Dashboard';
import Residents from './Component/Residents';
import Visitors from './Component/Visitors';
import Payments from './Component/Payments';
import News from './Component/News';
import PasswordReset from './Component/PasswordReset';
import ForgotPassword from './Component/ForgotPassword';
import Login from './Component/Login';
import EmailSent from './Component/EmailSent';
import Reset from './Component/Reset';
import Apartment from './Component/Apartment';






import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTopOnMount />
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="residents" element={<Residents />} />
          <Route exact path="visitors" element={<Visitors />} />
          <Route exact path="payments" element={<Payments />} />
          <Route exact path="news" element={<News />} />
   
          <Route exact path="password-reset" element={<PasswordReset />} />
          <Route exact path="forgot-password" element={<ForgotPassword />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="email-sent" element={<EmailSent />} />
          <Route exact path="reset" element={<Reset />} />
          <Route exact path="apartment" element={<Apartment />} />
         
          
          
          
          
        </Routes>

      
      </Router>

    </>

  )
}
