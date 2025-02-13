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
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const ResultCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 2rem;
`;

export const ResultsOverview = styled.div`
  margin-bottom: 2rem;
`;

export const ResultCount = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const StatCard = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.75rem;
`;

export const StatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 1rem;
  text-transform: uppercase;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.income {
    div {
      flex-direction: column;
      align-items: flex-start;
      text-align: center;
      
      strong {
        font-size: 1.25rem;
      }
      
      span {
        font-size: 0.875rem;
      }
    }
  }
`;

export const SelectedAttributes = styled.div`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`;

export const AttributeTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.875rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  a {
    color: inherit;
    text-decoration: none;
  }
`;