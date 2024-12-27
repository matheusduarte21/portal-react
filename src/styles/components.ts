import styled from 'styled-components';

// Shared styled components that can be reused across pages
export const PageContainer = styled.div`
  padding: 2rem;
`;

export const PageHeader = styled.header`
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;