import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const PurchaseCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 2rem;
  max-width: 100%;
`;

export const PlanInfo = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 0.5rem;
  }

  small {
    display: block;
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-top: 0.5rem;
  }
`;

export const PlanFeatures = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};
  line-height: 1.5;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;

  small {
    display: block;
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-top: 0.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

export const CreditInfo = styled.div`
  margin-bottom: 2rem;

  .credits {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem 0;
  }

  small {
    display: block;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const ConfirmationModal = styled.div`
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
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 500px;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;