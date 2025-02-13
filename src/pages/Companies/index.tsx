import React, { useState } from 'react';
import { Plus, Search, Filter, DollarSign, Trash2, Check, X } from 'lucide-react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Header,
  HeaderActions,
  TableContainer,
  TableHeader,
  TableFilters,
  FilterDropdown,
  Table,
  StatusBadge,
  ActionButtons,
  Pagination,
  DeleteModal,
  Title
} from './styles';
import { FilterButton } from '../Financial/syles';

export const Companies = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const mockCompanies = [
    {
      id: '999999999',
      name: 'Tech Corp',
      status: 'active',
      consultationCredits: '999.999',
      prospectingCredits: '999.999'
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Empresas</Title>
        <HeaderActions>
          <Button onClick={() => window.location.href = '/companies/new'}>
            Nova Empresa
          </Button>
        </HeaderActions>
      </Header>

      <TableContainer>
        <TableHeader>
          <TableFilters>
            <Input
              label=''
              icon={Search}
              placeholder="Pesquisar empresas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="filter flex items-end">

                <FilterButton className='h-11 p-3' onClick={() => setShowFilters(!showFilters)}>
                              <Filter size={20} />
                              Filtrar
                </FilterButton>

              {showFilters && (
                <FilterDropdown>
                  <h6>Status</h6>
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> Ativa
                    </label>
                    <label>
                      <input type="checkbox" /> Inativa
                    </label>
                  </div>
                  <div className="filter-actions">
                    <Button variant="secondary" onClick={() => setShowFilters(false)}>
                      Cancelar
                    </Button>
                    <Button>Aplicar</Button>
                  </div>
                </FilterDropdown>
              )}
            </div>
          </TableFilters>
        </TableHeader>

        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome da empresa</th>
              <th>Status</th>
              <th>Créditos Consulta</th>
              <th>Créditos Prospecção</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockCompanies.map(company => (
              <tr key={company.id}>
                <td>
                  <a href={`/companies/${company.id}`}>{company.id}</a>
                </td>
                <td>
                  <a href={`/companies/${company.id}`}>{company.name}</a>
                </td>
                <td>
                  <StatusBadge status={company.status}>
                    {company.status === 'active' ? (
                      <><Check size={16} /> Ativa</>
                    ) : (
                      <><X size={16} /> Inativa</>
                    )}
                  </StatusBadge>
                </td>
                <td>{company.consultationCredits}</td>
                <td>{company.prospectingCredits}</td>
                <td>
                  <ActionButtons>
                    <button title="Transferir créditos">
                      <DollarSign size={16} />
                    </button>
                    <button 
                      title="Excluir"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </ActionButtons>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <div className="per-page">
            <span>Exibir</span>
            <select>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>por página</span>
          </div>

          <div className="pages">
            <button>Anterior</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Próximo</button>
          </div>
        </Pagination>
      </TableContainer>

      {showDeleteModal && (
        <DeleteModal>
          <div className="modal-content">
            <h2>Confirmar Exclusão</h2>
            <p>Esta operação não poderá ser desfeita.</p>
            <div className="modal-actions">
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setShowDeleteModal(false)}>
                Confirmar Exclusão
              </Button>
            </div>
          </div>
        </DeleteModal>
      )}
    </Container>
  );
};