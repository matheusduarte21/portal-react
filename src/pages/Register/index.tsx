import React, { useState } from 'react';
import { Mail, Lock, User, Building } from 'lucide-react';
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
  TypeSelector,
  TypeButton,
  Footer,
} from './styles';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState<'consumer' | 'business'>('consumer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <Container>
      <Content>
        <Card>
          <Header>
            <Title>Criar Conta</Title>
            <Subtitle>Preencha seus dados para começar</Subtitle>
          </Header>

          <Form onSubmit={handleSubmit}>
            <TypeSelector>
              <TypeButton
                type="button"
                active={type === 'consumer'}
                onClick={() => setType('consumer')}
              >
                <User size={20} />
                Etapa 1/2
              </TypeButton>
              <TypeButton
                type="button"
                active={type === 'business'}
                onClick={() => setType('business')}
              >
                <Building size={20} />
                Etapa 2/2
              </TypeButton>
            </TypeSelector>

            <Input
              label="Nome"
              icon={User}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              required
            />

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

            <Input
              label="Confirmar Senha"
              icon={Lock}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <Button type="submit">
              Criar conta
            </Button>
          </Form>

          <Footer>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </Footer>
        </Card>
      </Content>
    </Container>
  );
};