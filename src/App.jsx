import './App.css';

function SectionTitle(props) {
  console.log('props ===', props);
  return <h2 className='sectionTitle'>{props.title}</h2>;
}

function Icon(props) {
  return <i className={`fa ${props.iconName}`} aria-hidden='true'></i>;
}

function Grid() {
  return (
    <div className='grid'>
      <h2>
        kortele <Icon iconName='fa-address-book' />
      </h2>
      <h2>
        kortele <Icon iconName='fa-envelope-open' />
      </h2>
      <h2>
        kortele <Icon iconName='fa-meetup' />
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className='App container'>
      <SectionTitle title='Musu paslaugos' size='large' />
      <Grid />
      {/* <SectionTitle title='About us' /> */}
    </div>
  );
}

export default App;
