import React, { useState } from 'react';
import {  Download, Filter, CreditCard } from 'lucide-react';
import {
  TableContainer,
  TableHeader,
  Balance,
  SearchContainer,
  SearchInput,
  Table,
  Th,
  Td,
  Tr,
  TableFooter,
  Pagination,
  PageButton,
  Select,
  IconButton,
} from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

interface TransactionTableProps {
  transactions: Transaction[];
  balance: number;
  type: 'consultation' | 'prospecting';
}


export const Statement: React.FC<TransactionTableProps> = () => {
  
  const [activeTab, setActiveTab] = useState<'consultation' | 'prospecting'>('consultation');


  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">EXTRATO</h1>
            <button className="w-2/12 py-2.5 px-4 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 shadow-sm bg-gradient-to-r from-[#5200a0] to-[#3cabe0] hover:from-[#5200a0]/90 hover:to-[#3cabe0]/90 text-white focus:ring-[#3cabe0]/50">
          Comprar Créditos
        </button>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  className={`px-6 py-4 font-semibold ${
                    activeTab === 'consultation'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('consultation')}
                >
                  Consulta
                </button>
                <button
                  className={`px-6 py-4 font-semibold ${
                    activeTab === 'prospecting'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('prospecting')}
                >
                  Prospecção
                </button>
              </nav>
            </div>

            <TableDetails type={activeTab} transactions={[]} balance={0} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export const TableDetails: React.FC<TransactionTableProps>  = ({type}) =>{

  const mockTransactions: Transaction[] = [
    {
      id: '999999999',
      date: '2023-12-12',
      description: 'Créditos | Pedido número 567456',
      amount: 500,
      type: 'credit',
    },
    {
      id: '999999998',
      date: '2023-12-12',
      description: 'Débito | Consulta | CPF Consultado',
      amount: 500,
      type: 'debit',
    },
    {
      id: '999999997',
      date: '2023-12-11',
      description: 'Créditos | Estorno de créditos',
      amount: 750,
      type: 'credit',
    },
    {
      id: '999999996',
      date: '2023-12-11',
      description: 'Débito | Consulta | CNPJ Consultado',
      amount: 300,
      type: 'debit',
    },
    {
      id: '999999995',
      date: '2023-12-10',
      description: 'Créditos | Pedido número 567457',
      amount: 1000,
      type: 'credit',
    },
    {
      id: '999999994',
      date: '2023-12-10',
      description: 'Débito | Prospecção | Lista importada',
      amount: 250,
      type: 'debit',
    },
    {
      id: '999999993',
      date: '2023-12-09',
      description: 'Débito | Consulta | CPF Consultado',
      amount: 150,
      type: 'debit',
    },
    {
      id: '999999992',
      date: '2023-12-09',
      description: 'Créditos | Pedido número 567458',
      amount: 2000,
      type: 'credit',
    },
    {
      id: '999999991',
      date: '2023-12-08',
      description: 'Débito | Prospecção | Filtro personalizado',
      amount: 800,
      type: 'debit',
    },
    {
      id: '999999990',
      date: '2023-12-08',
      description: 'Créditos | Bônus promocional',
      amount: 300,
      type: 'credit',
    }
  ];

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  // Filter transactions based on type
  const typeFilteredTransactions = mockTransactions.filter(transaction => {
    if (type === 'consultation') {
      return transaction.description.includes('Consulta');
    }
    return transaction.description.includes('Prospecção');
  });

  // Filter transactions based on search
  const filteredTransactions = typeFilteredTransactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase()) ||
      transaction.id.includes(search)
  );

  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  // Calculate balance based on filtered transactions
  const balance = typeFilteredTransactions.reduce((acc, transaction) => {
    if (transaction.type === 'credit') {
      return acc + transaction.amount;
    }
    return acc - transaction.amount;
  }, 99999); // Starting balance

  const handleDownloadCSV = () => {
    console.log('Downloading CSV...');
  };

  return(
    <TableContainer>
      <TableHeader>
        <Balance>
          <CreditCard size={24} />
          {typeof balance === 'number' ? balance.toLocaleString() : 'Valor inválido'} créditos
        </Balance>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Pesquisar por código ou descrição..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton>
            <Filter />
            Filtrar
          </IconButton>
        </SearchContainer>
      </TableHeader>

      <Table>
        <thead>
          <tr>
            <Th>Código</Th>
            <Th>Data</Th>
            <Th>Descrição</Th>
            <Th>Valor</Th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.id}</Td>
              <Td>{(new Date(transaction.date), 'dd/MM/yyyy')}</Td>
              <Td>{transaction.description}</Td>
              <Td isCredit={transaction.type === 'credit'}>
                {transaction.type === 'debit' ? '(-) ' : '(+) '}
                {transaction.amount.toLocaleString()}
              </Td>
            </Tr>
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PageButton
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PageButton>
          ))}
          <PageButton
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Próximo
          </PageButton>
        </Pagination>

        <IconButton onClick={handleDownloadCSV}>
          <Download />
          Exportar CSV
        </IconButton>
      </TableFooter>
    </TableContainer> 
  )
}