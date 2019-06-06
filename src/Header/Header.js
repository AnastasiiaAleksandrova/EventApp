import React, { Component } from 'react';
import './Header.css';

const style = {
  width: "100%",
  height: "35%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  filter: "brightness(0.6)",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
}

function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

class Header extends Component {

  constructor (props){
    super(props)
      this.state = {
        number: randomNumber (1, 10),
        // number: 1, // initial value for number that change the name of bg
        current: 0
      }
      this.changeBackground = this.changeBackground.bind(this)
  }

  changeState = () => {
   let nextActive = undefined;
   do {
     nextActive = randomNumber (1, 11);
   } while (nextActive === this.state.current);

   this.setState({
     number: nextActive,
   })
   console.log(this.state.number);
  }

  changeBackground = () => {
    return {backgroundImage: "url(\"media/bg"+this.state.number+".jpg\")"}
  }

  render() {
    // setTimeout(this.changeState, 5000) // update the header in the loop
    return (
        <header id="Header" style={this.changeBackground()}></header>
    );
  }
}
export default Header;
