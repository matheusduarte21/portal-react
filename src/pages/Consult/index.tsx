import React, { useState } from 'react';
import { Search, User2, Building2 } from 'lucide-react';
import { isValidCPF, isValidCNPJ, formatDocument } from '../../utils/Documents';
import { 
  Form, 
  TypeSelector, 
  TypeButton, 
  Input, 
  ErrorMessage,
  SearchButton, 
  Header
} from './styles';


type DocumentType = 'cpf' | 'cnpj';

export const Consult = () => {
  const [document, setDocument] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState<DocumentType>('cpf');

  const validateDocument = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (type === 'cpf' && !isValidCPF(digits)) {
      return 'CPF inválido';
    }
    if (type === 'cnpj' && !isValidCNPJ(digits)) {
      return 'CNPJ inválido';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateDocument(document);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    console.log('Searching for:', document.replace(/\D/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDocument(e.target.value);
    setDocument(formatted);
    setError('');
  };

  const handleTypeChange = (newType: DocumentType) => {
    setType(newType);
    setDocument('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TypeSelector>
        <TypeButton
          type="button"
          active={type === 'cpf'}
          onClick={() => handleTypeChange('cpf')}
        >
          <User2 size={20} />
          Consumidores
        </TypeButton>
        <TypeButton
          type="button"
          active={type === 'cnpj'}
          onClick={() => handleTypeChange('cnpj')}
        >
          <Building2 size={20} />
          Empresas
        </TypeButton>
      </TypeSelector>

      <Input
        type="text"
        value={document}
        onChange={handleChange}
        placeholder={type === 'cpf' ? 'Digite o CPF' : 'Digite o CNPJ'}
        maxLength={18}
        error={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <SearchButton type="submit">
        <Search size={20} />
        <a href="/consult/details">
                  Seguir
        </a>
      </SearchButton>
    </Form>
  );
};