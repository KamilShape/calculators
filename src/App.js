import {React,Component} from 'react'
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom'
import './App.css';
import StartButton from './components/StartButton'
import Start from './layouts/Start'
import Math from './layouts/Math'
import Physics from './layouts/Physics'
import Sports from './layouts/Sports'
class App extends Component {
  state ={
    displayButtons: false
  }
  changeVisibility = (arg) => {
   if(arg === 'start'){
     this.setState({
      displayButtons: false
     })
   } else{
    this.setState({
      displayButtons: true
     })
   }
   console.log(arg)
  }
  render(){
    return (
      <div className="app">
        <Router>
          <div className='app_nav'>
            <div className='app_link' onClick={()=>this.changeVisibility('buttons')}><NavLink to="calculators/"><StartButton name='Start' picture='fas fa-play-circle'/></NavLink> </div>
            <div className='app_link' onClick={()=>this.changeVisibility('buttons')}><NavLink to="calculators/math"><StartButton name='Math' picture='fas fa-calculator'/></NavLink> </div>
            <div className='app_link' onClick={()=>this.changeVisibility('buttons')}><NavLink to="calculators/health"><StartButton name='Physics' picture='fas fa-brain'/></NavLink></div>
            <div className='app_link' onClick={()=>this.changeVisibility('buttons')}><NavLink to="calculators/sports"><StartButton name='Sport' picture='fas fa-running'/></NavLink></div>
          </div>
          <Routes>
            <Route path='calculators/'element={<Start/>}/>  
            <Route path='calculators/math/*'element={<Math/>}/>
            <Route path='calculators/health/*'element={<Physics/>}/>
            <Route path='calculators/sports/*' element={<Sports/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
