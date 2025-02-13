import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

export const ExtractionCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface PlanCardProps {
  $isSelected: boolean;
  $color: string;
}

const getColorScheme = (color: string, theme: any) => {
  const schemes = {
    blue: {
      primary: theme.colors.primary,
      gradient: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
      light: `${theme.colors.primary}10`
    },
    purple: {
      primary: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6, #D946EF)',
      light: '#8B5CF610'
    },
    gold: {
      primary: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
      light: '#F59E0B10'
    }
  };

  return schemes[color as keyof typeof schemes] || schemes.blue;
};

export const PlanCard = styled.div<PlanCardProps>`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme, $isSelected, $color }) => 
    $isSelected ? getColorScheme($color, theme).light : theme.colors.white};
  border: 2px solid ${({ theme, $isSelected, $color }) => 
    $isSelected ? getColorScheme($color, theme).primary : theme.colors.gray[200]};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme, $color }) => getColorScheme($color, theme).primary};
  }
`;

export const PlanHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    padding: 0.5rem;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const PlanPrice = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.875rem;

  span {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
  }
`;

export const PlanFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface FeatureItemProps {
  $isIncluded: boolean;
}

export const FeatureItem = styled.div<FeatureItemProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme, $isIncluded }) => 
    $isIncluded ? theme.colors.gray[700] : theme.colors.gray[400]};

  svg {
    margin-top: 0.25rem;
    color: ${({ theme, $isIncluded }) => 
      $isIncluded ? theme.colors.primary : theme.colors.gray[300]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Disclaimer = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 0.875rem;
  max-width: 600px;
  margin: 0 auto;
`;