import React from 'react';
import ReactDOM from 'react-dom';

function myFunc(){
    return <h1>Hello Jun!</h1>
}

//ReactDOM.render(myFunc(), document.getElementById('root'));

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color:"red"}
    }

    render() {
      return <h2>Hi, I am a {this.props.brand} Car with {this.state.color} color!</h2>;
    }
  }

  class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand="Toyota" />
            </div>
        );
    }
}
ReactDOM.render(<Garage />, document.getElementById('root'));

