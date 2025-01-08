import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 0 2rem;
`;

interface StepProps {
  $active: boolean;
}

export const Step = styled.div<StepProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const StepIcon = styled.div<StepProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $active, theme }) =>
    $active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : theme.colors.gray[200]};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.gray[500])};
  transition: all 0.3s ease;
`;

export const StepLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StepConnector = styled.div<StepProps>`
  width: 100px;
  height: 2px;
  background: ${({ $active, theme }) =>
    $active ? `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` : theme.colors.gray[200]};
  margin: 0 1rem;
  transition: all 0.3s ease;
`;

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 2rem;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Sidebar = styled.div``;

export const FileUpload = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.gray[300]};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}05;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  input {
    display: none;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  div {
    display: flex;
    gap: 2rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const PriceTag = styled.div`
  background: ${({ theme }) => theme.colors.primary}10;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[700]};

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const InstructionCard = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 1rem;
  padding: 1.5rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 1.5rem;
  }

  h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[600]};
    margin: 1rem 0 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[600]};
      margin-bottom: 0.25rem;

      &:before {
        content: "•";
        color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.5rem;
      }
    }
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 0.5rem;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
