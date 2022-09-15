import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const DecimalToRadius = (props) => {

  const [formValue, setValue] = useState({
    value: '',
    unit: 'Radius',
    pi:  3.141592,
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
    if(formValue.unit === 'Degree'){
      result = Math.round((formValue.value*1 * formValue.pi/180)*1000)/1000
      setUnit(()=>{
        return(
           'Radius'
        )
      })
    }
    if(formValue.unit === 'Radius'){
      result = Math.round((formValue.value*1 * 180/formValue.pi)*1000)/1000
      setUnit(()=>{
        return(
           'Degree'
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
        <p className="calculator_title">Decimal To Radius</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Value:</p>
            <input type='number' onChange={handleChange} name='value' value={value} className="calculator_input"/>
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">of</p>
            <select  name='unit' value={unit} className='calculator_input' onChange={handleChange}>
              <option value="Radius">Radius</option>
              <option value="Degree">Degree</option>  
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

export default DecimalToRadius;