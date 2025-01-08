import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Card,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from './styles';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Content>
        <Card>
          <Header>
            <Title>Recuperar Senha</Title>
            <Subtitle>Digite seu email para recuperar sua senha</Subtitle>
          </Header>

          <Form onSubmit={handleSubmit}>
            <Input
              label="Email"
              icon={Mail}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />

            <Button type="submit">
              Enviar instruções
            </Button>
          </Form>

          <Footer>
            <Link to="/">Voltar ao login</Link>
          </Footer>
        </Card>
      </Content>
    </Container>
  );
};