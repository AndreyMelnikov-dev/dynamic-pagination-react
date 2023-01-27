import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectNavigation from './ProjectNavigation/ProjectNavigation';
import SimplePagination from './SimplePagination/SimplePagination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProjectNavigation />} />
        <Route path='/scroll' element={<ProjectNavigation />} />
        <Route path='/interval' element={<ProjectNavigation />} />
        <Route path='/simple' element={<SimplePagination />} />
      </Routes>
    </div>
  );
}

export default App;
