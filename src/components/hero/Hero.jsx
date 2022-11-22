import './hero.css';

function Hero(props) {
  const heroClasses = props.color === 'red' ? 'hero red' : 'hero';

  function caclulateClass() {
    let rezClass = 'hero ';
    if (props.color === 'red') {
      rezClass = rezClass + 'red';
    }
    if (props.color === 'green') {
      rezClass = rezClass + 'green';
    }

    return rezClass;
  }

  return (
    <div className={caclulateClass()}>
      <div className='container'>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
      </div>
    </div>
  );
}
export default Hero;
