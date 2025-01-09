import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 2rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 600px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};
    margin-bottom: 1rem;
  }
`;

export const ProfileSelector = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

interface ProfileOptionProps {
  $active: boolean;
}

export const ProfileOption = styled.button<ProfileOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.gray[200]};
  border-radius: 0.75rem;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary + '10' : theme.colors.white};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.gray[600]};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactChannels = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

export const Channel = styled.div`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + label {
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary + '10'};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[600]};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LocationTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[200]};
`;

interface LocationTabProps {
  $active: boolean;
}

export const LocationTab = styled.button<LocationTabProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: none;
  border: none;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.gray[600]};
  font-weight: 500;
  position: relative;
  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ $active, theme }) => 
      $active ? `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})` : 'transparent'};
    transition: all 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LocationContent = styled.div`
  min-height: 300px;
`;

export const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

export const RegionOption = styled.div`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + label {
      border-color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary + '10'};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  label {
    display: block;
    padding: 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[600]};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SearchableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    max-height: 300px;
    overflow-y: auto;
    padding: 0.5rem;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;