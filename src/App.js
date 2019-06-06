import React, {Component} from 'react';
import Map from './Map/Map';
import Header from './Header/Header';
import FilterByType from './Filters/FilterByType';
import RadioInput from './RadioInput';
import EventBox from './EventBox';
import axios from 'axios';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      data: null,
      limit: 'limit=10',
      load_from: '', 
      filter_type: '',
      filter_lang: '',
      eventsByType: [
        {id: 1}
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }
  
  getEvents() {
    axios.get(`http://localhost:3001/api/?${this.state.limit}&${this.state.filter_type}&${this.state.filter_lang}`)
      .then(result => {
        this.setState(state => {
          state.data = result.data;
          return state;
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getEvents()
  }

  handleChange(event) {
    let newFilter = {};
    newFilter[event.target.name] = event.target.value;
    this.setState({
      ...this.state, ...newFilter
   });
     
   }

  componentDidMount() {
    this.getEvents();
  }

  render() {

    const eventsByType = this.state.eventsByType.map((element, index) => {
      return (
        <FilterByType key = {element.id}/>
      )
    })
    
    console.log(this.state)
    if (!this.state.data) {
      return null;
    }
    
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
              <div>
                {this.state.data.map((el, index) => {
                  return(
                    <EventBox
                      key={index}
                      name={el.name.fi}
                      address={el.location.address.street_address}
                      intro={el.description.intro} />
                    )
                  })
                 }
            </div>
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