import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  transition: transform ${({ theme }) => theme.transitions.default};

  @media (max-width: 768px) {
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  }
`;

export const MobileToggle = styled.button`
  display: none;
  position: absolute;
  right: -48px;
  top: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Header = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Nav = styled.nav`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 0.5rem;
  transition: all ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary}10;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    background: none;
    border: none;
    border-radius: 0.5rem;
    transition: all ${({ theme }) => theme.transitions.default};

    &:hover {
      background: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;