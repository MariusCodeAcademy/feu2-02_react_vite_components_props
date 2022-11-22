import TeamMember from './TeamMember';

function TeamList() {
  return (
    <div className='grid'>
      <TeamMember name='James Blunt' ocupation='007' img='/img/p5.webp' />
      <TeamMember name='Dave Simpson' ocupation='Product manager' img='/img/p6.webp' />
    </div>
  );
}

export default TeamList;
