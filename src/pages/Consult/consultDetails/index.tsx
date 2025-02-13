import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Star, Download, Building2, User, Eye,
  RefreshCw, AlertCircle, Briefcase, Scale,
  FileText, Users, Activity, Globe, ShieldCheck, Calendar,
  Building, Landmark, PieChart, TrendingUp, FileBarChart,
  FileCheck, Globe2, DollarSign, BadgeCheck, AlertTriangle,
  UserCircle2, Building2Icon, MailIcon, PhoneCall
} from 'lucide-react';
import {
  Container,
  Header,
  HeaderContent,
  HeaderActions,
  MainGrid,
  Sidebar,
  Content,
  Card,
  CardHeader,
  CardTitle,
  DataGrid,
  DataItem,
  Label,
  Value,
  ContactsCard,
  PhoneList,
  PhoneItem,
  AddressList,
  AddressItem,
  ConfirmationButtons,
  StarRating,
  Badge,
  RevealButton,
  TabContainer,
  Tab,
  TabContent,
  InfoList,
  InfoItem,
  ExpandButton,
  ActionBar,
  Disclaimer,
} from './style';
import { Button } from '../../../components/Button';

interface ConsultationDetailsProps {
  type: 'consumer' | 'company';
}

export const ConsultationDetails: React.FC<ConsultationDetailsProps> = ({ type }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showFinancial, setShowFinancial] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  const renderStars = (count: number) => (
    <StarRating>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={i < count ? 'currentColor' : 'none'} />
      ))}
    </StarRating>
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <Badge>CNPJ</Badge>
            <h1>99.999.999/9999-99</h1>
          </div>
          <HeaderActions>
            <Button variant="secondary">
              <Mail size={16} />
              Compartilhar
            </Button>
            <Button variant="secondary">
              <Download size={16} />
              Exportar
            </Button>
            <Button>Nova consulta</Button>
          </HeaderActions>
        </HeaderContent>
      </Header>

      <TabContainer>
        <Tab active={activeTab === 'basic'} onClick={() => setActiveTab('basic')}>
          <Building2 size={16} />
          Dados Básicos
        </Tab>
        <Tab active={activeTab === 'contacts'} onClick={() => setActiveTab('contacts')}>
          <Phone size={16} />
          Contatos
        </Tab>
        <Tab active={activeTab === 'documents'} onClick={() => setActiveTab('documents')}>
          <FileCheck size={16} />
          Documentos
        </Tab>
        <Tab active={activeTab === 'financial'} onClick={() => setActiveTab('financial')}>
          <DollarSign size={16} />
          Financeiro
        </Tab>
      </TabContainer>

      <TabContent active={activeTab === 'basic'}>
        <MainGrid>
          <Card>
            <CardHeader>
              <CardTitle>
                <Building2 size={20} />
                <h2>Identificação</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              <DataItem>
                <Label>Razão Social</Label>
                <Value>CENTRO DE FORMACAO DE CONDUTORES CENTTER LUZ LTDA-ME</Value>
              </DataItem>
              <DataItem>
                <Label>Nome Fantasia</Label>
                <Value>CENTTER LUZ</Value>
              </DataItem>
              <DataItem>
                <Label>CNPJ</Label>
                <Value>99.999.999/9999-99</Value>
              </DataItem>
              <DataItem>
                <Label>Matriz/Filial</Label>
                <Value>Matriz</Value>
              </DataItem>
              <DataItem>
                <Label>Quantidade de Filiais</Label>
                <Value>2</Value>
              </DataItem>
              <DataItem>
                <Label>Data de Abertura</Label>
                <Value>24/02/2010</Value>
              </DataItem>
              <DataItem>
                <Label>Idade da Empresa</Label>
                <Value>14 anos</Value>
              </DataItem>
              <DataItem>
                <Label>Código IBGE</Label>
                <Value>3550308</Value>
              </DataItem>
              <DataItem>
                <Label>Código Setor</Label>
                <Value>85929</Value>
              </DataItem>
            </DataGrid>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Briefcase size={20} />
                <h2>Atividade Econômica</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              <DataItem>
                <Label>Código Atividade Principal</Label>
                <Value>85.92-9-99</Value>
              </DataItem>
              <DataItem>
                <Label>Descrição Atividade Principal</Label>
                <Value>Ensino de arte e cultura não especificado anteriormente</Value>
              </DataItem>
              <DataItem>
                <Label>Tipo CNAE</Label>
                <Value>Secundário</Value>
              </DataItem>
              <DataItem>
                <Label>Código Natureza Jurídica</Label>
                <Value>206-2</Value>
              </DataItem>
              <DataItem>
                <Label>Ente Federativo Responsável</Label>
                <Value>Não informado</Value>
              </DataItem>
            </DataGrid>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <AlertTriangle size={20} />
                <h2>Status</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              <DataItem>
                <Label>Situação Cadastral</Label>
                <Value className="success">Ativa</Value>
              </DataItem>
              <DataItem>
                <Label>Data Situação Cadastral</Label>
                <Value>24/02/2010</Value>
              </DataItem>
              <DataItem>
                <Label>Risco</Label>
                <Value className="success">Baixo</Value>
              </DataItem>
              <DataItem>
                <Label>Operacionalidade</Label>
                <Value className="success">Ativa</Value>
              </DataItem>
              <DataItem>
                <Label>Restritivo</Label>
                <Value>Não</Value>
              </DataItem>
            </DataGrid>
          </Card>
        </MainGrid>
      </TabContent>

      <TabContent active={activeTab === 'contacts'}>
        <ContactsCard>
          <CardHeader>
            <CardTitle>
              <Phone size={20} />
              <h2>Contatos</h2>
            </CardTitle>
          </CardHeader>

          <PhoneList>
            <PhoneItem>
              <div className="number">
                <Phone size={16} />
                <span>(11) 96535-7919</span>
                <Badge variant="success">WhatsApp</Badge>
              </div>
              <div className="rating">
                {renderStars(4)}
                <Badge variant="info">Principal</Badge>
              </div>
            </PhoneItem>
            <PhoneItem>
              <div className="number">
                <Phone size={16} />
                <span>(11) 98765-4321</span>
              </div>
            </PhoneItem>
          </PhoneList>

          {!showEmail ? (
            <RevealButton onClick={() => setShowEmail(true)}>
              <Eye size={16} />
              <span>Revelar e-mails</span>
              <small>(será debitado 1 crédito)</small>
            </RevealButton>
          ) : (
            <InfoList>
              <InfoItem>
                <Label>E-mail Principal</Label>
                <Value>contato@empresa.com.br</Value>
              </InfoItem>
              <InfoItem>
                <Label>E-mail Secundário</Label>
                <Value>financeiro@empresa.com.br</Value>
              </InfoItem>
              <InfoItem>
                <Label>E-mail Comercial</Label>
                <Value>comercial@empresa.com.br</Value>
              </InfoItem>
            </InfoList>
          )}

          <AddressList>
            <AddressItem>
              <div className="address">
                <MapPin size={16} />
                <div>
                  <strong>Sede</strong>
                  <p>Rua Jose Piragibe, 396</p>
                  <p>Centro - São Paulo/SP</p>
                  <p>CEP: 04521-000</p>
                </div>
              </div>
            </AddressItem>
          </AddressList>
        </ContactsCard>
      </TabContent>

      <TabContent active={activeTab === 'documents'}>
        <MainGrid>
          <Card>
            <CardHeader>
              <CardTitle>
                <FileCheck size={20} />
                <h2>Status dos Documentos</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              <DataItem>
                <Label>Documento Original CNPJ</Label>
                <Value className="success">Sim</Value>
              </DataItem>
              <DataItem>
                <Label>Documento Válido</Label>
                <Value className="success">Sim</Value>
              </DataItem>
              <DataItem>
                <Label>Data Base</Label>
                <Value>01/03/2024</Value>
              </DataItem>
              <DataItem>
                <Label>Data Abertura IE</Label>
                <Value>24/02/2010</Value>
              </DataItem>
              <DataItem>
                <Label>IE</Label>
                <Value>123456789</Value>
              </DataItem>
              <DataItem>
                <Label>IE Tipo</Label>
                <Value>Normal</Value>
              </DataItem>
              <DataItem>
                <Label>Produtor Rural</Label>
                <Value>Não</Value>
              </DataItem>
              <DataItem>
                <Label>MEI</Label>
                <Value>Não</Value>
              </DataItem>
              <DataItem>
                <Label>Simples Nacional</Label>
                <Value>Sim</Value>
              </DataItem>
            </DataGrid>
          </Card>
        </MainGrid>
      </TabContent>

      <TabContent active={activeTab === 'financial'}>
        <MainGrid>
          <Card>
            <CardHeader>
              <CardTitle>
                <DollarSign size={20} />
                <h2>Informações Financeiras</h2>
              </CardTitle>
            </CardHeader>
            {!showFinancial ? (
              <RevealButton onClick={() => setShowFinancial(true)}>
                <Eye size={16} />
                <span>Revelar dados financeiros</span>
                <small>(será debitado 2 créditos)</small>
              </RevealButton>
            ) : (
              <DataGrid>
                <DataItem>
                  <Label>Capital Social</Label>
                  <Value>R$ 100.000,00</Value>
                </DataItem>
                <DataItem>
                  <Label>Faturamento Presumido</Label>
                  <Value>R$ 500.000,00 - R$ 1.000.000,00/ano</Value>
                </DataItem>
                <DataItem>
                  <Label>Faixa de Faturamento</Label>
                  <Value>De R$ 360.000,01 até R$ 4.800.000,00</Value>
                </DataItem>
                <DataItem>
                  <Label>Porte da Empresa</Label>
                  <Value>Pequeno Porte</Value>
                </DataItem>
                <DataItem>
                  <Label>Faixa de Funcionários</Label>
                  <Value>10-49</Value>
                </DataItem>
                <DataItem>
                  <Label>Exportadora</Label>
                  <Value>Não</Value>
                </DataItem>
                <DataItem>
                  <Label>Importadora</Label>
                  <Value>Não</Value>
                </DataItem>
              </DataGrid>
            )}
          </Card>
        </MainGrid>
      </TabContent>

      <ActionBar>
        <div className="info">
          <AlertCircle size={16} />
          <span>Última atualização: 01/03/2024 às 15:30</span>
        </div>
        <Button>
          <RefreshCw size={16} />
          Atualizar dados
        </Button>
      </ActionBar>

      {/* <Disclaimer>
        AS INFORMAÇÕES ACIMA CONSULTADAS SÃO DE USO EXCLUSIVO DA EMPRESA DATA STONE
      </Disclaimer> */}
    </Container>
  );
};

export default ConsultationDetails;