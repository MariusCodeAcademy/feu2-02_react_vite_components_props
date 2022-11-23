import SeviceCard from './SeviceCard';

const cardsArr = [
  { id: 1, title: 'Business Consulting', icon: 'fa-address-book', link: '/about.html' }, // 0
  { id: 2, title: 'Market Analysis', icon: 'fa-envelope-open', link: '/home.html' }, // 1
  { id: 3, title: 'User Monitoring', icon: 'fa-eercast', link: '/contact.html' }, // 2
  { id: 4, title: 'Facebook', icon: 'fa-facebook', link: '/fb.html' }, // 2
];

function ServicesGrid() {
  return (
    <div className='grid'>
      {cardsArr.map((cObj) => (
        <SeviceCard key={cObj.id} title={cObj.title} icon={cObj.icon} link={cObj.link} />
      ))}
    </div>
  );
}

export default ServicesGrid;
