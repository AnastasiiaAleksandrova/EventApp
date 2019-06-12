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
     data: null,
     limit: 'limit=20',
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

  getPins() {
    axios.get(`http://localhost:3001/api/pins/?${this.state.filter_type}&${this.state.filter_lang}`)
    .then(result => {
      this.setState(state => {
        state.pins = result.data;
        return state;
      });
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    this.getEvents();
    this.getPins();
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
 this.getPins();
  }

  render() {

    if (!this.state.data || !this.state.pins){
      return null;
    }

    return (
      <div className='App'>
      <div className='header-holder'>
        <Header />
        <div id='logo-holder'>
          <h1 id='logo'><span>in</span>Helsinki</h1>
          <p id='sub-logo'>Esential City Guide</p>
        </div>
        </div>
        <div className='map-events-holder'>
        <nav>
          <ul className='main-menu'>
            <li className='main-menu-element'>Events
              <div className='sub-menu'>
                <form>
                  <div className='by-type-header'>
                    By type
                  </div>
                    <div className='by-type'>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_type' value='tags_search=Teatteri' onChange={this.handleChange}/>
                          <span>Teatteri</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_type' value='tags_search=music' onChange={this.handleChange}/>
                          <span>Music</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='radio' value='' />
                          <span>Exhibitions</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='radio' value='' />
                          <span>Bars</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='radio' value='' />
                          <span>Casino</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='radio' value='' />
                          <span>Cheap Sluts</span>
                        </label>
                      </li>
                    </div>
                    <div className='by-language-header'>
                      By language
                    </div>
                    <div className='by-language'>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_lang' value='language_filter=sv' onChange={this.handleChange} />
                          <span>Swedish</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput name='filter_lang' value='language_filter=fi' onChange={this.handleChange} />
                          <span>Finnish</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_lang' value='language_filter=en' onChange={this.handleChange} />
                          <span>English</span>
                        </label>
                      </li>
                    </div>
                  <button onClick={this.handleSubmit}>Apply</button>
                </form>
              </div>
            </li>
            <li className = 'main-menu-element'>
              Places
            </li>
            <li className = 'main-menu-element'>
              Activities
            </li>
          </ul>
        </nav>
        <article>
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
                      date={el.dates.slice(0,10).split("-").reverse().join(".")}
                      time={el.dates.slice(11,16).split("-").reverse().join("/")} />
            )
          })
         }
         </article>
         <div id='mapHolder'>
          <aside class='sticky'>
            <Map events={this.state.pins} />
          </aside>
        </div>
        <footer>
          <ul className='main-menu'>
            <li className = 'main-menu-element'>
              About
            </li>
            <li className = 'main-menu-element'>
              Contact Us
            </li>
            <li className = 'main-menu-element'>
              Disclaimer
            </li>
          </ul>
        </footer>
      </div>
      </div>
    );
  }
}
export default App;
