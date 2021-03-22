import styles from '../styles/team.module.css';

const TeamMember = (props) => {
  const { photo, name, role } = props;
  return (
    <div className={styles.member_div}>
      <img className={styles.member_photo} src={photo} />
      <span className={styles.member_name + ' bold-text'}>{name}</span>
      <span className={styles.member_role + ' semibold-text'}>{role}</span>
    </div>
  );
};

export default TeamMember;
