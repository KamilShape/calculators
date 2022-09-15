import './Calculator.css'
import { useNavigate } from 'react-router-dom';
import PercentageCalculator from './PercentageCalculator';

function CalculatorWrapper(props)  {
    const Component = props.name
    const navigate = useNavigate()
    return ( 
      <div className = 'calculator' >
        <button className="calculator_close" onClick={()=>navigate(-1)}>X</button>
        <PercentageCalculator/>
      </div>
    );
}

export default CalculatorWrapper;