import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import './App.css';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className='App'>
      <Hero title='Info hero' subtitle='Info subtitle' color='blue' />
      <OurTeamSection />
      <OurServices />
    </div>
  );
}

export default App;
