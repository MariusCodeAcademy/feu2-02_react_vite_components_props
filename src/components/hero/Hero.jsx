import './hero.css';

function Hero(props) {
  const heroClasses = props.color === 'red' ? 'hero red' : 'hero';

  return (
    <div className={heroClasses}>
      <div className='container'>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
      </div>
    </div>
  );
}
export default Hero;
