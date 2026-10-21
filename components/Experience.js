import React, { forwardRef } from 'react';
import { Container } from 'react-bootstrap';
import { Section } from './GlobalComponents/Section';
import { Title } from './GlobalComponents/Tittle';
import { Text } from './GlobalComponents/TextComponets';

const jobs = [
  {
    role: 'Software Engineer',
    company: 'Pleyr (AthletiFi Sport Inc.)',
    dates: 'Remote · Nov 2023 – Present',
    stack: 'Next.js · TypeScript · Node.js · AWS S3',
    points: [
      'Build frontend pieces of Pleyr, a video-centric social platform for youth athletes.',
      'Contribute to features like the Highlight Clipper, Digital Player Cards, the Athlete-First Feed, and streaks and badges.',
      'Built an athlete filtering module in JavaScript, and manage match video files in AWS S3.',
    ],
  },
  {
    role: 'Frontend Software Engineer',
    company: 'Chingu',
    dates: 'Remote · Aug 2022 – Present',
    stack: 'React · Agile/SCRUM',
    points: [
      'Built "Handy Work," a full-stack app that connects people with local service providers, with a remote team in a six-week sprint.',
      'Implemented authenticated user profiles and secure negotiation between consumers and suppliers.',
    ],
  },
  {
    role: 'Frontend Software Engineer Intern',
    company: 'Walrus Media Inc.',
    dates: 'Remote · Jun 2021 – Sep 2021',
    stack: 'React · Emotion.js',
    points: [
      'Built a custom image cropper through pair programming, and fixed UI bugs in an agile team.',
    ],
  },
];

const cardStyle = {
  width: '100%',
  maxWidth: '800px',
  background: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
  padding: '20px 24px',
  marginBottom: '20px',
  textAlign: 'left',
};

const Experience = forwardRef((props, ref) => {
  return (
    <Container fluid style={{ padding: '0px' }} ref={ref} {...props}>
      <Section
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gap='10px'
      >
        <Title
          color='#393E41'
          titleAlign='center'
          textShadow='none'
          marginDesktopL='30px 0px 40px 0px'
          marginLaptopL='30px 0px 20px 0px'
          marginLaptop='30px 0px 10px 0px'
          marginTablet='30px 0px 5px 0px'
          marginMobileL='30px 0px 5px 0px'
          marginMobileM='30px 0px 5px 0px'
          marginMobileS='30px 0px 5px 0px'
          fontSizeDesktopL='80px'
          fontSizeLaptopL='45px'
          fontSizeLaptop='40px'
          fontSizeTablet='35px'
          fontSizeMobileL='35px'
          fontSizeMobileM='30px'
          fontSizeMobileS='25px'
        >
          Experience
        </Title>
        <div style={{ width: '100%', padding: '0px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {jobs.map((job) => (
            <article key={job.company} style={cardStyle}>
              <h3 style={{ color: '#393E41', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                {job.role} · {job.company}
              </h3>
              <p style={{ color: '#6c757d', fontSize: '0.9rem', margin: '4px 0 2px' }}>{job.dates}</p>
              <p style={{ color: '#8a5c78', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 8px' }}>{job.stack}</p>
              <ul style={{ color: '#393E41', paddingLeft: '20px', margin: 0 }}>
                {job.points.map((point) => (
                  <li key={point} style={{ marginBottom: '4px' }}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  );
});

Experience.displayName = 'Experience';

export default Experience;
