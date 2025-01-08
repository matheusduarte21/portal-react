import React, { useState } from 'react';
import { Mail, Lock, User, Building, Phone,Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import  Options  from '../../helpers/Options';
import { Button } from '../../components/Button';
import { Label } from '../../components/Input/styles';
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
  const [company, setCompany] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [user, setUser] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [numberPhone, setNumberphone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [type, setType] = useState<'etapa1' | 'etapa2'>('etapa1');

  const classSelect = 'w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3cabe0]/50 focus:border-[#3cabe0] outline-none transition-all text-gray-900 placeholder-gray-400 shadow-sm'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                active={type === 'etapa1'}
                onClick={() => setType('etapa1')}
              >
                <User size={20} />
                Etapa 1/2
              </TypeButton>
              <TypeButton
                type="button"
                active={type === 'etapa2'}
                onClick={() => setType('etapa2')}
              >
                <Building size={20} />
                Etapa 2/2
              </TypeButton>
            </TypeSelector>

            {type === 'etapa1' ? (
              <div>
                    <Input
                    label="Nome"
                    icon={User}
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nome"
                    required
                  />
                  <Input
                    label="Sobrenome"
                    icon={User}
                    type="text"
                    id="Sobrenome"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Sobrenome"
                    required
                  />

                  <Input
                    label="Email Corporativo"
                    icon={Mail}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                  />

                  <Input
                    label="Telefone"
                    icon={Phone}
                    type="tel"
                    id="tel"
                    value={numberPhone}
                    onChange={(e) => setNumberphone(e.target.value)}
                    placeholder="seu telefone"
                    required
                  />

                <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 block">
                        Sua função
                      </label>
                      <div className="relative">
                      <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <select required  className={classSelect}>
                        {Options.map((option: { value: string; label: string }) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                    </select>
                      </div>
                </div>
              </div>
            ):(
              <div>
                <Input
                    label="CNPJ"
                    icon={Building2}
                    type="text"
                    id="CNPJ"
                    value={CNPJ}
                    onChange={(e) => setCNPJ(e.target.value)}
                    placeholder="CNPJ"
                    required
                  />
                  <Input
                    label="Empresa"
                    icon={Building2}
                    type="text"
                    id="empressa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da empresa"
                    required
                  />

                  <Input
                    label="Usuário"
                    icon={User}
                    type="text"
                    id="Usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Nome do usuário"
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
              </div>
            )}

            

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