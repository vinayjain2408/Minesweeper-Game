import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
// import Mineweeper from './Mineweeper/Mineweeper';
import Game from './Game/Game';


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <Game />
  //  <Mineweeper></Mineweeper>
);




