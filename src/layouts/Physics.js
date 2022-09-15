import {React} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom'
import Acceleration from '../components/physics/Acceleration'
import ForceCalculator from '../components/physics/ForceCalculator'
import Momentum from '../components/physics/Momentum'
import TemperatureConverter from '../components/physics/TemperatureConverter'
import CalcButton from '../components/CalcButton'
import './style.css'

const buttons = [
  {
    id: 1,
    name: 'Acceleration',
    picture: 'fas fa-fast-forward',
    componentName: 'acceleration',
    elementName: <Acceleration/>
  },
  {
    id: 2,
    name: 'Force Calculator',
    picture: 'fas fa-bacon',
    componentName: 'forcecalculator',
    elementName: <ForceCalculator/>
  },
  {
    id: 3,
    name: 'Temperature Converter',
    picture: 'fas fa-thermometer-half',
    componentName: 'temperatureconverter',
    elementName: <TemperatureConverter/>
  },
  {
    id: 4,
    name: 'Momentum',
    picture: 'fas fa-circle',
    componentName: 'momentum',
    elementName: <Momentum/>
  },
]


function Physics() {
  
   
    const filteredButtons = buttons.map(button => {
      return <Link to={button.componentName} key={button.id}><CalcButton key={button.id} name={button.name} picture={button.picture} /></Link>
    })
    const filteredRoutes = buttons.map(button => {
      return <Route path={button.componentName}  element={button.elementName}></Route>
    })

    return (
      <div className="math">
        <h1 className="header">Physics Calculators</h1>
        <div className="container">
        {filteredButtons}
          <Routes>
            {filteredRoutes}
          </Routes>
        </div>
      </div>
    );
  
}

export default Physics;