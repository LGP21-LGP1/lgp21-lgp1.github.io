import styles from '../styles/team.module.css';

const TeamMember = (props) => {
	const { photo, name, role, background, overlayColor } = props;
	return (
		<div className={`${styles.member_div} ${styles[background]}`}>
			<img className={styles.member_photo} src={photo} />
			<div className={`${styles.member_info} ${styles[overlayColor]}`}>
				<span className={styles.member_name + ' bold-text'}>{name}</span>
				<span className={styles.member_role + ' semibold-text'}>{role}</span>
			</div>
		</div>
	);
};

export default TeamMember;
