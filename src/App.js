import './App.css';
import Profile from './JS/Profile';
import SideNav from './JS/SideNavBar';
import Experience from './JS/Experience';
import Education from './JS/Education';
import Skills from './JS/Skills';
import WeatherForcast from './JS/WeatherForcast/JS/WeatherForcast';

function App() {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className="d-flex">
          <SideNav />
          <div className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px' }}>
            <div id='profile'><Profile /></div>
            <div id='experience'><Experience /></div>
            <div id='education'><Education /></div>
            <div id='skills'><Skills/></div>
            <WeatherForcast/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
