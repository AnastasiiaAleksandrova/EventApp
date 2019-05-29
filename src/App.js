import React, {Component} from 'react';
import './App.css';
import Map from './Map/Map';
import AnyReactComponent from './Map/Map'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleSubmit(event) {
   event.preventDefault();
   fetch(`http://localhost:3001/api/greeting?name=${encodeURIComponent(this.state.name)}`)
     .then(response => response.json())
     .then(state => this.setState(state));

 }

  render() {
  return (

    <div className="App">

     <header>
       <h1>Events map</h1>
     </header>
     <div className="menu">
       <div className="filter">
         <button>Category <i class="fas fa-angle-down"></i></button>
         <ul>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
         </ul>
         </div>
       <div className="filter">
         <button>date <i class="fas fa-angle-down"></i></button>
         <ul>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
           <li><input type="checkbox" name="vehicle" value="1" />test</li>
         </ul>
         </div>
       <div className="filter">
         <button>smth <i class="fas fa-angle-down"></i></button>
         <ul>
           <li><input type="checkbox" name="#" value="1" />test</li>
           <li><input type="checkbox" name="#" value="1" />test</li>
           <li><input type="checkbox" name="#" value="1" />test</li>
         </ul>
         </div>
       <div className="filter">
       <button>smth <i class="fas fa-angle-down"></i></button>
       <ul>
         <li><input type="checkbox" name="#" value="1" />test</li>
         <li><input type="checkbox" name="#" value="1" />test</li>
         <li><input type="checkbox" name="#" value="1" />test</li>
       </ul>
       </div>
     </div>

     <main>
       <div className="side-events">
       <div className="Testing">

           <form onSubmit={this.handleSubmit}>
             <label htmlFor="name">Enter your name: </label>
             <input
               id="name"
               type="text"
               value={this.state.name}
               onChange={this.handleChange}
             />

             <button type="submit">Submit</button>
           </form>

           <p>{this.state.greeting}</p>


       </div>
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
