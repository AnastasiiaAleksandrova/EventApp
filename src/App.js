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
        <Header />
        <div id='logo-holder'>
          <h1 id='logo'><span>in</span>Helsinki</h1>
          <p id='sub-logo'>Esential City Guide</p>
        </div>
        <nav>
          <ul className='main-menu'>
            <li className = 'mainMenuElement'>Events
              <div className='sub-menu'>
                <form>
                  <div id='innerFormWrapper'>
                    <div>
                    <label>By type </label>
                      <li>
                        <label className="container">
                          <RadioInput type="radio" name="filter_type" value="tags_search=Teatteri" onChange={this.handleChange}/>
                          Teatteri
                          </label>
                      </li>
                      <li>
                        <label className="container">
                          <RadioInput type="radio" name="filter_type" value="tags_search=music" onChange={this.handleChange}/>
                          Music
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <input type="radio" name="radio" value="1" />
                          Exhibitions
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <input type="radio" name="radio" value="2" />
                          Bars
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <input type="radio" name="radio" value="3" />
                          Casino
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <input type="radio" name="radio" value="4" />
                          Cheap Sluts
                        </label>
                      </li>
                    </div>
                    <div>
                    <label>By language</label>
                      <li>
                        <label className="container">
                          <RadioInput type="radio" name="filter_lang" value="language_filter=sv" onChange={this.handleChange} />
                          Swedish
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <RadioInput name="filter_lang" value="language_filter=fi" onChange={this.handleChange} />
                          Finnish
                        </label>
                      </li>
                      <li>
                        <label className="container">
                          <RadioInput type="radio" name="filter_lang" value="language_filter=en" onChange={this.handleChange} />
                          English
                        </label>
                      </li>
                    </div>
                  </div>
                  <button onClick={this.handleSubmit}>Apply</button>
                </form>
              </div>
            </li>
            <li className = 'mainMenuElement'>
              Places
            </li>
            <li className = 'mainMenuElement'>
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
         <div id="mapHolder">
          <aside class="sticky">
            <Map />
          </aside>
        </div>
        <footer>
          <ul className='main-menu'>
            <li className = 'mainMenuElement'>
              About
            </li>
            <li className = 'mainMenuElement'>
              Contact Us
            </li>
            <li className = 'mainMenuElement'>
              Disclaimer
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default App;
