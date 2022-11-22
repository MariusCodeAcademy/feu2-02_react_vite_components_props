import TeamMember from './TeamMember';
import Grid from './../UI/Grid';

// generuoti TeamMemberius is teamsArr

function TeamList() {
  return (
    <Grid>
      <TeamMember name='James Blunt' ocupation='007' img='/img/p5.webp' />
      <TeamMember name='Dave Simpson' ocupation='Product manager' img='/img/p6.webp' />
      <TeamMember name='James Blunt' ocupation='007' img='/img/p5.webp' />
      <TeamMember name='Dave Simpson' ocupation='Product manager' img='/img/p6.webp' />
    </Grid>
  );
}

export default TeamList;
