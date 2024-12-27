import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.default};
  border: none;
  outline: none;

  ${({ variant = 'primary', theme }) =>
    variant === 'primary'
      ? css`
          background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary});
          color: ${theme.colors.white};

          &:hover {
            opacity: 0.9;
          }
        `
      : css`
          background: ${theme.colors.white};
          color: ${theme.colors.gray[700]};
          border: 1px solid ${theme.colors.gray[300]};

          &:hover {
            background: ${theme.colors.gray[100]};
          }
        `}
`;