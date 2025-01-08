import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[200]};
`;

interface TabProps {
  $active: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: 1rem 2rem;
  font-weight: 600;
  color: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.gray[600]};
  border: none;
  background: none;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ $active, theme }) => 
      $active ? `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` : 'transparent'};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.gray[50]};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

interface StatusProps {
  variant: 'processing' | 'error' | 'completed';
}

export const Status = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'processing':
        return `
          color: ${theme.colors.primary};
          width: 100%;
        `;
      case 'error':
        return `
          color: ${theme.colors.error};
          font-weight: 500;
        `;
      case 'completed':
        return `
          color: ${theme.colors.gray[700]};
          justify-content: space-between;
        `;
    }
  }}
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[600]};
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[200]};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 24px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 1rem;
  overflow: hidden;
`;

const progressAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 30px 0;
  }
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  color: #111;
  font-size: 0.875rem;
  font-weight: 500;
  background: linear-gradient(
  45deg,
  #999 25%,  
  #FFFFFF 25%,  
  #FFFFFF 50%,  
  #999 50%,  
  #999 75%,  
  #FFFFFF 75%
);

  background-size: 30px 30px;
  animation: ${progressAnimation} 1s linear infinite;
  transition: width 0.3s ease;
`;