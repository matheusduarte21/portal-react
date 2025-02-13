import React from 'react';
import { MapPin, CreditCard, User, X } from 'lucide-react';
import { Button } from '../../../components/Button';
import {
  Container,
  Header,
  Title,
  ResultCard,
  ResultsOverview,
  ResultCount,
  StatsGrid,
  StatCard,
  StatTitle,
  StatContent,
  SelectedAttributes,
  AttributeTag,
  Footer
} from './style';

export const ProspectingResults = () => {
  const selectedAttributes = [
    'Consumidores',
    'São Paulo',
    'Feminino',
    '20 - 35',
    'R$ 4000,00 - R$ 8000,00'
  ];

  return (
    <Container>
      <Header>
        <Title>Resultado</Title>
      </Header>

      <ResultCard>
        <ResultsOverview>
          <ResultCount>600.000 registros</ResultCount>
          
          <StatsGrid>
            <StatCard>
              <StatTitle>
                <MapPin size={20} />
                Localização
              </StatTitle>
              <StatContent>
                <div><strong>60%</strong> Capital</div>
                <div><strong>30%</strong> Interior</div>
                <div><strong>10%</strong> Litoral</div>
              </StatContent>
            </StatCard>

            <StatCard>
              <StatTitle>
                <User size={20} />
                Faixa Etária
              </StatTitle>
              <StatContent>
                <div><strong>25%</strong> 61-71 anos</div>
                <div><strong>75%</strong> 51-61 anos</div>
              </StatContent>
            </StatCard>

            <StatCard>
              <StatTitle>
                <CreditCard size={20} />
                Faixa de Renda Presumida
              </StatTitle>
              <StatContent className="income">
                <div>
                  <strong>25%</strong>
                  <span>R$ 4.000,00 - R$ 6.000,00</span>
                </div>
                <div>
                  <strong>40%</strong>
                  <span>R$ 6.000,00 - R$ 8.000,00</span>
                </div>
              </StatContent>
            </StatCard>
          </StatsGrid>
        </ResultsOverview>

        <SelectedAttributes>
          <h3>Atributos selecionados:</h3>
          <div>
            {selectedAttributes.map((attribute) => (
              <AttributeTag key={attribute}>
                {attribute}
                <button>
                  <X size={16} />
                </button>
              </AttributeTag>
            ))}
          </div>
        </SelectedAttributes>

        <Footer>
          <Button variant="secondary"  className='mr-10' onClick={() => window.history.back()}>
            Voltar
          </Button>
          <Button>
            <a href="/prospeccao/extraction">Seguir</a>
          </Button>
        </Footer>
      </ResultCard>
    </Container>
  );
};