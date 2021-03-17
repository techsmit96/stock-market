import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Herocards from '../components/Hero-Card/Herocards';

const Navigator = () => {
  return (
    <>
      <Header />
      <Container>
        <Herocards />
      </Container>
    </>
  );
};

export default Navigator;
