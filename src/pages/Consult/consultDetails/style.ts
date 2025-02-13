import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const Sidebar = styled.aside``;

export const Content = styled.main``;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }
`;

export const DataGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

export const DataItem = styled.div`
  display: grid;
  gap: 0.25rem;

  .success {
    color: #10b981;
  }
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const Value = styled.span`
  font-size: 1rem;
  color: #1f2937;
`;

export const ContactsCard = styled(Card)``;

export const PhoneList = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const PhoneItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;

  .number {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const AddressList = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const AddressItem = styled.div`
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;

  .address {
    display: flex;
    gap: 0.5rem;
  }

  strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  p {
    margin: 0;
    color: #4b5563;
  }
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    background: white;
    cursor: pointer;

    &.active {
      background: #10b981;
      color: white;
      border-color: #10b981;
    }
  }
`;

export const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #fbbf24;
`;

export const Badge = styled.span<{ variant?: 'success' | 'info' }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;

  ${({ variant }) => {
    switch (variant) {
      case 'success':
        return 'background: #d1fae5; color: #059669;';
      case 'info':
        return 'background: #dbeafe; color: #2563eb;';
      default:
        return 'background: #f3f4f6; color: #6b7280;';
    }
  }}
`;

export const RevealButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: 1px dashed #e5e7eb;
  border-radius: 4px;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #d1d5db;
    background: #f3f4f6;
  }

  span {
    font-weight: 500;
  }

  small {
    color: #6b7280;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const Tab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-bottom: 2px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  background: transparent;
  color: ${({ active, theme }) => active ? theme.colors.primary  : theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.primary};
  }
`;

export const TabContent = styled.div<{ active: boolean }>`
  display: ${({ active }) => active ? 'block' : 'none'};
`;

export const InfoList = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export const InfoItem = styled.div`
  display: grid;
  gap: 0.25rem;

  small {
    color: #6b7280;
  }
`;

export const ExpandButton = styled.button`
  color: #3b82f6;
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;

  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
  }
`;

export const Disclaimer = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #6b7280;
`;

export const Button = styled.button<{ variant?: 'secondary' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant }) =>
    variant === 'secondary'
      ? `
    background: white;
    border: 1px solid #e5e7eb;
    color: #6b7280;

    &:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }
  `
      : `
    background: #3b82f6;
    border: none;
    color: white;

    &:hover {
      background: #2563eb;
    }
  `}
`;