import React from 'react';
import Video from './video';
import Title from './title';
import Navbar from './navbar';

const App = () => {
  return(
    <div className="parent">
      <Navbar />
      <Title />
      <Video />
    </div>
  );
}

export default App;