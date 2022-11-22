import './hero.css';

function Hero(props) {
  return (
    <div className='hero'>
      <div className='container'>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
      </div>
    </div>
  );
}
export default Hero;
