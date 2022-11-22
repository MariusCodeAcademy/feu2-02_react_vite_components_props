function TeamMember({ img, name, ocupation }) {
  // destrukturizacija
  // const { img, name, ocupation } = props;
  return (
    <div className='teamMember'>
      <img src={img} alt={name} />
      <div className='team__info'>
        <h3>{name}</h3>
        <p className='team__ocupation'>{ocupation}</p>
      </div>
    </div>
  );
}

export default TeamMember;
