import React from 'react';
import './App.css';
import Map from './Map/Map';


require('dotenv').config();

import AnyReactComponent from './Map/Map'





function App() {
  return (
    <div className="App">


<Map />

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
