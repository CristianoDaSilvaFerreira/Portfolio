import React from 'react';
import SectionTitle from '../SectionTitle';
import AboutItem from './AboutItem';
import { Container } from './styles';

function About() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Conheça-me" data-aos="flipe-left" />

      <section data-aos="zoom-in">
        <AboutItem />
      </section>
    </Container>
  );
}

export default About;
