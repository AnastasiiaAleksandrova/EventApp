import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Events map</h1>
      {/*
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>

          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>

          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>

          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>*/}
      </header>

      <div className="menu">
        <div className="filter">
          <button>Category<i class="fas fa-angle-down"></i></button>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          </div>
        <div className="filter">
          <button>date<i class="fas fa-angle-down"></i></button>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          </div>
        <div className="filter">
          <button>smth<i class="fas fa-angle-down"></i></button>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          </div>
        <div className="filter">
        <button>smth<i class="fas fa-angle-down"></i></button>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
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
          i am map
        </div>
      </main>

      <footer>
        i am footer
      </footer>
    </div>
  );
}

export default App;
