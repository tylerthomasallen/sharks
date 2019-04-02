import React from 'react';
import Video from './video';
import Title from './title';
import Navbar from './navbar';
import Tournament from './tournament';

const App = () => {
  return(
    <div className="parent">
      <Navbar />
      <Title />
      <Video />
      <Tournament />
    </div>
  );
}

export default App;