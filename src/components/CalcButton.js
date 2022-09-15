import {Component} from 'react'
import './CalcButton.css'
class CalcButton extends Component {
  render(){
    return (
      <div className="calcButton">
        <p className="calcButton_picture"><i className={this.props.picture}></i></p>
        <p className="calcButton_name">{this.props.name}</p>
      </div>
    );
  }
}

export default CalcButton;
