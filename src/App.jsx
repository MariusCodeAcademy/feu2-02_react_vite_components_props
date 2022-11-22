import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import './App.css';
import Hero from './components/hero/Hero';
import Button from './components/UI/Button';

function App() {
  return (
    <div className='App'>
      <Hero title='Info hero' subtitle='Info subtitle' color='blue' />
      <Button title='increment'>Subscibe here</Button>
      <button>pavadinimas</button>
      <OurTeamSection />
      <OurServices />
    </div>
  );
}

export default App;
