import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const CreditSection = styled.section`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const PaymentSection = styled(CreditSection)``;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const CreditTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th {
    padding: 1rem;
    text-align: left;
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const PaymentMethod = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ selected, theme }) =>
    selected ? `${theme.colors.primary}10` : 'white'};
  border: 2px solid ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.gray[200]};
  border-radius: 12px;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => `${theme.colors.primary}10`};
  }

  svg {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.gray[500]};
  }

  span {
    font-weight: 500;
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.text};
  }
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 12px;
  margin-top: 2rem;

  span {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  strong {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;