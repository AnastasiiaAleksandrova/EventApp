import React, {Component} from 'react';
import Map from './Map/Map';
import Header from './Header/Header';
import FilterByType from './Filters/FilterByType';
import FilterByDate from './Filters/FilterByDate';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      eventsByType: [
        {id: 1},
      ],
      eventsByDate: [
        {id: 1},
      ],
    }
  }

  render() {

    const eventsByType = this.state.eventsByType.map((element, index) => {
      return (
        <FilterByType key = {element.id}/>
      )
    })

    const eventsByDate = this.state.eventsByDate.map((element, index) => {
      return (
        <FilterByDate key = {element.id}/>
      )
    })

    return (
      <div className='App'>
        <Header />
        <div id='logo-holder'>
          <h1 id='logo'><span>in</span>HELSINKI</h1>
          <p id='sub-logo'>ESSENTIAL CITY GUIDE</p>
        </div>
        <nav>
          <ul className='main-menu'>
            <li className = 'mainMenuElement'>Events by type

                {eventsByType}
                
            </li>
            {/*<li className = 'mainMenuElement'>Events by date
              <ul class='sub-menu'>
                {eventsByDate}
              </ul>
            </li>*/}
          </ul>
        </nav>
        <main>
          <div id='grid'>
            <div className='side-events'>
            </div>
            <div className='map-events'>
              <Map />
            </div>
            {/*<div className='side-events'>
            </div> */}
          </div>
        </main>
        <footer>
          dfgdfgdgdfgdfgdfgdfgdfgdfgdfgdf
        </footer>
      </div>
    );
  }
}

export default App;
