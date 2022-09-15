import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const KmToM = () => {

  const [formValue, setValue] = useState({
    value: '',
    unit: '°',
  })
  const navigate = useNavigate()
  const [result, setResult] = useState(0)
  const [resultUnit, setUnit] = useState('')

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
    let result = 0
    if(formValue.unit === '°'){
      result = Math.round((formValue.value * 9/5 + 32)*1000)/1000
      setUnit(()=>{
        return(
           'F'
        )
      })
    }
    if(formValue.unit === 'F'){
      result = Math.round(((formValue.value - 32)*5/9)*1000)/1000
      setUnit(()=>{
        return(
           '°'
        )
      })
    }
    setResult(()=>{
      return(
        result
      )
    })
  }
  
  const {value,unit} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Temperature Converter</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Value:</p>
            <input type='number' onChange={handleChange} name='value' value={value} className="calculator_input"/>
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">of</p>
            <select  name='unit' value={unit} className='calculator_input' onChange={handleChange}>
              <option value="°">°</option>
              <option value="F">F</option>  
            </select>
          </div>
          <button className="calculator_button" onClick={handleResult}>Calculate</button>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Result</p>
            <div className="calculator_result">{result} {resultUnit}</div>
          </div>
          </div>
        </div>
        </div>
    );
  
}

export default KmToM;