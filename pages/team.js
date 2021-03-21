import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/navbar';
import PageTitle from '../components/pagetitle';
import TeamPartial from '../components/teampartial';
import styles from '../styles/team.module.css';

export default function Team() {
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
      ],
    },
  ]);

  return (
    <div className="container">
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
      {teams.map((team, index) => {
        const align = index % 2 == 0 ? 'start' : 'end';
        return (
          <>
            <div style={{ textAlign: align }}>
              <TeamPartial
                key={team + index}
                name={team.name}
                description={team.description}
                members={team.members}
                align={align}
              />
            </div>
            <div className={styles.delimiter}>
              <hr
                className={` ${styles.hr} ${
                  index % 2 == 0 ? styles.hr_end : styles.hr_start
                }`}
              />
            </div>
          </>
        );
      })}
      <Footer dark={true} />
    </div>
  );
}
