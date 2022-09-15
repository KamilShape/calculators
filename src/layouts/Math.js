import {React} from 'react'
import {BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom'
import PercentageCalculator from '../components/math/PercentageCalculator'
import AveragePercentage from '../components/math/AveragePercentage'
import DecimalToRadius from '../components/math/DecimalToRadius'
import KmToM from '../components/math/KmToM'
import PoundsToKilograms from '../components/math/PoundsToKilograms'
import PercentageIncrease from '../components/math/PercentageIncrease'
import RootCalculator from '../components/math/RootCalculator'
import ToThePowerOf from '../components/math/ToThePowerOf'
import CalcButton from '../components/CalcButton'
import './style.css'

const buttons = [
  {
    id: 1,
    name: 'Percentage Calculator',
    picture: 'fas fa-percentage',
    componentName: 'percentagecalculator',
    elementName: <PercentageCalculator  name={'Percentage Calculator'}/>
  },
  {
    id: 2,
    name: 'Decimal to Radius',
    picture: 'fas fa-circle',
    componentName: 'decimaltoradius',
    elementName: <DecimalToRadius name={'Decimal to Radius'}/>
  },
  {
    id: 3,
    name: 'Percentage Increase',
    picture: 'fas fa-percent',
    componentName: 'percentageincrease',
    elementName: <PercentageIncrease/>
  },
  {
    id: 4,
    name: 'To the power of',
    picture: 'fas fa-superscript',
    componentName: 'tothepowerof',
    elementName: <ToThePowerOf/>
  },
  {
    id: 5,
    name : 'Average Percentage',
    picture: 'fas fa-percent',
    componentName: 'averagepercentage',
    elementName: <AveragePercentage/>
  },
  {
    id: 6,
    name: 'Pounds to kilograms',
    picture: 'fas fa-balance-scale-right',
    componentName: 'poundstokilograms',
    elementName: <PoundsToKilograms/>
  },
  {
    id: 7,
    name: 'Root Calculator',
    picture: 'fas fa-smile',
    componentName: 'rootcalculator',
    elementName: <RootCalculator/>
  },
  {
    id: 8,
    name: 'km/h to m/m',
    picture: 'fas fa-road',
    componentName: 'kmtom',
    elementName: <KmToM/>
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
      <div className="math">
        <h1 className="header">Math Calculators</h1>
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
