import  { useState } from 'react';
import { Check, ArrowLeft, ArrowRight, Shield, Users,  Phone } from 'lucide-react';
import { Button } from '../../../components/Button';
import {
  Container,
  Header,
  Title,
  ExtractionCard,
  PlanGrid,
  PlanCard,
  PlanHeader,
  PlanPrice,
  PlanFeatures,
  FeatureItem,
  Footer,
  Disclaimer
} from './style';

type Plan = 'basic' | 'intermediate' | 'premium';

interface PlanFeature {
  id: string;
  description: string;
  includedIn: Plan[];
}

export const ProspectingExtraction = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('basic');

  const features: PlanFeature[] = [
    {
      id: 'basic-info',
      description: 'CPF, Nome Completo, Endereço Principal, Telefones (até 3), Idade, Data de Nascimento, Sexo',
      includedIn: ['basic', 'intermediate', 'premium']
    },
    {
      id: 'additional-info',
      description: 'Endereços Adicionais, Telefones Extras, Nome da Mãe, Profissão, Escolaridade',
      includedIn: ['intermediate', 'premium']
    },
    {
      id: 'premium-info',
      description: 'Renda Estimada, Nome na Base Fiscal, Situação Cadastral do CPF',
      includedIn: ['premium']
    }
  ];

  const plans = [
    {
      id: 'basic',
      title: 'Básico',
      icon: Users,
      credits: 1,
      color: 'blue'
    },
    {
      id: 'intermediate',
      title: 'Intermediário',
      icon: Phone,
      credits: 2,
      color: 'purple'
    },
    {
      id: 'premium',
      title: 'Premium',
      icon: Shield,
      credits: 3,
      color: 'gold'
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Extração</Title>
      </Header>

      <ExtractionCard>
        <PlanGrid>
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id}
              $isSelected={selectedPlan === plan.id as Plan}
              $color={plan.color}
              onClick={() => setSelectedPlan(plan.id as Plan)}
            >
              <PlanHeader>
                <plan.icon size={24} />
                <h3>{plan.title}</h3>
              </PlanHeader>

              <PlanPrice>
                <span>{plan.credits}</span>
                crédito{plan.credits > 1 ? 's' : ''} por registro
              </PlanPrice>

              <PlanFeatures>
                {features.map((feature) => (
                  <FeatureItem 
                    key={feature.id}
                    $isIncluded={feature.includedIn.includes(plan.id as Plan)}
                  >
                    <Check size={16} />
                    {feature.description}
                  </FeatureItem>
                ))}
              </PlanFeatures>
            </PlanCard>
          ))}
        </PlanGrid>

        <Footer>
          <Button variant="secondary"   className='mr-10' onClick={() => window.history.back()}>
            <ArrowLeft size={16} />
            Voltar
          </Button>
          <Button onClick={() => window.location.href = '/prospeccao/purchase'}>
            Avançar
            <ArrowRight size={16} />
          </Button>
        </Footer>
      </ExtractionCard>

      <Disclaimer>
        Todos os dados são obtidos de fontes públicas e verificados regularmente para garantir a precisão das informações.
      </Disclaimer>
    </Container>
  );
};