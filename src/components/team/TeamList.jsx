import TeamMember from './TeamMember';

function TeamList() {
  return (
    <div className='grid'>
      <TeamMember name='James Blunt' ocupation='007' img='/img/p5.webp' />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
    </div>
  );
}

export default TeamList;
