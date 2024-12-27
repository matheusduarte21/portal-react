import React from 'react';
import { Container, Header, Title, Content } from './styles';

export const Statement = () => {
  return (
    <Container>
      <Header>
        <Title>Extrato</Title>
      </Header>
      <Content>
        <p>Extrato de transações</p>
      </Content>
    </Container>
  );
};