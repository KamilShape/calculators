import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const BMI = () => {

  const [formValue, setValue] = useState({
    weight: '',
    height: '',
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
    let result = Math.round(formValue.weight*1/Math.pow(formValue.height/100, 2)*100)/100
    console.log(typeof formValue.weight)
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {weight, height} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">BMI Calculator</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Weight [kg]:</p>
            <input type='number' onChange={handleChange} name='weight' value={weight} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Height [cm]:</p>
            <input type='number' onChange={handleChange} name='height'  value={height} className="calculator_input" />
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

export default BMI;