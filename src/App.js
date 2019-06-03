import React, {Component} from 'react';
import './App.css';
import Map from './Map/Map';
import EventBox from './EventBox.js';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents() {
    axios.get(`http://localhost:3001/api`)
    .then(response => {
      this.setState({data: response.data});
      console.log(this.state.data);
     })
     .catch(err => console.log('React screwed up! ' + err));
  }

  handleSubmit(event) {
   event.preventDefault();
   this.getEvents();
 }

 componentDidMount() {
   this.getEvents();
 }

  render() {
    if (!this.state.data) {
      return null;
    }

    return (
      <div className="App">
      <main>
        <button onClick={this.handleSubmit}>GO!</button>
          <div>
            {this.state.data.map((el, index) => {
              return(
                <EventBox key={index} name={el.name} description={el.description} />
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
