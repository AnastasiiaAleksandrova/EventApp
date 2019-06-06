import React, {Component} from 'react';
import './Filter.css';
// const Filter = (props) => {
//   return(
//     <form>
//       <label className="container">Clubs
//         <input type="radio" checked ="checked" name="radio" value="1" />
//         <span class="checkmark"></span>
//       </label>
//       <label className="container">Exhibitions
//         <input type="radio" name="radio" value="2" />
//         <span class="checkmark"></span>
//       </label>
//       <label className="container">Bars
//         <input type="radio" name="radio" value="3" />
//         <span class="checkmark"></span>
//       </label>
//       <label className="container">Free Sluts
//         <input type="radio" name="radio" value="4" />
//         <span class="checkmark"></span>
//       </label>
//     </form>
//   )
// };

class FilterByDate extends Component {
  render() {
    return (
      <form>
        <li>
          <label className="container">
            <input type="radio" name="radio" value="1" />
            2 hours ago
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="container">
            <input type="radio" name="radio" value="2" />
            Yesterday
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="container">
            <input type="radio" name="radio" value="3" />
            Last week
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <label className="container">
            <input type="radio" name="radio" value="4" />
            Last two weeks
            <span className="checkmark"></span>
          </label>
        </li>
      </form>
    );
  }
}

export default FilterByDate;
