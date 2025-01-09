import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-top: 0.5rem;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DataGrid = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const Value = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: 500;

  &.success {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.highlight {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const PhoneList = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PhoneItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.75rem;

  .number {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const AddressList = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressItem = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  .address {
    display: flex;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[700]};

    strong {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[900]};
      display: block;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.4;
    }
  }
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: 0.875rem;
    transition: all 0.2s ease;

    &.active {
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Badge = styled.span<{ variant?: 'default' | 'success' | 'info' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ variant = 'default', theme }) => {
    switch (variant) {
      case 'success':
        return `
          background: ${theme.colors.primary}15;
          color: ${theme.colors.primary};
        `;
      case 'info':
        return `
          background: ${theme.colors.secondary}15;
          color: ${theme.colors.secondary};
        `;
      default:
        return `
          background: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
        `;
    }
  }}
`;

export const RevealButton = styled.button`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px dashed ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: all 0.2s ease;

  span {
    font-weight: 500;
  }

  small {
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-left: auto;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}05;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: 0.875rem;
  }
`;

export const Disclaimer = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[500]};
  margin-top: 2rem;
`;