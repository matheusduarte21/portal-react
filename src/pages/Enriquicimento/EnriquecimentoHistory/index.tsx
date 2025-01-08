import React, { useState } from 'react';
import { Search, FileText, Download, AlertCircle, Loader2, Plus } from 'lucide-react';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import {
  Container,
  Header,
  HeaderContent,
  SearchContainer,
  TabsContainer,
  Tab,
  TableContainer,
  Table,
  Status,
  ActionButtons,
  ProgressBar,
  ProgressBarFill,
} from './style';

type TabType = 'cpf' | 'cnpj';

interface EnrichmentRecord {
  id: string;
  date: string;
  name: string;
  description: string;
  status: 'processing' | 'error' | 'completed';
  progress?: number;
  errorMessage?: string;
  enrichmentPercentage?: number;
}

export const EnrichmentHistory = () => {
  const [activeTab, setActiveTab] = useState<TabType>('cpf');
  const [searchTerm, setSearchTerm] = useState('');

  const mockData: Record<TabType, EnrichmentRecord[]> = {
    cpf: [
      {
        id: '1546537',
        date: '01/01/2024',
        name: 'Mulheres da campanha XPTO',
        description: 'Enriquecimento completo | CPF',
        status: 'processing',
        progress: 75
      },
      {
        id: '1546538',
        date: '02/01/2024',
        name: 'Campanha Verão 2024',
        description: 'Enriquecimento completo | CPF',
        status: 'error',
        errorMessage: 'Arquivo não contém registros válidos'
      },
      {
        id: '1546539',
        date: '03/01/2024',
        name: 'Base Sudeste',
        description: 'Enriquecimento personalizado | CPF | 90% enriquecido',
        status: 'completed',
        enrichmentPercentage: 90
      }
    ],
    cnpj: [
      {
        id: '1546540',
        date: '01/01/2024',
        name: 'Empresas Varejo SP',
        description: 'Enriquecimento completo | CNPJ',
        status: 'processing',
        progress: 45
      },
      {
        id: '1546541',
        date: '02/01/2024',
        name: 'Base Atacadistas',
        description: 'Enriquecimento personalizado | CNPJ | 95% enriquecido',
        status: 'completed',
        enrichmentPercentage: 95
      }
    ]
  };

  const renderStatus = (record: EnrichmentRecord) => {
    switch (record.status) {
      case 'processing':
        return (
          <Status variant="processing">
            <ProgressBar>
              <ProgressBarFill style={{ width: `${record.progress}%` }}>
                <Loader2 className="animate-spin" size={16} />
                Em processamento ({record.progress}%)
              </ProgressBarFill>
            </ProgressBar>
          </Status>
        );
      case 'error':
        return (
          <Status variant="error">
            <AlertCircle size={16} />
            {record.errorMessage}
          </Status>
        );
      case 'completed':
        return (
          <Status variant="completed">
            <span>Finalizado ({record.enrichmentPercentage}%)</span>
            <ActionButtons>
              <button title="Relatório">
                <FileText size={16} />
              </button>
              <button title="Download">
                <Download size={16} />
              </button>
            </ActionButtons>
          </Status>
        );
    }
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>Enriquecimentos Realizados</h1>
          <SearchContainer>
            <Button onClick={() => window.location.href = '/enriquecimento'}>
              {/* <Plus size={20} /> */}
              Novo enriquecimento
            </Button>
            <Input
            label=''
              icon={Search}
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </HeaderContent>

        <TabsContainer>
          <Tab
            $active={activeTab === 'cpf'}
            onClick={() => setActiveTab('cpf')}
          >
            CPFs
          </Tab>
          <Tab
            $active={activeTab === 'cnpj'}
            onClick={() => setActiveTab('cnpj')}
          >
            CNPJs
          </Tab>
        </TabsContainer>
      </Header>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data do upload</th>
              <th>Nome do processo</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData[activeTab].map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.date}</td>
                <td>
                  <a href={`/enrichment/${record.id}`}>{record.name}</a>
                </td>
                <td>{record.description}</td>
                <td>{renderStatus(record)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};