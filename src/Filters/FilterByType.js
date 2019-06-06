import React, {Component} from 'react';
import './Filter.css';
/*import './RadioInput/RadioInput';*/

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

class FilterByType extends Component {
  render() {
    return (
      <div class='sub-menu'>
      <form>
        <div id='innerFormWrapper'>
          <div>
            <label>By type </label>
              <li>
                <label className="container">
                  {/*<RadioInput name="filter_type" value="tags_search=Teatteri" onChange={this.handleChange}/>*/}
                  <input type="radio" name="filter_type" value="tags_search=Teatteri" onChange={this.handleChange}/>
                  Teatteri
                  <span class="checkmark"></span>
                </label>
              </li>
          <li>
            <label className="container">
              {/*<RadioInput name="filter_type" value="tags_search=music" onChange={this.handleChange}/>*/}
              <input type="radio"  name="filter_type" value="tags_search=music" onChange={this.handleChange}/>
              Music
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input type="radio" name="radio" value="1" />
              Exhibitions
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input type="radio" name="radio" value="2" />
              Bars
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input type="radio" name="radio" value="3" />
              Casino
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              <input type="radio" name="radio" value="4" />
              Cheap Sluts
              <span class="checkmark"></span>
            </label>
          </li>
        </div>
        <div>
        <label>By language</label>
          <li>
            <label className="container">
              {/*<RadioInput name="filter_lang" value="language_filter=sv" onChange={this.handleChange} />*/}
              <input type="radio" name="filter_lang" value="language_filter=sv" onChange={this.handleChange} />
              Swedish
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              {/*<RadioInput name="filter_lang" value="language_filter=fi" onChange={this.handleChange} />*/}
              <input type="radio" name="filter_lang" value="language_filter=fi" onChange={this.handleChange} />
              Finnish
              <span class="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              {/*<RadioInput name="filter_lang" value="language_filter=en" onChange={this.handleChange} />*/}
              <input type="radio" name="filter_lang" value="language_filter=en" onChange={this.handleChange} />
              English
              <span class="checkmark"></span>
            </label>
          </li>
        </div>
        </div>
        <button onClick={this.handleSubmit}>Apply</button>
        </form>
      </div>

    );
  }
}

export default FilterByType;
