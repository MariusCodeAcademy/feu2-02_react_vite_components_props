import SectionTitle from './UI/SectionTitle';
import ServicesGrid from './ServicesGrid';

function OurServices() {
  return (
    <div className='servicesSecion container'>
      <SectionTitle title='Musu paslaugos' size='large' />
      <ServicesGrid />
    </div>
  );
}

export default OurServices;
