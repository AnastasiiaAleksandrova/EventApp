import React, {Component} from 'react';
import './App.css';
import Map from './Map/Map';
import EventBox from './EventBox.js';
import RadioInput from './RadioInput.js';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      limit: 'limit=10',
      load_from: '', 
      filter_type: '',
      filter_lang: ''
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
      <div className="App">
        <main>
          <form>
            
            <RadioInput name="filter_type" value="tags_search=Teatteri" onChange={this.handleChange} />Teatteri<br/>
            <RadioInput name="filter_type" value="tags_search=music" onChange={this.handleChange} />Music<br/>
            
            
            <RadioInput name="filter_lang" value="language_filter=sv" onChange={this.handleChange} />Swedish<br/>
            <RadioInput name="filter_lang" value="language_filter=en" onChange={this.handleChange} />English<br/>
            <RadioInput name="filter_lang" value="language_filter=fi" onChange={this.handleChange} />Finnish<br/>
            
            
            
            <button onClick={this.handleSubmit}>GO!</button>
          </form>
          <div>
            {this.state.data.map((el, index) => {
              return(
                  <EventBox
                    key={index}
                    name={el.name.fi}
                    address={el.location.address.street_address}
                    intro={el.description.intro} />
              )
            }) }
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
}
export default App;
