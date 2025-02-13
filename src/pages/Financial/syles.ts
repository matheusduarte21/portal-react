import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  background: white;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FilterMenu = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const FilterSection = styled.div`
  margin-bottom: 1.5rem;

  h6 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  th {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 600;
    text-align: left;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

    &:first-child {
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;

    &:first-child {
      padding-left: 1.5rem;
      font-family: monospace;
      color: ${({ theme }) => theme.colors.gray[600]};
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }

  tbody tr {
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.gray[50]};
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

export const StatusBadge = styled.div<{ type: 'success' | 'warning' | 'error' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;

  ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return `
          background: #dcfce7;
          color: #166534;
        `;
      case 'warning':
        return `
          background: #fef9c3;
          color: #854d0e;
        `;
      case 'error':
        return `
          background: #fee2e2;
          color: #991b1b;
        `;
    }
  }}

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ActionButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.gray[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.gray[200]};
  border-radius: 0.375rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : 'white'};
  color: ${({ active, theme }) =>
    active ? 'white' : theme.colors.gray[700]};
  font-size: 0.875rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ active, theme }) =>
      active ? 'white' : theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.375rem;
  background: white;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.875rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;