import React from 'react';
import './App.css';
import Map from './Map/Map';
<<<<<<< HEAD
import AnyReactComponent from './Map/Map'
=======


>>>>>>> 617868d1d1e83f17c7347ff918ff04a7c1da04df
require('dotenv').config();








function App() {
  return (
    <div className="App">

<<<<<<< HEAD
=======

<Map />

>>>>>>> 617868d1d1e83f17c7347ff918ff04a7c1da04df
      <header>
        <h1>Events map</h1>
      </header>
      <div className="menu">
        <div className="filter">
          <button>Category <i class="fas fa-angle-down"></i></button>
          <ul>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
          </ul>
          </div>
        <div className="filter">
          <button>date <i class="fas fa-angle-down"></i></button>
          <ul>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
            <li><input type="checkbox" name="vehicle" value="1" />test</li>
          </ul>
          </div>
        <div className="filter">
          <button>smth <i class="fas fa-angle-down"></i></button>
          <ul>
            <li><input type="checkbox" name="#" value="1" />test</li>
            <li><input type="checkbox" name="#" value="1" />test</li>
            <li><input type="checkbox" name="#" value="1" />test</li>
          </ul>
          </div>
        <div className="filter">
        <button>smth <i class="fas fa-angle-down"></i></button>
        <ul>
          <li><input type="checkbox" name="#" value="1" />test</li>
          <li><input type="checkbox" name="#" value="1" />test</li>
          <li><input type="checkbox" name="#" value="1" />test</li>
        </ul>
        </div>
      </div>

      <main>
        <div className="side-events">
        <div>
          I am image
        </div>
          I am image
        </div>
        <div className="map-events">
          <Map />
        </div>
      </main>

      <footer>
        i am footer
      </footer>


    </div>
  );
}

export default App;
