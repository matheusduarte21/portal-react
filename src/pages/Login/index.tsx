import React, { useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Card,
  Header,
  LogoContainer,
  Title,
  Subtitle,
  Form,
  RememberContainer,
  CheckboxContainer,
  Link,
  ButtonGroup,
  Footer,
} from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container>
      <Content>
        <Card>
          <Header>
            <LogoContainer>
              <LogIn size={32} color="white" />
            </LogoContainer>
            <Title>Bem-vindo</Title>
            <Subtitle>Entre com suas credenciais</Subtitle>
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

            <Input
              label="Senha"
              icon={Lock}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <RememberContainer>
              <CheckboxContainer>
                <input
                  type="checkbox"
                  id="remember"
                />
                <label htmlFor="remember">Lembrar-me</label>
              </CheckboxContainer>
              <Link as={RouterLink} to="/recuperar-senha">
                Esqueceu a senha?
              </Link>
            </RememberContainer>

            <ButtonGroup>
            <Link as={RouterLink} to="/home">
               <Button type="button">Entrar</Button>
            </Link>
            </ButtonGroup>
          </Form>

          <Footer>
            Não tem uma conta?{' '}
            <Link as={RouterLink} to="/cadastro">
              Cadastre-se
            </Link>
          </Footer>
        </Card>
      </Content>
    </Container>
  );
};