import React from 'react'
import './App.css'
import Sun from './assets/images/sun.png';
import Background from './assets/images/background.jpg';
import Pointer from './assets/images/pointer.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isMultiplierActive: false,
      multiplierCost: 100,
    };
  }

  handleClick = () => {
    if (this.state.isMultiplierActive) {
      this.setState({
        counter: this.state.counter * 2, // Double the counter if Multiply button is clicked
      });
    } 
    else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }

  handleClickMultiply = () => {
    console.log('Counter:', this.state.counter);
    console.log('Multiplier Cost:', this.state.multiplierCost);

    if (this.state.counter >= this.state.multiplierCost) { // Check if player has enough energy to buy the multiplier
      console.log('Buying multiplier!');
        this.setState({
          isMultiplierActive: true,
          counter: this.state.counter - this.state.multiplierCost, // Deduct the cost of the multiplier
          multiplierCost: this.state.multiplierCost * 2, // Double the cost of the next multiplier
      });
      alert('Item purchased!');
    } 
    else {
      console.log('Insufficient energy to buy multiplier!');
      alert('Insufficient energy to buy multiplier!');
    }
  }


  render() {
    return (
      <div>
        <div className="background-container">
          <img src={Background} className='bg' alt="Background" />
          <div className="container">
            <h1>Solar Energy : {this.state.counter}</h1>
            <div className="img-wrapper">
              <img src={Sun} className='sun-image' onClick={this.handleClick} alt="Sun" />
            </div>
          </div>
        </div>

        <div className="store">
          <h1>Shop</h1>
          <div className="multiply">
            <button type='button' className='upgrade'>
            <img src={Pointer} className="upgrade-clicks-icon" onClick={this.handleClickMultiply} />
            <div className="name">
              <h2>Multiple</h2>
              <p>Cost: {this.state.multiplierCost} SE</p>
            </div>
            </button>
          </div>
        </div>

        <div className="planet">
          <button type="button" className='upgrade' onClick={this.handleBuyPlanet}>

          </button>
        </div>

      </div>
    );
  }
}

export default App;
