import React, { useState } from 'react';
import { Upload, FileText, Settings, CheckCircle, ArrowRight, ArrowLeft, HelpCircle } from 'lucide-react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Header,
  StepsContainer,
  Step,
  StepIcon,
  StepLabel,
  StepConnector,
  FormContainer,
  ContentGrid,
  MainContent,
  Sidebar,
  FileUpload,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  PriceTag,
  Footer,
  SummaryList,
  InstructionCard,
} from './styles';
import { EnrichmentHistory } from './EnriquecimentoHistory';
import { useNavigate } from 'react-router-dom';

export const Enrichment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [enrichmentType, setEnrichmentType] = useState('');
  const [documentType, setDocumentType] = useState('');
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: 'Upload', icon: Upload },
    { id: 2, label: 'Critérios', icon: Settings },
    { id: 3, label: 'Aprovação', icon: CheckCircle },
  ];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepNavigation =  () =>{
    currentStep === 3 ? undefined : handleNext()
    currentStep === 3 ? navigate('/enrichment/history') :  undefined
  }

  return (
    <Container>
      <Header>
        <h1>Novo Enriquecimento</h1>
      </Header>

      <StepsContainer>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <Step $active={currentStep >= step.id}>
              <StepIcon $active={currentStep >= step.id}>
                <step.icon size={20} />
              </StepIcon>
              <StepLabel>{step.label}</StepLabel>
            </Step>
            {index < steps.length - 1 && <StepConnector $active={currentStep > step.id} />}
          </React.Fragment>
        ))}
      </StepsContainer>

      <FormContainer>
        {currentStep === 1 && (
          <ContentGrid>
            <MainContent>
              <FileUpload>
                <Upload size={32} />
                <p>Arraste seu arquivo aqui ou clique para selecionar</p>
                <input type="file" accept=".csv,.txt" />
              </FileUpload>

              <Input
                label="Nome do processo"
                icon={FileText}
                placeholder="Digite um nome para identificar este trabalho"
                required
              />

              <Input
                label="Descritivo"
                icon={FileText}
                placeholder="Descreva o objetivo deste enriquecimento"
                required
               type='textarea'
              />

              <RadioGroup>
                <h3>Qual a chave de identificação do arquivo?</h3>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="cpf"
                      checked={documentType === 'cpf'}
                      onChange={(e) => setDocumentType(e.target.value)}
                    />
                    CPF
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="documentType"
                      value="cnpj"
                      checked={documentType === 'cnpj'}
                      onChange={(e) => setDocumentType(e.target.value)}
                    />
                    CNPJ
                  </label>
                </div>
              </RadioGroup>
            </MainContent>

            <Sidebar>
              <InstructionCard>
                <h3>
                  <HelpCircle size={20} />
                  Instruções do arquivo
                </h3>
                <h4>Regras gerais</h4>
                <ul>
                  <li>Extensão: .txt ou .csv</li>
                  <li>Tamanho máximo: 1GB</li>
                </ul>
                <h4>Regras para CPF/CNPJ</h4>
                <ul>
                  <li>Campo obrigatório na primeira coluna</li>
                  <li>Aceita com ou sem zeros à esquerda</li>
                </ul>
                <h4>Arquivos exemplo</h4>
                <a href="#">Exemplo .txt</a>
                <a href="#">Exemplo .csv</a>
              </InstructionCard>
            </Sidebar>
          </ContentGrid>
        )}

        {currentStep === 2 && (
          <ContentGrid>
            <MainContent>
              <RadioGroup>
                <h3>Tipo de enriquecimento</h3>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="enrichmentType"
                      value="complete"
                      checked={enrichmentType === 'complete'}
                      onChange={(e) => setEnrichmentType(e.target.value)}
                    />
                    Completo (+0,20)
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="enrichmentType"
                      value="custom"
                      checked={enrichmentType === 'custom'}
                      onChange={(e) => setEnrichmentType(e.target.value)}
                    />
                    Personalizado
                  </label>
                </div>
              </RadioGroup>

              <CheckboxGroup>
                <h3>Atributos disponíveis</h3>
                <Checkbox>
                  <input type="checkbox" id="name" />
                  <label htmlFor="name">Nome completo</label>
                </Checkbox>
                <Checkbox>
                  <input type="checkbox" id="birthdate" />
                  <label htmlFor="birthdate">Data de nascimento</label>
                </Checkbox>
                <Checkbox>
                  <input type="checkbox" id="gender" />
                  <label htmlFor="gender">Sexo</label>
                </Checkbox>
              </CheckboxGroup>

              <CheckboxGroup>
                <h3>Dados de contato</h3>
                <Checkbox>
                  <input type="checkbox" id="phone" />
                  <label htmlFor="phone">Até 3 Telefones fixos (+0,15)</label>
                </Checkbox>
                <Checkbox>
                  <input type="checkbox" id="mobile" />
                  <label htmlFor="mobile">Até 3 Telefones celulares (+0,15)</label>
                </Checkbox>
                <Checkbox>
                  <input type="checkbox" id="email" />
                  <label htmlFor="email">Até 3 E-mails (+0,15)</label>
                </Checkbox>
              </CheckboxGroup>
            </MainContent>
          </ContentGrid>
        )}

        {currentStep === 3 && (
          <ContentGrid>
            <MainContent>
              <h2>Resumo do enriquecimento</h2>
              <SummaryList>
                <li>Até 3 Telefones fixos</li>
                <li>Até 3 Telefones celulares</li>
                <li>Até 3 E-mails</li>
                <li>Indicador de WhatsApp</li>
              </SummaryList>

              <PriceTag>
                <h3>Valor estimado</h3>
                <p>R$ 99.999,00</p>
                <span>*Considerando 100% dos registros</span>
              </PriceTag>
            </MainContent>
          </ContentGrid>
        )}

        <Footer>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handlePrev}>
              {/* <ArrowLeft size={20} /> */}
              Voltar
            </Button>
          )}
          
          <Button onClick={handleStepNavigation}>
            {currentStep === 3 ? 'Aprovar' : 'Avançar'}
            {/* <ArrowRight size={20} /> */}
          </Button>
        </Footer>
        {/* <EnrichmentHistory/> */}
      </FormContainer>
    </Container>
  );
};