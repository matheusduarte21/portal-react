import React, { useState } from 'react';
import { 
  Search, Filter, Plus, Key, Trash2, Check, X,
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
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
  DeleteModal
} from '../styles';
import { FilterButton } from '../../Financial/syles';

export const UserList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const mockUsers = [
    {
      id: '999999999',
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      phone: '(11) 99999-9999',
      email: 'john@example.com',
      company: 'Tech Corp',
      status: 'active'
    },
    // Add more mock users as needed
  ];

  return (
    <Container>
      <Header>
        <h1>Usuários</h1>
        <HeaderActions>
          <Button className='flex items-center justify-center'>
            <Plus size={20}  />
            <a href='/users/new'>Novo Usuário</a>
          </Button>
        </HeaderActions>
      </Header>

      <TableContainer>
        <TableHeader>
          <TableFilters>
            <Input
              label='Pesquisar'
              icon={Search}
              placeholder="Pesquisar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className=" h-auto flex justify-center items-end">
              <FilterButton className='h-11 p-3' onClick={() => setShowFilters(!showFilters)}>
                            <Filter size={20} />
                            Filtrar
              </FilterButton>

              {showFilters && (
                <FilterDropdown>
                  <h6>Status</h6>
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> Ativo
                    </label>
                    <label>
                      <input type="checkbox" /> Inativo
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
              <th>Usuário</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Empresa</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>
                  <StatusBadge status={user.status}>
                    {user.status === 'active' ? (
                      <><Check size={16} /> Ativo</>
                    ) : (
                      <><X size={16} /> Inativo</>
                    )}
                  </StatusBadge>
                </td>
                <td>
                  <ActionButtons>
                    <button title="Resetar senha">
                      <Key size={16} />
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
            <button><ChevronLeft size={16} /></button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button><ChevronRight size={16} /></button>
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