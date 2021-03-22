import { useState } from 'react';
import styles from '../styles/team.module.css';
import TeamMember from './teammember';

const TeamPartial = (props) => {
  const [teamMembers, setTeamMembers] = useState(props.members);
  const [teamName, setTeamName] = useState(props.name);
  const [teamDescription, setTeamDescription] = useState(props.description);

  return (
    <div className={styles.partial_div}>
      <div
        className={styles.partial_header}
        style={{ textAlign: props.align, justifyContent: props.align }}
      >
        <div className={styles.partial_header_tex}>
          <h1 className="semibold-text">{teamName}</h1>
          <span className="regular-text">{teamDescription}</span>
        </div>
      </div>
      {/* <div className={styles.partial_members_div}> */}
      <div className="mt-5 d-flex row w-100 mx-auto">
        {teamMembers.map((member, index) => {
          return (
            <div className="col-6 col-md-3 col-lg-2" key={member.photo + index}>
              <TeamMember
                photo={member.photo}
                name={member.name}
                role={member.role}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPartial;
