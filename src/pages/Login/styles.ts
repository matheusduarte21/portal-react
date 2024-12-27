import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}cc, ${({ theme }) => theme.colors.secondary}80);
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 24rem;
  position: relative;
  z-index: 1;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white}e5;
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.white}80;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}e5, ${({ theme }) => theme.colors.secondary}e5);
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.white}50;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;