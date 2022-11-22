import SeviceCard from './SeviceCard';

function ServicesGrid() {
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

export default ServicesGrid;
