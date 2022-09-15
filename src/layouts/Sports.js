import {React} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom'
import BMI from '../components/sport/BMI'
import OneRepMax from '../components/sport/OneRepMax'
import Wilks from '../components/sport/Wilks'
import HeartRate from '../components/sport/HeartRate'
import CalcButton from '../components/CalcButton'
import './style.css'

const buttons = [
  {
    id: 1,
    name: 'BMI',
    picture: 'fas fa-male',
    componentName: 'bmi',
    elementName: <BMI/>
  },
  {
    id: 2,
    name: 'Heart Rate',
    picture: 'fas fa-heart',
    componentName: 'heartrate',
    elementName: <HeartRate/>
  },
  {
    id: 3,
    name: 'One Rep Max',
    picture: 'fas fa-weight-hanging',
    componentName: 'onerepmax',
    elementName: <OneRepMax/>
  },
  {
    id: 4,
    name: 'Wilks Calculator',
    picture: 'fas fa-dumbbell',
    componentName: 'wilks',
    elementName: <Wilks/>
  },

]
function Math() {
    const filteredButtons = buttons.map(button => {
      return <Link to={button.componentName} key={button.id}><CalcButton key={button.id} name={button.name} picture={button.picture} /></Link>
    })
    const filteredRoutes = buttons.map(button => {
      return <Route path={button.componentName}  element={button.elementName}></Route>
    })
    return (
      <div className="sport">
        <h1 className="header">Sport Calculators</h1>
        <div className="container">
        {filteredButtons}
          <Routes>
            {filteredRoutes}
          </Routes>
        </div>
      </div>
    );
}
export default Math;
