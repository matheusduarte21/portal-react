import React, { useState } from 'react';
import { Building2, Eye, EyeOff, User, Search, Phone, Mail, Lock } from 'lucide-react';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import {
  Container,
  FormCard,
  FormHeader,
  FormContent,
  CompanySelector,
  CompanyDropdown,
  SearchInput,
  CompanyList,
  CompanyActions,
  FormFooter,
} from '../../styles';

export const UserForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <Container>
    <FormCard>
        <FormHeader>
          <h1>Novo Usuário</h1>
        </FormHeader>

        <FormContent>
          <CompanySelector>
            <label>Empresa</label>
            <div className="selector">
              <button 
                className="company-button"
                onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
              >
                {selectedCompany || 'Selecione a empresa'}
                <Building2 size={20} />
              </button>

              {showCompanyDropdown && (
                <CompanyDropdown>
                  <SearchInput>
                    <Input
                      icon={Search}
                      label='Pesquisar'
                      placeholder="Pesquisar empresa..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </SearchInput>

                  <CompanyList>
                    <button onClick={() => setSelectedCompany('Empresa 1')}>Empresa 1</button>
                    <button onClick={() => setSelectedCompany('Empresa 2')}>Empresa 2</button>
                    <button onClick={() => setSelectedCompany('Empresa 3')}>Empresa 3</button>
                  </CompanyList>

                  <CompanyActions>
                    <Button variant="secondary" onClick={() => setShowCompanyDropdown(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setShowCompanyDropdown(false)}>
                      Selecionar
                    </Button>
                  </CompanyActions>
                </CompanyDropdown>
              )}
            </div>
          </CompanySelector>

          <Input
            label="Nome"
            icon={User}
            placeholder="Digite o nome"
            required
          />

          <Input
            label="Sobrenome"
            icon={User}
            placeholder="Digite o sobrenome"
            required
          />

          <Input
            label="Telefone"
            icon={Phone}
            placeholder="(00) 00000-0000"
            required
          />

          <Input
            label="E-mail"
            icon={Mail}
            type="email"
            placeholder="exemplo@email.com"
            required
          />

          <Input
            label="Usuário"
            icon={User}
            placeholder="Nome de usuário"
            required
          />

          <Input
            label="Senha"
            icon={Lock}
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            required
            // rightIcon={
            //   <button 
            //     onClick={togglePasswordVisibility}
            //     type="button"
            //     className="password-toggle"
            //   >
            //     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            //   </button>
            // }
          />

          <Input
            label="Confirmar senha"
            icon={Lock}
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            required
          />

          <div className="form-group">
            <label>Status</label>
            <select className="form-select">
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </select>
          </div>
        </FormContent>

        <FormFooter>
          <Button variant="secondary">Cancelar</Button>
          <Button>Salvar</Button>
        </FormFooter>
        
      </FormCard>
    </Container>

  );
};

