import React from 'react';
import { Container, Header, Title, Content } from './styles';

export const Profile = () => {
  return (
    <Container>
      <Header>
        <Title>Perfil</Title>
      </Header>
      <Content>
        <p>Informações do perfil</p>
      </Content>
    </Container>
  );
};