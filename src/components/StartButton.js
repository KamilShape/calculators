import {Component} from 'react'
import './StartButton.css'
class StartButton extends Component {
  render(){
    return (
      <div className="startButton">
        <span className="startButton_picture"><i className={this.props.picture}></i></span><span className='startButton_name'>{this.props.name}</span>
      </div>
    );
  }
}

export default StartButton;