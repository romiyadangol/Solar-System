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
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  handleClickMultiply = () => {
    this.setState({
      counter: this.state.counter * 2,
    })
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
            <img src={Pointer} onClick={this.handleClickMultiply} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
