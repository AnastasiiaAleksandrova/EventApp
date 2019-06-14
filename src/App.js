import React, {Component} from 'react';
import MapContainer from './Map/MapContainer';
import Header from './Header/Header';
import RadioInput from './RadioInput';
import EventBox from './EventBox';
import axios from 'axios';

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
     data: null,
     limit: 10,
     start: 0,
     filter_type: '',
     filter_lang: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getPins = this.getPins.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  getEvents() {
    axios.get(`http://localhost:3001/api/?limit=${this.state.limit}&${this.state.filter_type}&${this.state.filter_lang}`)
    .then(result => {
      this.setState(state => {
        state.data = result.data;
        state.start = this.state.data.length + 1;
        return state;
      });
    });
    console.log(this.state)
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
    document.documentElement.scrollTop = 0;
    console.log(this.state);
  }

  handleChange(event) {
    let newFilter = {};

    newFilter[event.target.name] = event.target.value;
    this.setState({
      ...this.state, ...newFilter, ...{start: 0}
    });
    console.log(this.state);
  }

  handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('load data')
      axios.get(`http://localhost:3001/api/?limit=${this.state.limit}&start=${this.state.start}&${this.state.filter_type}&${this.state.filter_lang}`)
        .then(result => {
          this.setState(state => {
            state.data = [ ...this.state.data, ...result.data];
            state.start = this.state.data.length + 1;
            return state;
          });
        });
        console.log(this.state);
    }
  }

  componentDidMount() {
    this.getEvents();
    this.getPins();
    window.addEventListener('scroll', this.handleScroll)
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
        <nav>
          <ul className='main-menu'>
            <li className='main-menu-element'>Events
              <div className='sub-menu'>
                <form>
                    <div className='by-type'>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_type' value='tags_search=Teatteri' onChange={this.handleChange}/>
                          <span>Perfomances</span>
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
                          <input type='radio' name='filter_type' value='tags_search=families' onChange={this.handleChange}/>
                          <span>Families</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=games' onChange={this.handleChange}/>
                          <span>Games</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=sports' onChange={this.handleChange}/>
                          <span>Sports</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=dance' onChange={this.handleChange}/>
                          <span>Dance</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=families' onChange={this.handleChange}/>
                          <span>Families</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=exhibitions' onChange={this.handleChange}/>
                          <span>Exhibitions</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=architecture' onChange={this.handleChange}/>
                          <span>Architecture</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <input type='radio' name='filter_type' value='tags_search=museums' onChange={this.handleChange}/>
                          <span>Museums</span>
                        </label>
                      </li>

                    </div>
                    <div className='by-language-header'>
                      <i className="fas fa-language"></i>
                    </div>
                    <div className='by-language'>
                      <li>
                        <label className='filter-button'>
                          <RadioInput name='filter_lang' value='language_filter=fi' onChange={this.handleChange} />
                          <span>Suomi</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_lang' value='language_filter=sv' onChange={this.handleChange} />
                          <span>Svenska</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_lang' value='language_filter=en' onChange={this.handleChange} />
                          <span>English</span>
                        </label>
                      </li>
                      <li>
                        <label className='filter-button'>
                          <RadioInput type='radio' name='filter_lang' value='language_filter=ru' onChange={this.handleChange} />
                          <span>Русский</span>
                        </label>
                      </li>
                    </div>
                  <button id='apply-filter' onClick={this.handleSubmit}>Apply</button>
                </form>
              </div>
            </li>
          </ul>
        </nav>
        <div className='map-events-holder'>
          <article>
          {this.state.data.map((el, index) => {
        if (el.dates) {
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
                      time={el.dates.slice(11,16).split("-").reverse().join("/")}
                      url={el.url}
                      />
            )
        } else {
          return(
            <EventBox
                      key={index}
                      name={el.name.fi}
                      address={el.location.address.street_address}
                      postcode={el.location.address.postal_code}
                      city={el.location.address.locality}
                      intro={el.description.intro}
                      image={el.img}
                      url={el.url}
                       />
            )
        }

        })
       }
       </article>

          <div id='map-holder'>
            <aside className='sticky'>
            <MapContainer style={{height: '94vh'}}  events={this.state.data} />
            </aside>
          </div>
        </div>
        <footer>
          <ul className='footer-menu'>
            <li className = 'footer-menu-element'>
              About
            </li>
            <li className = 'footer-menu-element'>
              Contact Us
            </li>
            <li className = 'footer-menu-element last'>
              Disclaimer
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default App;
