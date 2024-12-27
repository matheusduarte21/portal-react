import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroSection = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 600px;
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all ${({ theme }) => theme.transitions.default};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.5;
`;

export const Disclaimer = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  max-width: 800px;
  margin: 2rem auto;
  line-height: 1.5;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;