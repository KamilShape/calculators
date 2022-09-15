import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const Acceleration = (props) => {

  const [formValue, setValue] = useState({
    mass: '',
    acceleration: '',
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
    let result = Math.round(formValue.mass * formValue.acceleration*100)/100
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {mass, acceleration} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Force Calculator</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Mass[kg]:</p>
            <input type='number' onChange={handleChange} name='mass' value={mass} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Acceleration [m/s]</p>
            <input type='number' onChange={handleChange} name='acceleration'  value={acceleration} className="calculator_input" />
          </div>
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Force</p>
            <div className="calculator_result">{result} N</div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default Acceleration;