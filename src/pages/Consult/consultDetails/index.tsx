import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Star, Download, Building2, User, Eye,
  RefreshCw,  AlertCircle
} from 'lucide-react';
import { Button } from '../../../components/Button';
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
  ActionBar,
  Disclaimer
} from './style';

interface ConsultationDetailsProps {
  type: 'consumer' | 'company';
}

export const ConsultationDetails: React.FC<ConsultationDetailsProps> = ({ type }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPartners, setShowPartners] = useState(false);
  const [showIncome, setShowIncome] = useState(false);

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
            <Badge>{type === 'consumer' ? 'CPF' : 'CNPJ'}</Badge>
            <h1>{type === 'consumer' ? '331.031.678-57' : '99.999.999/9999-99'}</h1>
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
            <Button onClick={() => window.history.back()}>Nova consulta</Button>
          </HeaderActions>
        </HeaderContent>
      </Header>

      <MainGrid>
        <Sidebar>
          <Card>
            <CardHeader>
              <CardTitle>
                <User size={20} />
                <h2>Identificação</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              {type === 'consumer' ? (
                <>
                  <DataItem>
                    <Label>Nome completo</Label>
                    <Value>Richard Willians Casarin</Value>
                  </DataItem>
                  <DataItem>
                    <Label>Data de nascimento</Label>
                    <Value>28/02/1986</Value>
                  </DataItem>
                  <DataItem>
                    <Label>Situação</Label>
                    <Value className="success">Ativo</Value>
                  </DataItem>
                </>
              ) : (
                <>
                  <DataItem>
                    <Label>Razão Social</Label>
                    <Value>CENTRO DE FORMACAO DE CONDUTORES CENTTER LUZ LTDA-ME</Value>
                  </DataItem>
                  <DataItem>
                    <Label>Nome Fantasia</Label>
                    <Value>CENTTER LUZ</Value>
                  </DataItem>
                  <DataItem>
                    <Label>Data de abertura</Label>
                    <Value>24/02/2010</Value>
                  </DataItem>
                </>
              )}
            </DataGrid>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Building2 size={20} />
                <h2>Informações adicionais</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              {!showIncome ? (
                <RevealButton onClick={() => setShowIncome(true)}>
                  <Eye size={16} />
                  <span>Revelar informações financeiras</span>
                  <small>(será debitado 1 crédito)</small>
                </RevealButton>
              ) : (
                <>
                  <DataItem>
                    <Label>Faixa de renda</Label>
                    <Value>R$ 3.000,00 a R$ 4.999,99</Value>
                  </DataItem>
                  <DataItem>
                    <Label>Score</Label>
                    <Value className="highlight">780</Value>
                  </DataItem>
                </>
              )}
            </DataGrid>
          </Card>
        </Sidebar>

        <Content>
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
                  <span>(11) 96535-7919</span>
                </div>
                <div className="rating">
                  {renderStars(3)}
                </div>
              </PhoneItem>
            </PhoneList>

            <AddressList>
              <AddressItem>
                <div className="address">
                  <MapPin size={16} />
                  <div>
                    <strong>Endereço principal</strong>
                    <p>Rua Jose Piragibe, 396 Ap 21 - Cep 04521-000 - São Paulo - SP</p>
                  </div>
                </div>
                <ConfirmationButtons>
                  <button className="active">Confirmado</button>
                  <button>Não confirmado</button>
                </ConfirmationButtons>
              </AddressItem>
            </AddressList>

            {!showEmail ? (
              <RevealButton onClick={() => setShowEmail(true)}>
                <Mail size={16} />
                <span>Revelar e-mail</span>
                <small>(será debitado 1 crédito)</small>
              </RevealButton>
            ) : (
              <DataItem>
                <Label>E-mail</Label>
                <Value>rwcasarin@gmail.com</Value>
              </DataItem>
            )}
          </ContactsCard>

          <Card>
            <CardHeader>
              <CardTitle>
                <AlertCircle size={20} />
                <h2>Alertas e restrições</h2>
              </CardTitle>
            </CardHeader>
            <DataGrid>
              <Badge variant="success">Sem restrições ativas</Badge>
            </DataGrid>
          </Card>
        </Content>
      </MainGrid>

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

      <Disclaimer>
        AS INFORMAÇÕES ACIMA CONSULTADAS SÃO DE USO EXCLUSIVO DA EMPRESA DATA STONE
      </Disclaimer>
    </Container>
  );
};