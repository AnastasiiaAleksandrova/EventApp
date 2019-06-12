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

    console.log(this.state)
    if (!this.state.data) {
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
                          <RadioInput type='radio' name='filter_type' value='tags_search=teatteri' onChange={this.handleChange}/>
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
              intro={el.description.intro}
              image={el.img} />
            )
          })
         }
         </article>
         <div id='mapHolder'>
          <aside class='sticky'>
            <Map />
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
