import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}cc, ${({ theme }) => theme.colors.secondary}80);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 24rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white}e5;
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
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

export const Footer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;