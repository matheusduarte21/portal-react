import styled from 'styled-components';

export const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  margin: 1.5rem 0;
  border: 1px solid rgba(82, 0, 160, 0.1);
  backdrop-filter: blur(8px);
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(
    to right,
    rgba(82, 0, 160, 0.02),
    rgba(60, 171, 224, 0.02)
  );
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Balance = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 24px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 4px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 0.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};
  font-size: 0.95rem;
  width: 280px;
  background: ${({ theme }) => theme.colors.gray[50]};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}10;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const Th = styled.th`
  padding: 1.25rem 1rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  &:first-child {
    padding-left: 2rem;
  }

  &:last-child {
    padding-right: 2rem;
    text-align: right;
  }
`;

export const Td = styled.td<{ isCredit?: boolean }>`
  padding: 1.25rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;

  &:first-child {
    padding-left: 2rem;
    font-family: monospace;
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  &:last-child {
    padding-right: 2rem;
    text-align: right;
    font-weight: 600;
    color: ${({ theme, isCredit }) => 
      isCredit ? theme.colors.secondary : theme.colors.gray[700]};
  }
`;

export const Tr = styled.tr`
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      rgba(82, 0, 160, 0.02),
      rgba(60, 171, 224, 0.02)
    );
  }

  &:last-child td {
    border-bottom: none;
  }
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme, active }) => 
    active ? theme.colors.primary : 'transparent'};
  border-radius: 8px;
  background: ${({ theme, active }) => 
    active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primary}dd)` : 'transparent'};
  color: ${({ theme, active }) => 
    active ? theme.colors.white : theme.colors.gray[700]};
  transition: all 0.2s ease;
  font-weight: ${({ active }) => active ? '600' : '500'};
  font-size: 0.9rem;

  &:hover:not(:disabled) {
    background: ${({ theme, active }) => 
      active 
        ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primary}dd)`
        : theme.colors.gray[100]};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const Select = styled.select`
  padding: 0.75rem 2rem 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  appearance: none;
  background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 0.5rem center;
  background-size: 1.25rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary}10;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconButton = styled.button`
  padding: 0.75rem;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;