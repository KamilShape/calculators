import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const ToThePowerOf = (props) => {

  const [formValue, setValue] = useState({
    age: '',

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
    let result = (Math.round(192 - 0.007 * Math.pow(formValue.age, 2))*100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {age} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Heart Rate Calculator</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Age:</p>
            <input type='number' onChange={handleChange} name='age' value={age} className="calculator_input" />
          </div>
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Max</p>
            <div className="calculator_result">{result}</div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default ToThePowerOf;