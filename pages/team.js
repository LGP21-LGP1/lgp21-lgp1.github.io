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
      name: 'João Luz',
      role: 'DEVELOPER',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Maria Adelaide',
      role: 'SENHORA DOUTORA',
    },
    {
      photo: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'João Luz',
      role: 'DEVELOPER',
    },
    {
      photo: 'https://www.w3schools.com/w3images/avatar6.png',
      name: 'Maria Adelaide',
      role: 'SENHORA DOUTORA',
    },
  ]);
  const [teams, setTeams] = useState([
    {
      name: 'AirMedDigital',
      description:
        ' AirMedDigital Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus nisl accumsan velit tincidunt, eget condimentum lectus venenatis. Nullam volutpat venenatis nulla, ut porta mauris. Donec eget efficitur tortor.',
      members: [
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
      ],
    },
    {
      name: 'AirMedDigital',
      description:
        ' AirMedDigital Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus nisl accumsan velit tincidunt, eget condimentum lectus venenatis. Nullam volutpat venenatis nulla, ut porta mauris. Donec eget efficitur tortor.',
      members: [
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
      ],
    },
    {
      name: 'AirMedDigital',
      description:
        ' AirMedDigital Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus nisl accumsan velit tincidunt, eget condimentum lectus venenatis. Nullam volutpat venenatis nulla, ut porta mauris. Donec eget efficitur tortor.',
      members: [
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
        {
          photo: 'https://www.w3schools.com/howto/img_avatar.png',
          name: 'João Luz',
          role: 'DEVELOPER',
        },
        {
          photo: 'https://www.w3schools.com/w3images/avatar6.png',
          name: 'Maria Adelaide',
          role: 'SENHORA DOUTORA',
        },
      ],
    },
  ]);
  const nteams = teams.length;
  return (
    <div className="page-container">
      <Head>
        <title>Vortex - Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar dark={true} page={'team'} />
      <PageTitle
        title="The Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
          nisl accumsan velit tincidunt, eget condimentum lectus venenatis.
          Nullam volutpat"
      />
      <div className="my-5 w-100 d-flex flex-column justify-content-center align-items-center">
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
      {teams.map((team, index) => {
        const align = index % 2 == 0 ? 'start' : 'end';
        return (
          <div key={team.name + index}>
            <div>
              <TeamPartial
                name={team.name}
                description={team.description}
                members={team.members}
                align={align}
              />
            </div>
            {index != nteams - 1 && (
              <div className={`mb-5 ${styles.delimiter}`}>
                <hr
                  className={`${styles.hr} ${
                    index % 2 == 0 ? styles.hr_end : styles.hr_start
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
      <Footer dark={true} />
    </div>
  );
}
