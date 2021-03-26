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
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'César Nogueira',
      role: 'CEO',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'José Silva ',
      role: 'CTO',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Marta Faria',
      role: 'CBO',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Mariana Ribeira',
      role: 'CMO',
    },
  ]);
  const [teams, setTeams] = useState([
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'André Mori',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Augusto Osório',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Cláudia Martins',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'João Lopes',
      role: 'MESG',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'João Pacheco',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Lucas Stein',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Luís Oliveira',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Miguel Romariz',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Paulo Pinto',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Sérgio Dias',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Vitor Ventuzelos',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Matilde Santiago',
      role: 'MESG',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Filipe Barbosa',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Bernardo Branco',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Bruno Vale Fernandes',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'José Miguel Simões',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'José Diogo Martins',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Margarida Alves Pinho',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Afonso Carvalho Pereira de Sá',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Paulo Jorge Palhau Moutinho',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Leonardo Fernandes Moura',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Célio Ighour de Castro Rodrigues',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Mafalda Santos',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'António Pedro Reis Ribeiro Sousa Dantas',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Eduardo João Santana Macedo',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'João Pedro Pinto Mota',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'João Rafael Gomes Varela',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'José Pedro Moreira de Almeida Baptista',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Luís Miguel Pedrosa de Moura Oliveira Henriques',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Tito Alexandre Trindade Griné',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Tomás Moreira Santos',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Jéssica Leão',
      role: 'MESG',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Carmen Silva',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Gracielle Sampaio',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Eduardo Carreira Ribeiro',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Carlos Jorge Direito Albuquerque',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Daniel Silva',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'William Tostes Lobo',
      role: 'MESG',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Pedro Esteves',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Miguel Pires',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Luís Castro e Costa',
      role: 'MM',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'André Filipe da Silva Moutinho',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'João Luz',
      role: 'MIEIC',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'João Veiga de Macedo',
      role: 'MIEIC',
    },
  ]);
  const nteams = teams.length;
  return (
    <div className={`page-container ${styles.page}`}>
      <Head>
        <title>Vortex - Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar dark={false} page={'team'} />
      <PageTitle
        title="The Team"
        description="We are a multi-complementary team made up of: IT developers, UI/UX designers and business analysts. We work together to achieve successful solutions. "
      />
      <div className="mt-5 mb-2 w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
        <h3 className="bold-text mb-4">Our Leaders</h3>
        <div className="w-75 d-flex flex-wrap row align-items-center">
          {leaders.map((member, index) => {
            return (
              <div className="col-md-6 col-lg-3" key={member.photo + index}>
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
      <hr className={`w-75 mx-auto ${styles.hr}`} />
      <div className="mt-5 d-flex w-90 mx-auto d-flex flex-wrap justify-content-center">
        {teams.map((member, index) => {
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
      <Footer dark={true} />
    </div>
  );
}
