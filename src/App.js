import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import ReactLogo from './Images/one.png';

import Home from './Component/Dashboard';
import Residents from './Component/Residents';
import Visitors from './Component/Visitors';
import Payments from './Component/Payments';
import News from './Component/News';

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
         
          
          
          
          
        </Routes>

      
      </Router>

    </>

  )
}
