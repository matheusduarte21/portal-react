
import { Search, CreditCard, Shield,UserRoundSearch } from 'lucide-react';
import {
  Container,
  HeroSection,
  Title,
  Subtitle,
  ServicesGrid,
  ServiceCard,
  Disclaimer,
  CardTitle,
  CardDescription
} from './styles';

export const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Consultas',
      description: 'Acesso rápido e seguro a informações cadastrais completas'
    },
    {
      icon:UserRoundSearch ,
      title: 'Prospecção',
      description: 'Ferramentas avançadas para identificação de leads qualificados'
    },
    {
      icon: CreditCard,
      title: 'Créditos',
      description: 'Adicione créditos para realizar mais consultas quando precisar'
    },
    {
      icon: Shield,
      title: 'Verificação',
      description: 'Validação precisa de dados cadastrais e documentos'
    }
  ];

  return (
    <Container>
      <HeroSection>
        <Title>Soluções em Dados para seu Negócio</Title>
        <Subtitle>
          Informações precisas e atualizadas para tomada de decisões estratégicas
        </Subtitle>
      </HeroSection>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <service.icon size={32} className="text-primary" />
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <Disclaimer>
        Todas as informações disponibilizadas nesta ferramenta são de uso exclusivo 
        da empresa contratante. A utilização por outra empresa ou pessoa é de 
        responsabilidade da empresa contratante. A SMData está isenta de qualquer 
        responsabilidade civil ou criminal.
      </Disclaimer>
    </Container>
  );
};