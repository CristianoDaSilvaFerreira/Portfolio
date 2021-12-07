import React from 'react';
import SectionTitle from '../SectionTitle';
import AboutItem from './AboutItem';
import { Container } from './styles';

function About() {
  return (
    <Container>
      <SectionTitle title="Conheça-me" />

      <section>
        <AboutItem />
      </section>
    </Container>
  );
}

export default About;
