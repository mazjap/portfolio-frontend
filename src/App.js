import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NumbaseSupport } from './Pages';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numbase-support" element={<NumbaseSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;