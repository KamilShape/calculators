import  {useState} from 'react'
import './Calculator.css'
import { useNavigate } from 'react-router-dom';
const Wilks = (props) => {

  const [formValue, setValue] = useState({
    sex: 'man',
    weight: '',
    total: ''

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
    let weight = parseInt(formValue.weight)
      let total = parseInt(formValue.total)
    if(formValue.sex == 'man'){
      let a = 	-216.0475144
      let b =   16.2606339
      let c =   -0.002388645
      let d =   -0.00113732
      let e =   7.01863 * Math.pow(10, -6)
      let f =   -1.291 * Math.pow(10, -8)
      let coeff = 500/(a + b*weight + c*Math.pow(weight,2) + d*Math.pow(weight,3) + e*Math.pow(weight,4) + f*Math.pow(weight,5))
      let result = total * coeff
      console.log(coeff, formValue.weight, formValue.total, weight,total)
      setResult(()=>{
        return(
          result
        )
      })
    }
    if(formValue.sex == 'woman'){      
      let a = 	594.31747775582
      let b =   -27.23842536447
      let c =   0.82112226871
      let d =   -0.00930733913
      let e =   4.731582 * Math.pow(10, -5)
      let f =   -9.054 * Math.pow(10, -8)
      let coeff = 500/(a + b*weight + c*Math.pow(weight,2) + d*Math.pow(weight,3) + e*Math.pow(weight,4) + f*Math.pow(weight,5))
      let result = total * coeff
      console.log(coeff, formValue.weight, formValue.total, weight,total)
      setResult(()=>{
        return(
          result
        )
      })
    }
  }
  
  const {sex,weight, total} = formValue
  
    return (
      <div className="calculator">
      <div className="calculator_wrapper">
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <p className="calculator_title">Wilks formula</p>
        <div className="calculator_container">
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Weight[kg]:</p>
            <input type='number' onChange={handleChange} name='weight' value={weight} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Total[kg]:</p>
            <input type='number' onChange={handleChange} name='total'  value={total} className="calculator_input" />
          </div>
          <div className="calculator_input-container">
            <p className="calculator_input-tittle">Sex:</p>
            <select  name='sex' value={sex} className='calculator_input' onChange={handleChange}>
              <option value="man">Man</option>
              <option value="woman">Woman</option>  
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

export default Wilks;