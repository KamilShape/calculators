import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const PercentageIncrease = (props) => {

  const [formValue, setValue] = useState({
    startValue: '',
    finishValue: '',
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
    let result = Math.round((formValue.startValue * (formValue.finishValue - formValue.startValue)/100)*100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {startValue, finishValue} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Percentage Increase</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Start Value:</p>
            <input type='number' onChange={handleChange} name='startValue' value={startValue} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Finish Value:</p>
            <input type='number' onChange={handleChange} name='finishValue' value={finishValue} className="calculator_input" />
          </div>
         
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Increase</p>
            <div className="calculator_result">{result} % </div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default PercentageIncrease;