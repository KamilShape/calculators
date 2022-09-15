import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const PercentageCalculator = (props) => {

  const [formValue, setValue] = useState({
    percentage: '',
    number: '',
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
    let result = formValue.percentage*0.01 * formValue.number
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {percentage, number} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Percentage Calculator</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">What is [%]:</p>
            <input type='number' onChange={handleChange} name='percentage' value={percentage} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">of</p>
            <input type='number' onChange={handleChange} name='number'  value={number} className="calculator_input" />
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

export default PercentageCalculator;