import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NumbaseSupport, NumbasePrivacyPolicy } from './Pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/numbase-support' element={<NumbaseSupport />} />
        <Route path='/numbase-privacy' element={<NumbasePrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;