import styled from 'styled-components';

// Shared styles
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
`;

// List styles
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  // h1 {
  //   font-size: 2rem;
  //   font-weight: 700;
  //   background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

export const TableHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const TableFilters = styled.div`
  display: flex;
  gap: 1rem;

  .filter {
    position: relative;
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 1rem;
  margin-top: 0.5rem;
  min-width: 200px;
  z-index: 10;

  h6 {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 0.75rem;
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.gray[700]};
      font-size: 0.875rem;
    }
  }

  .filter-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem 1.5rem;
    text-align: left;
  }

  th {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  td {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${({ status, theme }) => 
    status === 'active' 
      ? `
        background: ${theme.colors.primary}15;
        color: ${theme.colors.primary};
      `
      : `
        background: ${theme.colors.gray[200]};
        color: ${theme.colors.gray[700]};
      `
  }
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
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[700]};
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[200]};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  .per-page {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[600]};
    font-size: 0.875rem;

    select {
      padding: 0.25rem 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};
      border-radius: 0.25rem;
    }
  }

  .pages {
    display: flex;
    gap: 0.25rem;

    button {
      min-width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};
      border-radius: 0.25rem;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray[700]};
      font-size: 0.875rem;
      transition: all 0.2s;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
      }

      &.active {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const DeleteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;

  .modal-content {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: 400px;

    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray[900]};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.gray[600]};
      margin-bottom: 1.5rem;
    }

    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }
  }
`;

// Form styles
export const FormCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export const FormContent = styled.div`
  padding: 2rem;

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem; // Increased from 1rem
    margin-bottom: 2rem; // Added margin bottom for grid sections
  }

  .password-toggle {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
    padding: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 2rem; // Added margin bottom
  }

  > div:not(.grid-2) {
    margin-bottom: 2rem; // Add spacing between non-grid elements
  }
`;

export const FormSection = styled.section`
  margin-bottom: 3rem; // Increased from 2rem
  padding-bottom: 3rem; // Increased from 2rem
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 2rem; // Increased from 1.5rem
  }

  .form-group {
    margin-bottom: 2rem; // Increased from 1rem

    label {
      display: block;
      margin-bottom: 0.75rem; // Increased from 0.5rem
      font-size: 0.875rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }

  // Add spacing after each Input component
  .input-wrapper {
    margin-bottom: 2rem;
  }

  // Remove margin from last element
  *:last-child {
    margin-bottom: 0;
  }
`;

export const RadioGroup = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 0.75rem;
  }

  div {
    display: flex;
    gap: 2rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    cursor: pointer;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
`;


