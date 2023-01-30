import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProjectNavigation from './ProjectNavigation/ProjectNavigation';
import ScrollPagination from './ScrollPagination/ScrollPagination';
import SimplePagination from './SimplePagination/SimplePagination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProjectNavigation />} />
        <Route path='/scroll' element={<ScrollPagination />} />
        <Route path='/interval' element={<ProjectNavigation />} />
        <Route path='/simple/:id' element={<SimplePagination />} />
      </Routes>
    </div>
  );
}

export default App;
