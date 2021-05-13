import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import PageTitle from '../components/pagetitle';
import TeamPartial from '../components/teampartial';
import styles from '../styles/team.module.css';
import TeamMember from '../components/teammember';

export default function Team() {
	const commonUrl = 'https://raw.githubusercontent.com/LGP21-LGP1/lgp21-lgp1.github.io/assets/add-team-pictures/assets/'
	const [leaders, setLeaders] = useState([
		{
			name: 'César Nogueira',
			role: 'CEO',
			pic:'César_Nogueira_MIEIC_CEO'
		},
		{
			name: 'José Silva ',
			role: 'CTO',
			pic:'JOSE_SILVA_MIEIC_RapazDasAguas'
		},
		{
			name: 'Marta Faria',
			role: 'CBO',
			pic:'Marta_Faria_CBO'
		},
		{
			name: 'Mariana Ribeiro',
			role: 'CMO',
			pic:'MARIANA_RIBEIRO_MM_CMO'
		},
	]);
	const [teams, setTeams] = useState([
		{
			name: 'Rita Garcia',
			role: 'UI/UX Designer',
			pic: 'Ana_Rita_Garcia_MM_TeamLeaderPI'
		},
		{
			name: 'André Mori',
			role: 'IT Developer',
			pic: 'André_Mori_MIEIC_ImplementationManager'
		},
		{
			name: 'Augusto Osório',
			role: 'UI/UX Designer',
			pic:'Augusto_Osório_MM_Design_Manager'
		},
		{
			name: 'Cláudia Martins',
			role: 'IT Developer',
			pic:'CláudiaMartins_MIEIC_TeamLeader'
		},
		{
			name: 'João Lopes',
			role: 'Business Analyst',
			pic: 'João_Lopes_MESG_Gestor de Usabilidade e Desenho de Interfaces'
		},
		{
			name: 'João Pacheco',
			role: 'UI/UX Designer',
			pic:'João_Pacheco_MM_UIUXDesigner'
		},
		{
			name: 'Lucas Stein',
			role: 'IT Developer',
			pic:'LUCAS_STEIN_MIEIC_RequirementsManager'
		},
		{
			name: 'Luís Oliveira',
			role: 'IT Developer',
			pic:'Luis_Oliveira_MIEIC_ProcessManager'
		},
		{
			name: 'Miguel Romariz',
			role: 'IT Developer',
			pic:'Miguel_Romariz_MIEIC_ProcessManager'
		},
		{
			name: 'Paulo Pinto',
			role: 'IT Developer',
			pic:'PAULO_PINTO_MIEIC_IMPLEMENTATION_MANAGER'
		},
		{
			name: 'Sérgio Dias',
			role: 'IT Developer',
			pic:'Sérgio_Dias_MIEIC_PlanningManager'
		},
		{
			name: 'Vitor Ventuzelos',
			role: 'IT Developer',
			pic:'Vitor_Ventuzelos_MIEIC_TeamLeader'
		},
		{
			name: 'Matilde Santiago',
			role: 'Business Analyst',
			pic:'Matilde_Santiago_MESG_QualityManager'
		},
		{
			name: 'Filipe Barbosa',
			role: 'IT Developer',
			pic:'Filipe_Barbosa_MIEIC_ProcessManager'
		},
		{
			name: 'Bernardo Branco',
			role: 'UI/UX Designer',
			pic:'Bernardo_Branco_MM_Branding_UI_UX_Design'
		},
		{
			name: 'Bruno Vale Fernandes',
			role: 'IT Developer',
			pic:'BRUNO_FERNANDES_MIEIC_QUALITYMANAGER'
		},
		{
			name: 'José Miguel Simões',
			role: 'IT Developer',
			pic:'Miguel_Simões_MIEIC_ProcessManager'
		},
		{
			name: 'José Diogo Martins',
			role: 'IT Developer',
			pic:'JoséDiogo_Martins_MIEIC_DesignManager'
		},
		{
			name: 'Margarida Alves Pinho',
			role: 'IT Developer',
			pic:'Margarida_Pinho_MIEIC_PlanningManager'
		},
		{
			name: 'Afonso Carvalho Pereira de Sá',
			role: 'IT Developer',
			pic:'Afonso_Sá_MIEIC_DesignManager'
		},
		{
			name: 'Paulo Jorge Palhau Moutinho',
			role: 'IT Developer',
			pic:'Paulo_Moutinho_MIEIC_ImplementationManager'
		},
		{
			name: 'Leonardo Fernandes Moura',
			role: 'IT Developer',
			pic:'LEOBARDO_MOURA_MIEIC_IMPLEMENTATION_MANAGER'
		},
		{
			name: 'Célio Ighour de Castro Rodrigues',
			role: 'UI/UX Designer',
			pic:'CELIO_RODRIGUES_MM_UIUXDESIGNER'
		},
		{
			name: 'Mafalda Santos',
			role: 'IT Developer',
			pic:'Mafalda_Santos_MIEIC_RequirementsManager'
		},
		{
			name: 'António Pedro Reis Ribeiro Sousa Dantas',
			role: 'IT Developer',
			pic:'António_Dantas_MIEIC_QualityManager'
		},
		{
			name: 'Eduardo João Santana Macedo',
			role: 'IT Developer',
			pic:'Eduardo_Macedo_MIEIC_RequirementManager'
		},
		{
			name: 'João Pedro Pinto Mota',
			role: 'IT Developer',
			pic:'João_Mota_MIEIC_SupportManager'
		},
		{
			name: 'João Rafael Gomes Varela',
			role: 'IT Developer',
			pic:'João_Varela_MIEIC_DesignManager'
		},
		{
			name: 'José Pedro Moreira de Almeida Baptista',
			role: 'IT Developer',
			pic:'José_Baptista_MIEIC_ProcessManager'
		},
		{
			name: 'Luís Miguel Pedrosa de Moura Oliveira Henriques',
			role: 'IT Developer',
			pic:'Luis_Henriques_MIEIC_SupportManager'
		},
		{
			name: 'Tito Alexandre Trindade Griné',
			role: 'IT Developer',
			pic:'Tito_Griné_MIEIC_TeamLeader'
		},
		{
			name: 'Tomás Moreira Santos',
			role: 'IT Developer',
			pic:'Tomás_Santos_MIEIC_TestingManager'
		},
		{
			name: 'Jéssica Leão',
			role: 'Business Analyst',
			pic:'Jessica_Leao_ProcessManager'
		},
		{
			name: 'Carmen Silva',
			role: 'UI/UX Designer',
			pic:'Carmen_Silva_Multimédia_Gestor_de_Imagem_Comunicação_e_Marketing'
		},
		{
			name: 'Gracielle Sampaio',
			role: 'UI/UX Designer',
			pic:'Grace_Sampaio_MM_UXUIDesigner'
		},
		{
			name: 'Eduardo Carreira Ribeiro',
			role: 'IT Developer',
			pic:'Eduardo_Ribeiro_MIEIC_ProjectManager'
		},
		{
			name: 'Carlos Jorge Direito Albuquerque',
			role: 'IT Developer',
			pic:'Carlos_Albuquerque_MIEIC_RequirementsManager'
		},
		{
			name: 'Daniel Silva',
			role: 'UI/UX Designer',
			pic: 'Daniel_Silva_MM_UIUXDesigner'
		},
		{
			name: 'William Tostes Lobo',
			role: 'Business Analyst',
			pic: 'William_Tostes_Mesg_ProcessManager'
		},
		{
			name: 'Pedro Esteves',
			role: 'IT Developer',
			pic:'Pedro_Esteves_MIEIC_TestingManager'
		},
		{
			name: 'Miguel Pires',
			role: 'IT Developer',
			pic:'MIGUEL_PIRES_MIEIC_DIICMM'
		},
		{
			name: 'Luís Castro e Costa',
			role: 'UI/UX Designer',
			pic:'Luís_CastroeCosta_VideoContent_MM_'
		},
		{
			name: 'André Filipe da Silva Moutinho',
			role: 'IT Developer',
			pic:'André_Moutinho_MIEIC_DesignAndImplementationManager'
		},
		{
			name: 'João Luz',
			role: 'IT Developer',
			pic:'João_Luz_MIEIC_RequirementsManager'
		},
		{
			name: 'João Veiga de Macedo',
			role: 'IT Developer',
			pic:'Joao_Macedo_MIEIC_TestingManager'
		},
	]);
	const nteams = teams.length;
	console.log(nteams);
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
					className={`d-flex flex-wrap align-items-center ${styles.allLeaderMembers}`}
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
								className={`col-6 col-md-3 col-lg-3 px-0 ${styles.leaderMember}`}
								key={member.pic + index}
							>
								<TeamMember
									photo={encodeURI(commonUrl + member.pic+".png")}
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
				<div
					className={`d-flex mx-auto d-flex flex-wrap justify-content-start ${styles.teamMemberdiv}`}
				>
					{teams.map((member, index) => {
						photoBgColor =
							index % 2 == 0
								? 'light_photo_background'
								: 'gray_photo_background';
						overlayColor =
							index % 2 == 0 ? 'member_info_orange_bg' : 'member_info_blue_bg';
						return (
							<div
								className={`${styles.teamMemberCol} col-6 col-md-4 col-lg-3 col-xl-2 px-0`}
								key={member.pic + index}
							>
								<TeamMember
									photo={encodeURI(commonUrl + member.pic+".png")}
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
