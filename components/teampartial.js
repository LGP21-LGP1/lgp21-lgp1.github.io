import { useState } from 'react';
import styles from '../styles/team.module.css';
import TeamMember from './TeamMember';

const TeamPartial = (props) => {
  const [teamMembers, setTeamMembers] = useState(props.members);
  const [teamName, setTeamName] = useState(props.name);
  const [teamDescription, setTeamDescription] = useState(props.description);

  return (
    <div className={styles.partial_div}>
      <div
        className={styles.partial_header}
        style={{ justifyContent: props.align }}
      >
        <div className={styles.partial_header_tex}>
          <h1 className="semibold-text">{teamName}</h1>
          <span className="regular-text">{teamDescription}</span>
        </div>
      </div>
      <div className={styles.partial_members_div}>
        {teamMembers.map((member, index) => {
          return (
            <TeamMember
              key= {member.photo + index}
              photo={member.photo}
              name={member.name}
              role={member.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamPartial;
