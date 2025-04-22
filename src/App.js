import './App.css';
import Profile from './JS/Profile';
import SideNav from './JS/SideNavBar';
import Experience from './JS/Experience';
import Education from './JS/Education';
import Skills from './JS/Skills';
import WeatherForcast from './JS/WeatherForcast/JS/WeatherForcast';
import Contact from './JS/Contact';

function App() {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className="d-flex">
          <SideNav />
          <div className="main-content">
            <div id='profile'><Profile /></div>
            <div id='experience'><Experience /></div>
            <div id='education'><Education /></div>
            <div id='skills'><Skills/></div>
            <div id='contact'><Contact/></div>
            <WeatherForcast/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
