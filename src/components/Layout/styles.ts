import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

interface MainProps {
  isSidebarOpen: boolean;
}

export const Main = styled.main<MainProps>`
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '280px' : '0')};
  padding: 2rem;
  transition: margin-left ${({ theme }) => theme.transitions.default};

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;