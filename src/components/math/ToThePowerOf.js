import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const ToThePowerOf = (props) => {

  const [formValue, setValue] = useState({
    number: '',
    power: '',
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
    let result = Math.round(Math.pow(formValue.number, formValue.power)*100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {number, power} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">To the power of</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Number:</p>
            <input type='number' onChange={handleChange} name='number' value={number} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Power:</p>
            <input type='number' onChange={handleChange} name='power'  value={power} className="calculator_input" />
          </div>
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Result</p>
            <div className="calculator_result">{result}</div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default ToThePowerOf;