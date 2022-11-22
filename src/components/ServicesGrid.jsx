import SeviceCard from './SeviceCard';

const cardsArr = [
  { title: 'Business Consulting', icon: 'fa-address-book', link: '/about.html' }, // 0
  { title: 'Market Analysis', icon: 'fa-envelope-open', link: '/home.html' }, // 1
  { title: 'User Monitoring', icon: 'fa-eercast', link: '/contact.html' }, // 2
  { title: 'Facebook', icon: 'fa-facebook', link: '/fb.html' }, // 2
];

function ServicesGrid() {
  return (
    <div className='grid'>
      <SeviceCard title={cardsArr[0].title} icon={cardsArr[0].icon} link={cardsArr[0].link} />
      <SeviceCard title={cardsArr[1].title} icon={cardsArr[1].icon} link={cardsArr[1].link} />
      <SeviceCard title={cardsArr[2].title} icon={cardsArr[2].icon} link={cardsArr[2].link} />
      <SeviceCard title={cardsArr[3].title} icon={cardsArr[3].icon} link={cardsArr[3].link} />
    </div>
  );
}

export default ServicesGrid;
