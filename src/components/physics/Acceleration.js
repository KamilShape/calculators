import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const Acceleration = (props) => {

  const [formValue, setValue] = useState({
    initialspeed: '',
    finalspeed: '',
    time: ''
  })
  const navigate = useNavigate()
  const [result, setResult] = useState(0)

  const handleChange = (e) =>{
    let {name, value} = e.target
    setValue((prevState)=>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleResult = () =>{
    let result = Math.round((formValue.initialspeed*1 + formValue.finalspeed*1)/time *100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {initialspeed, finalspeed, time} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Acceleration</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Initial speed[m/s]:</p>
            <input type='number' onChange={handleChange} name='initialspeed' value={initialspeed} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Final speed[m/s]]</p>
            <input type='number' onChange={handleChange} name='finalspeed'  value={finalspeed} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Time[s]</p>
            <input type='number' onChange={handleChange} name='time'  value={time} className="calculator_input" />
          </div>
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Acceleration</p>
            <div className="calculator_result">{result} m/s^2</div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default Acceleration;