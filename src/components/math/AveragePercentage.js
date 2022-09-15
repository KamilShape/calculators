import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const AveragePercentage = (props) => {

  const [formValue, setValue] = useState({
    value1: '',
    value2: '',
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
    console.log(formValue.percentage, formValue.number)
  }
  
  const handleResult = () =>{
    let result = Math.round(((parseInt(formValue.value1) + parseInt(formValue.value2))/2)*100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {value1, value2} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Average Percentage</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">1 Value:</p>
            <input type='number' onChange={handleChange} name='value1' value={value1} className="calculator_input" /> %
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">2 Value:</p>
            <input type='number' onChange={handleChange} name='value2'  value={value2} className="calculator_input" /> %
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

export default AveragePercentage;