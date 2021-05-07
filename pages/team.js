import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageTitle from '../components/pagetitle';
import TeamPartial from '../components/teampartial';
import styles from '../styles/team.module.css';
import TeamMember from '../components/teammember';

export default function Team() {
	const [leaders, setLeaders] = useState([
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'César Nogueira',
			role: 'CEO',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'José Silva ',
			role: 'CTO',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Marta Faria',
			role: 'CBO',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Mariana Ribeiro',
			role: 'CMO',
		},
	]);
	const [teams, setTeams] = useState([
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'André Mori',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Augusto Osório',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Cláudia Martins',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Lopes',
			role: 'Business Analyst',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Pacheco',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Lucas Stein',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Luís Oliveira',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Miguel Romariz',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Paulo Pinto',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Sérgio Dias',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Vitor Ventuzelos',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Matilde Santiago',
			role: 'Business Analyst',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Filipe Barbosa',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Bernardo Branco',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Bruno Vale Fernandes',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'José Miguel Simões',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'José Diogo Martins',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Margarida Alves Pinho',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Afonso Carvalho Pereira de Sá',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Paulo Jorge Palhau Moutinho',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Leonardo Fernandes Moura',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Célio Ighour de Castro Rodrigues',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Mafalda Santos',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'António Pedro Reis Ribeiro Sousa Dantas',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Eduardo João Santana Macedo',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Pedro Pinto Mota',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Rafael Gomes Varela',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'José Pedro Moreira de Almeida Baptista',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Luís Miguel Pedrosa de Moura Oliveira Henriques',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Tito Alexandre Trindade Griné',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Tomás Moreira Santos',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Jéssica Leão',
			role: 'Business Analyst',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Carmen Silva',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Gracielle Sampaio',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Eduardo Carreira Ribeiro',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Carlos Jorge Direito Albuquerque',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Daniel Silva',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'William Tostes Lobo',
			role: 'Business Analyst',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Pedro Esteves',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Miguel Pires',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'Luís Castro e Costa',
			role: 'UI/UX Designer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'André Filipe da Silva Moutinho',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Luz',
			role: 'IT Developer',
		},
		{
			photo: 'https://pngimg.com/uploads/batman/batman_PNG52.png',
			name: 'João Veiga de Macedo',
			role: 'IT Developer',
		},
	]);
	const nteams = teams.length;
	let photoBgColor;
	let overlayColor;
	return (
		<div className={`page-container ${styles.page}`}>
			<Head>
				<title>Vortex - Team</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar dark={false} page={'team'} />
			<div className='page-content mb-5'>
				<PageTitle
					title='Our team'
					description='We are a multi-complementary team made up of: IT developers, UI/UX designers and business analysts. We work together to achieve successful solutions. '
				/>
				<div
					className={`w-75 d-flex flex-wrap align-items-center ${styles.allLeaderMembers}`}
				>
					{leaders.map((member, index) => {
						photoBgColor =
							index % 2 == 0
								? 'light_photo_background'
								: 'gray_photo_background';
						overlayColor =
							index % 2 == 0 ? 'member_info_orange_bg' : 'member_info_blue_bg';
						return (
							<div
								className={`col-md-6 col-lg-3 px-0 ${styles.leaderMember}`}
								key={member.photo + index}
							>
								<TeamMember
									photo={member.photo}
									name={member.name}
									role={member.role}
									background={photoBgColor}
									overlayColor={overlayColor}
								/>
							</div>
						);
					})}
				</div>
				{/* <hr className={`${styles.hr}`} /> */}
				<div className={`${styles.separator}`}>
					<div className={`${styles.dotsRow}`}>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
						<span className={styles.dot}></span>
					</div>
				</div>
				<div className={`mt-5 d-flex mx-auto d-flex flex-wrap justify-content-center ${styles.teamMemberdiv}`}>
					{teams.map((member, index) => {
						photoBgColor =
							index % 2 == 0
								? 'light_photo_background'
								: 'gray_photo_background';
						overlayColor =
							index % 2 == 0 ? 'member_info_orange_bg' : 'member_info_blue_bg';
						return (
							<div
								className={`${styles.teamMemberCol} col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-0`}
								key={member.photo + index}
							>
								<TeamMember
									photo={member.photo}
									name={member.name}
									role={member.role}
									background={photoBgColor}
									overlayColor={overlayColor}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<Footer dark={true} />
		</div>
	);
}
