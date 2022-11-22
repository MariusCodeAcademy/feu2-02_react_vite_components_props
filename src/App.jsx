import './App.css';

function SectionTitle(props) {
  return <h2 className='sectionTitle'>Our services</h2>;
}

function Icon() {
  return <i className='fa fa-address-book' aria-hidden='true'></i>;
}

function Grid() {
  return (
    <div className='grid'>
      <h2>
        kortele <Icon />
      </h2>
      <h2>
        kortele <Icon />
      </h2>
      <h2>
        kortele <Icon />
      </h2>
    </div>
  );
}

function App() {
  return (
    <div className='App container'>
      <SectionTitle title='Musu paslaugos' />
      <Grid />
    </div>
  );
}

export default App;
