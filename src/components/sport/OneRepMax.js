import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const KmToM = () => {

  const [formValue, setValue] = useState({
    squatRatio: [1.00, 1.0475, 1.13, 1.1575, 1.2,1.242,1.284,1.326,1.368,1.41],
    deadliftRatio: [1.00, 1.065, 1.13, 1.147, 1.164,1.181,1.198,1.22,1.232,1.24],
    benchRatio: [1.00, 1.035, 1.08, 1.115, 1.15,1.18,1.22,1.255,1.29,1.235],
    excercise: 'Squat',
    weight: '',
    reps: 1
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
    let result = 0
    if(formValue.excercise === 'Squat'){
      result = formValue.weight*[formValue.reps - 1]*(1+(formValue.reps/30))
      setResult(()=>{
        return(
          result
        )
      })
    }
    if(formValue.excercise === 'Deadlift'){
      result = formValue.weight*[formValue.reps - 1]*(1+(formValue.reps/30))
      setResult(()=>{
        return(
          result
        )
      })
    }
    if(formValue.excercise === 'BenchPress'){
      result = formValue.weight*[formValue.reps - 1]*(1+(formValue.reps/30))
      setResult(()=>{
        return(
          result
        )
      })
    }
  
  }
  
  const {excercise, weight, reps} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">One Rep Max</p>
        <div className="calculator_container">
        <div className="calculator_input-container">
            <p className="calculator_input-tittle">Excercise: </p>
            <select  name='excercise' value={excercise} className='calculator_input' onChange={handleChange}>
              <option value="Squat">Squat</option>
              <option value="Deadlift">Deadlift</option>  
              <option value="BenchPress">Bench Press</option>  
              {excercise}
            </select>
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Weight:</p>
            <input type='number' onChange={handleChange} name='weight' value={weight} className="calculator_input"/>
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Reps: </p>
            <select  name='reps' value={reps} className='calculator_input' onChange={handleChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
  
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

export default KmToM;