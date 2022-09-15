import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const KmToM = () => {

  const [formValue, setValue] = useState({
    value: '',
    unit: 'km/h',
    ratio:  3.6
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
    if(formValue.unit === 'km/h'){
      result = Math.round((formValue.value / formValue.ratio)*1000)/1000
      setUnit(()=>{
        return(
           'm/s'
        )
      })
    }
    if(formValue.unit === 'm/s'){
      result = Math.round((formValue.value * formValue.ratio)*1000)/1000
      setUnit(()=>{
        return(
           'km/h'
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
        <p className="calculator_title">km/h to m/s</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Value:</p>
            <input type='number' onChange={handleChange} name='value' value={value} className="calculator_input"/>
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">of</p>
            <select  name='unit' value={unit} className='calculator_input' onChange={handleChange}>
              <option value="km/h">km/h</option>
              <option value="m/s">m/s</option>  
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