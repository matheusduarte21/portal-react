import React, { useState } from 'react';
import { 
  Upload, 
  User, 
  Building, 
  Phone, 
  Mail, 
  Briefcase, 
  Lock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

import {
  Container,
  Header,
  Title,
  TabContainer,
  Tab,
  Card,
  Form,
  FormGroup,
  Label,
  ViewContent,
  Alert,
  AlertActions,
  HiddenInput,
  FileButton,
  Grid,
  Input,
  Select,
} from './styles'
import { Button } from '../../components/Button';



export const Profile = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');
  const [isValidated, setIsValidated] = useState(false);
  const [documentFile, setDocumentFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentFile(e.target.files[0]);
    }
  };

  const handleSubmitDocuments = () => {
    setIsValidated(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <Title>Perfil</Title>
      </Header>

      <TabContainer>
        <Tab
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        >
          <User size={18} />
          Dados do Perfil
        </Tab>
        <Tab
          active={activeTab === 'password'}
          onClick={() => setActiveTab('password')}
        >
          <Lock size={18} />
          Alterar Senha
        </Tab>
      </TabContainer>

      <Card>
        {activeTab === 'profile' ? (
          <Form onSubmit={handleSaveProfile}>
            <FormGroup>
              <Label>
                <Building size={18} />
                Empresa
              </Label>
              <ViewContent>Nome da empresa</ViewContent>
            </FormGroup>

            {!isValidated ? (
              <Alert type="warning">
                <AlertCircle size={20} />
                <div>
                  <strong>Validação Pendente</strong>
                  <p>
                    Para acessar todos os recursos disponíveis é necessário validar a conta da empresa.
                    Envie os documentos necessários abaixo.
                  </p>
                  <AlertActions>
                    <HiddenInput
                      type="file"
                      id="document"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                    <FileButton htmlFor="document">
                      <Upload size={18} />
                      Selecionar Arquivo
                    </FileButton>
                    {documentFile && (
                      <Button variant='secondary' className='w-36' onClick={handleSubmitDocuments}>
                        Enviar Documentos
                      </Button>
                    )}
                  </AlertActions>
                </div>
              </Alert>
            ) : (
              <Alert type="success">
                <CheckCircle size={20} />
                <div>
                  <strong>Conta Validada</strong>
                  <p>
                    Sua conta está validada. Para alterar dados da empresa entre em contato com{' '}
                    <a href="mailto:atendimento@datastone.com.br">
                      atendimento@datastone.com.br
                    </a>
                  </p>
                </div>
              </Alert>
            )}

            <Grid>
              <FormGroup>
                <Label>
                  <User size={18} />
                  Nome
                </Label>
                <Input type="text" placeholder="Seu nome" />
              </FormGroup>

              <FormGroup>
                <Label>
                  <User size={18} />
                  Sobrenome
                </Label>
                <Input type="text" placeholder="Seu sobrenome" />
              </FormGroup>
            </Grid>

            <Grid>
              <FormGroup>
                <Label>
                  <Phone size={18} />
                  Telefone
                </Label>
                <Input type="tel" placeholder="(00) 00000-0000" />
              </FormGroup>

              <FormGroup>
                <Label>
                  <Mail size={18} />
                  E-mail
                </Label>
                <Input type="email" placeholder="seu@email.com" />
              </FormGroup>
            </Grid>

            <FormGroup>
              <Label>
                <Briefcase size={18} />
                Sua função
              </Label>
              <Select>
                <option value="">Selecione uma opção...</option>
                <option value="Empresário">Empresário</option>
                <option value="Líder do departamento de vendas">Líder do departamento de vendas</option>
                <option value="Líder do departamento de operações de vendas">Líder do departamento de operações de vendas</option>
                <option value="Líder do departamento de marketing">Líder do departamento de marketing</option>
                <option value="Chefe do departamento - outro">Chefe do departamento - outro</option>
                <option value="Diretor de vendas">Diretor de vendas</option>
                <option value="Diretor de operações de vendas">Diretor de operações de vendas</option>
                <option value="Diretor de marketing">Diretor de marketing</option>
                <option value="Diretor - outro">Diretor - outro</option>
                <option value="Gerente de vendas">Gerente de vendas</option>
                <option value="Gerente de operações de vendas">Gerente de operações de vendas</option>
                <option value="Gerente de marketing">Gerente de marketing</option>
                <option value="Gerente - outro">Gerente - outro</option>
                <option value="Gerente de mídias sociais">Gerente de mídias sociais</option>
                <option value="Recrutador">Recrutador</option>
                <option value="Estudante/Estagiário">Estudante/Estagiário</option>
                <option value="À procura de emprego">À procura de emprego</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>
                <User size={18} />
                Usuário
              </Label>
              <Input type="text" placeholder="Seu nome de usuário" />
            </FormGroup>

            <Button type="submit">
              Salvar Alterações
            </Button>
          </Form>
        ) : (
          <Form onSubmit={handleChangePassword}>
            <FormGroup>
              <Label>
                <Lock size={18} />
                Senha atual
              </Label>
              <Input type="password" placeholder="Digite sua senha atual" />
            </FormGroup>

            <Grid>
              <FormGroup>
                <Label>
                  <Lock size={18} />
                  Nova senha
                </Label>
                <Input type="password" placeholder="Digite a nova senha" />
              </FormGroup>

              <FormGroup>
                <Label>
                  <Lock size={18} />
                  Confirme a nova senha
                </Label>
                <Input type="password" placeholder="Confirme a nova senha" />
              </FormGroup>
            </Grid>

            <Button type="submit">
              Alterar Senha
            </Button>
          </Form>
        )}
      </Card>
    </Container>
  );
};

export default Profile;