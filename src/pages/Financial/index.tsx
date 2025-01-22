import React, { useState } from 'react';
import { Search, Filter, Upload, Printer, Clock, CheckCircle2, XCircle } from 'lucide-react';
import {
  Container,
  Header,
  SearchContainer,
  FilterButton,
  FilterMenu,
  FilterSection,
  Table,
  StatusBadge,
  ActionButton,
  TableFooter,
  Pagination,
  PageButton,
  Select,
  RadioGroup,
  Checkbox,
  FilterActions,
} from './syles';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  paymentMethod: 'credit' | 'boleto' | 'transfer';
  status: 'pending' | 'paid' | 'cancelled' | 'reconciliation';
  actions?: {
    canUpload?: boolean;
    canPrint?: boolean;
  };
}

export const Financial: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [search, setSearch] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('last7days');
  
  // Mock data
  const transactions: Transaction[] = [
    {
      id: '999999999',
      date: '2023-12-31',
      description: '100.000 Consulta | 100.000 Prospecção',
      amount: 12000.00,
      paymentMethod: 'credit',
      status: 'pending',
    },
    {
      id: '999999998',
      date: '2023-12-31',
      description: '50.000 Consulta | 50.000 Prospecção',
      amount: 6000.00,
      paymentMethod: 'boleto',
      status: 'paid',
    },
    {
      id: '999999997',
      date: '2023-12-30',
      description: '75.000 Consulta | 25.000 Prospecção',
      amount: 8000.00,
      paymentMethod: 'transfer',
      status: 'reconciliation',
      actions: {
        canUpload: true,
      },
    },
    {
      id: '999999996',
      date: '2023-12-29',
      description: '200.000 Consulta',
      amount: 15000.00,
      paymentMethod: 'credit',
      status: 'cancelled',
    },
    {
      id: '999999995',
      date: '2023-12-28',
      description: '150.000 Prospecção',
      amount: 10000.00,
      paymentMethod: 'boleto',
      status: 'pending',
      actions: {
        canPrint: true,
      },
    },
  ];

  const getStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'pending':
        return <Clock size={16} />;
      case 'paid':
        return <CheckCircle2 size={16} />;
      case 'cancelled':
        return <XCircle size={16} />;
      case 'reconciliation':
        return <Clock size={16} />;
    }
  };

  const getStatusText = (status: Transaction['status']) => {
    switch (status) {
      case 'pending':
        return 'Aguardando pagamento';
      case 'paid':
        return 'Pago';
      case 'cancelled':
        return 'Cancelado';
      case 'reconciliation':
        return 'Aguardando conciliação';
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'pending':
      case 'reconciliation':
        return 'warning';
      case 'paid':
        return 'success';
      case 'cancelled':
        return 'error';
    }
  };

  return (
    <Container>
      <Header>
        <h1>FINANCEIRO</h1>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Comprar Créditos
        </button>
      </Header>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <SearchContainer>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Pesquisar por código ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 transition-colors"
              />
            </div>
            <FilterButton onClick={() => setShowFilter(!showFilter)}>
              <Filter size={20} />
              Filtrar
            </FilterButton>
          </SearchContainer>

          {showFilter && (
            <FilterMenu>
              <FilterSection>
                <h6>Período</h6>
                <RadioGroup>
                  <label>
                    <input
                      type="radio"
                      name="period"
                      value="last7days"
                      checked={filterPeriod === 'last7days'}
                      onChange={(e) => setFilterPeriod(e.target.value)}
                    />
                    Últimos 7 dias
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="period"
                      value="currentMonth"
                      checked={filterPeriod === 'currentMonth'}
                      onChange={(e) => setFilterPeriod(e.target.value)}
                    />
                    Mês atual
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="period"
                      value="custom"
                      checked={filterPeriod === 'custom'}
                      onChange={(e) => setFilterPeriod(e.target.value)}
                    />
                    Personalizado
                  </label>
                  {filterPeriod === 'custom' && (
                    <div className="flex gap-2 items-center mt-2">
                      <input
                        type="date"
                        className="border-2 border-gray-200 rounded-md p-1"
                      />
                      <span>até</span>
                      <input
                        type="date"
                        className="border-2 border-gray-200 rounded-md p-1"
                      />
                    </div>
                  )}
                </RadioGroup>
              </FilterSection>

              <FilterSection>
                <h6>Status</h6>
                <div className="grid grid-cols-2 gap-2">
                  <Checkbox>
                    <input type="checkbox" id="status-pending" />
                    <label htmlFor="status-pending">Aguardando pagamento</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" id="status-reconciliation" />
                    <label htmlFor="status-reconciliation">Aguardando conciliação</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" id="status-paid" />
                    <label htmlFor="status-paid">Pago</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" id="status-cancelled" />
                    <label htmlFor="status-cancelled">Cancelado</label>
                  </Checkbox>
                </div>
              </FilterSection>

              <FilterSection>
                <h6>Forma de Pagamento</h6>
                <div className="grid grid-cols-3 gap-2">
                  <Checkbox>
                    <input type="checkbox" id="payment-boleto" />
                    <label htmlFor="payment-boleto">Boleto</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" id="payment-credit" />
                    <label htmlFor="payment-credit">Cartão de crédito</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" id="payment-transfer" />
                    <label htmlFor="payment-transfer">Transferência</label>
                  </Checkbox>
                </div>
              </FilterSection>

              <FilterActions>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowFilter(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:opacity-90"
                >
                  Aplicar
                </button>
              </FilterActions>
            </FilterMenu>
          )}
        </div>

        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Data</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Forma de pagamento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>(new Date(transaction.date), 'dd/MM/yyyy')</td>
                <td>{transaction.description}</td>
                <td>R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td>
                  {transaction.paymentMethod === 'credit' && 'Cartão de crédito'}
                  {transaction.paymentMethod === 'boleto' && 'Boleto'}
                  {transaction.paymentMethod === 'transfer' && 'Transferência'}
                </td>
                <td>
                  <StatusBadge type={getStatusColor(transaction.status)}>
                    {getStatusIcon(transaction.status)}
                    <span>{getStatusText(transaction.status)}</span>
                  </StatusBadge>
                </td>
                <td>
                  <div className="flex gap-2">
                    {transaction.actions?.canUpload && (
                      <ActionButton title="Enviar comprovante">
                        <Upload size={16} />
                      </ActionButton>
                    )}
                    {transaction.actions?.canPrint && (
                      <ActionButton title="Imprimir">
                        <Printer size={16} />
                      </ActionButton>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <TableFooter>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Exibir</span>
            <Select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              <option value={20}>20 linhas</option>
              <option value={50}>50 linhas</option>
              <option value={100}>100 linhas</option>
            </Select>
          </div>

          <Pagination>
            <PageButton
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </PageButton>
            {[1, 2, 3].map((page) => (
              <PageButton
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PageButton>
            ))}
            <PageButton
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === 3}
            >
              Próximo
            </PageButton>
          </Pagination>
        </TableFooter>
      </div>
    </Container>
  );
};