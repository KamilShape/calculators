import {Component} from 'react'
import './Start.css'

class  Start extends Component {
  render(){
    return (
      <div className="start">
        <h1 className='start_header'>Welcome on calculators website! Are you ready to calculate your life? </h1>
        <div className="start_icon"><i class="fas fa-smile"></i></div>
      </div>
    );
  }
}

export default Start;
