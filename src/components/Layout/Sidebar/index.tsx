import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  Building2,
  HelpCircle,
  User,
  FileText,
  LogOut,
  DollarSign,
  Menu,
  TextSearch,
  Search,
  UserRoundSearch,
  CreditCard,
  Users
} from 'lucide-react';
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Footer,
  MobileToggle,
} from './styles';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <Container isOpen={isOpen}>
      <MobileToggle onClick={onToggle}>
        <Menu size={24} />
      </MobileToggle>

      <Header>
        <Logo>
          <Home size={32} />
          <span>EVERON</span>
        </Logo>
      </Header>

      <Nav>
        <NavItem to="/home" end>
          <Home size={20} />
          <span>Início</span>
        </NavItem>
        
        <NavItem to="/consult">
          <TextSearch size={20} />
          <span>Consultar CPF/CNPJ</span>
        </NavItem>

        <NavItem to="/prospecting"> 
          <UserRoundSearch size={20} />
          <span>Prospecção</span>
        </NavItem>

        <NavItem to="/enriquecimento">
          <Search size={20} />
          <span>Enriquecimento</span>
        </NavItem>
        
        <NavItem to="/profile">
          <User size={20} />
          <span>Perfil</span>
        </NavItem>
        
        <NavItem to="/statement">
          <FileText size={20} />
          <span>Extrato</span>
        </NavItem>

        <NavItem to="/CreditCard">
          <CreditCard size={20} />
          <span>Créditos</span>
        </NavItem>

        <NavItem to="/financial">
          <DollarSign size={20} />
          <span>Financeiro</span>
        </NavItem>

        <NavItem to="/users">
          <Users size={20} />
          <span>Usuários</span>
        </NavItem>

        <NavItem to="/companies">
          <Building2 size={20} />
          <span>Empresas</span>
        </NavItem>

        <NavItem to="/help">
          <HelpCircle size={20} />
          <span>Ajuda</span>
        </NavItem>

      </Nav>

      <Footer>
        <button onClick={handleLogout}>
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </Footer>
    </Container>
  );
};