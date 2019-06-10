import React, {Component} from 'react';
import Map from './Map/Map';

import Header from './Header/Header';
import RadioInput from './RadioInput';
import EventBox from './EventBox';
import axios from 'axios';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      markers: [],
      data: null,
      limit: 'limit=200',
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
      markers: [],
      ...this.state, ...newFilter
    });
  }

  componentDidMount() {
    this.getEvents();

  }

  render() {

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
              <div className='sub-menu'>
              <form>
                <div id='innerFormWrapper'>
                  <div>
                    <label>By type </label>
                    <li>
                      <label className="container">
                        <RadioInput type="radio" name="filter_type" value="tags_search=Teatteri" onChange={this.handleChange}/>
                        Teatteri
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <RadioInput type="radio" name="filter_type" value="tags_search=music" onChange={this.handleChange}/>
                        Music
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <input type="radio" name="radio" value="1" />
                        Exhibitions
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <input type="radio" name="radio" value="2" />
                        Bars
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <input type="radio" name="radio" value="3" />
                        Casino
                        <span className="checkmark"></span>

                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <input type="radio" name="radio" value="4" />
                        Cheap Sluts
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </div>
                  <div>
                  <label>By language</label>
                    <li>
                      <label className="container">
                        <RadioInput type="radio" name="filter_lang" value="language_filter=sv" onChange={this.handleChange} />
                        Swedish
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <RadioInput name="filter_lang" value="language_filter=fi" onChange={this.handleChange} />
                        Finnish
                        <span className="checkmark"></span>
                      </label>
                    </li>
                    <li>
                      <label className="container">
                        <RadioInput type="radio" name="filter_lang" value="language_filter=en" onChange={this.handleChange} />
                        English
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  </div>
                </div>
                <button onClick={this.handleSubmit}>Apply</button>
                </form>
              </div>
            </li>
          </ul>

          <div className='newMapHolder'>
          <div></div> {/*if u delete this div, lists of event will not be shown*/}

            {this.state.data.map((el, index) => {
              //console.log(el.location.lat);
              //console.log(el.location.lon);
              this.state.markers.push(el.location);
              console.log(this.state.markers); /*need to find a way to reset this array after each filtering*/
                }
              )
            }
           <Map markers={this.state.markers} />
          </div>
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
                      postcode={el.location.address.postal_code}
                      city={el.location.address.locality}
                      intro={el.description.intro}
                      image={el.img}
                      date={el.dates.slice(0,10).split("-").reverse().join("/")}
                      time={el.dates.slice(11,16).split("-").reverse().join("/")} />
                    )
                  })
                 }
              </div>
            </div>

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
