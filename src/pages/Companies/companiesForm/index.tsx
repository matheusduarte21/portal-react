import React, { useState } from 'react';
import { Building2, User, Phone, Mail, MapPin, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import {
  Container,
  FormCard,
  FormHeader,
  FormContent,
  FormSection,
  RadioGroup,
  FormFooter
} from '../styles';

export const CompanyForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [contractType, setContractType] = useState('prepaid');

  return (
    <Container>
      <FormCard>
        <FormHeader>
          <h1>Nova Empresa</h1>
        </FormHeader>

        <FormContent>
          <FormSection>
            <h2>Dados da Empresa</h2>
            
            <Input
              label="Nome da Empresa"
              icon={Building2}
              placeholder="Digite o nome da empresa"
              required
            />

            <Input
              label="CNPJ/CPF"
              icon={Building2}
              placeholder="Digite o CNPJ ou CPF"
              required
            />

            <Input
              label="Telefone"
              icon={Phone}
              placeholder="(00) 0000-0000"
              required
            />

            <Input
              label="CEP"
              icon={MapPin}
              placeholder="00000-000"
              required
            />

            <div className="grid-2">
              <Input
                label="Rua"
                icon={MapPin}
                placeholder="Digite o endereço"
                required
              />

              <Input
                label="Bairro"
                icon={MapPin}
                placeholder="Digite o bairro"
                required
              />
            </div>

            <div className="grid-2">
              <Input
                label="Cidade"
                icon={MapPin}
                placeholder="Digite a cidade"
                required
              />

              <Input
                label="Estado"
                icon={MapPin}
                placeholder="Digite o estado"
                required
              />
            </div>

            <RadioGroup>
              <h3>Tipo de Contrato</h3>
              <div>
                <label>
                  <input
                    type="radio"
                    name="contractType"
                    value="prepaid"
                    checked={contractType === 'prepaid'}
                    onChange={(e) => setContractType(e.target.value)}
                  />
                  Pré-pago
                </label>
                <label>
                  <input
                    type="radio"
                    name="contractType"
                    value="postpaid"
                    checked={contractType === 'postpaid'}
                    onChange={(e) => setContractType(e.target.value)}
                  />
                  Pós-pago (faturado)
                </label>
              </div>
            </RadioGroup>

            <div className="form-group">
              <label>Status</label>
              <select className="form-select">
                <option value="active">Ativa</option>
                <option value="inactive">Inativa</option>
              </select>
            </div>
          </FormSection>

          <FormSection>
            <h2>Criar Usuário</h2>

            <div className="grid-2">
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
            </div>

            <Input
              label="Telefone"
              icon={Phone}
              placeholder="(00) 0000-0000"
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
            //   rightIcon={
            //     <button 
            //       onClick={() => setShowPassword(!showPassword)}
            //       type="button"
            //       className="password-toggle"
            //     >
            //       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            //     </button>
            //   }
            />

            <Input
              label="Confirmar senha"
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
            />
          </FormSection>

          <FormFooter>
            <Button variant="secondary" onClick={() => window.history.back()}>
              Cancelar
            </Button>
            <Button type="submit">
              Salvar
            </Button>
          </FormFooter>
        </FormContent>
      </FormCard>
    </Container>
  );
};