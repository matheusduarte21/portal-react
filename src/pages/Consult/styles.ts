import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: ${({ theme }) => theme.colors.gray[700]};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const TypeSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 0.75rem;
`;

interface TypeButtonProps {
  active: boolean;
}

export const TypeButton = styled.button<TypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: ${({ theme, active }) => active ? theme.colors.white : 'transparent'};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.gray[600]};
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: ${({ active }) => active ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none'};

  svg {
    transition: color 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface InputProps {
  error?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.gray[200]};
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.gray[50]};

  &:focus {
    outline: none;
    border-color: ${({ theme, error }) => 
      error ? theme.colors.error : theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 4px ${({ theme, error }) => 
      error ? theme.colors.error + '15' : theme.colors.primary + '15'};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin-top: -0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⚠️';
    font-size: 1rem;
  }
`;