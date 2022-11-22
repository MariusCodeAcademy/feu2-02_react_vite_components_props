import Icon from './UI/Icon';

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

export default SeviceCard;
