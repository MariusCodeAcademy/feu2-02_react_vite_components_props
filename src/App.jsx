import './App.css';

function SectionTitle(props) {
  // console.log('props ===', props);
  return <h2 className='sectionTitle'>{props.title}</h2>;
}

function Icon(props) {
  // console.log('props ===', props);
  return <i className={`fa ${props.iconName} fa-3x card__icon`} aria-hidden='true'></i>;
}

function Grid() {
  return (
    <div className='grid'>
      <SeviceCard title='Business Consulting' icon='fa-address-book' link='/about.html' />
      <SeviceCard title='Market Analysis' icon='fa-envelope-open' link='/home.html' />
      <SeviceCard title='User Monitoring' icon=' fa-eercast' link='/contact.html' />
      <SeviceCard title='Business Consulting' icon='fa-address-book' link='/about.html' />
      <SeviceCard title='Market Analysis' icon='fa-envelope-open' link='/home.html' />
      <SeviceCard title='User Monitoring' icon=' fa-eercast' link='/contact.html' />
    </div>
  );
}

function SeviceCard(props) {
  return (
    <div className='card'>
      <Icon iconName={props.icon} />
      <h3>{props.title}</h3>
      <p className='card__text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolor atque exercitationem
      </p>
      <a href={props.link} className='card__link'>
        Learn more
      </a>
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
