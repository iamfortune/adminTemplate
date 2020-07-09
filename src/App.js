import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import RoutePath from './route/route';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutePath />
      </BrowserRouter>
    </div>
  );
}

export default App;
