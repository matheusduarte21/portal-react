import React, { useState } from 'react';
import { Button } from '../../../components/Button';
import {
  Container,
  Header,
  Title,
  PurchaseCard,
  PlanInfo,
  PlanFeatures,
  FormGroup,
  Label,
  Input,
  CreditInfo,
  Footer,
  ConfirmationModal,
  ModalContent,
  ModalActions
} from './style';

export const ProspectingPurchase = () => {
  const [records, setRecords] = useState('10000');
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <Container>
      <Header>
        <Title>Comprar</Title>
      </Header>

      <PurchaseCard>
        <PlanInfo>
          <h3>BÁSICO</h3>
          <PlanFeatures>
            CPF, NOME COMPLETO, ENDEREÇO COMPLETO, TELEFONE, IDADE, DATA DE NASCIMENTO, SEXO.
          </PlanFeatures>
          <small>1 crédito por registro.</small>
        </PlanInfo>

        <FormGroup>
          <Label>Número de registros para extração</Label>
          <Input
            type="text"
            value={records}
            onChange={(e) => setRecords(e.target.value)}
          />
          <small>Nossa base possui 600.000 contatos com os critérios selecionados.</small>
        </FormGroup>

        <CreditInfo>
          <Label>Créditos que serão utilizados</Label>
          <div className="credits">300</div>
          <small>Seu saldo atual é de 1.000 créditos.</small>
        </CreditInfo>

        <Footer>
          <Button variant="secondary"  className='mr-10' onClick={() => window.history.back()}>
            Voltar
          </Button>
          <Button onClick={() => setShowConfirmation(true)}>
            Extrair
          </Button>
        </Footer>
      </PurchaseCard>

      {showConfirmation && (
        <ConfirmationModal>
          <ModalContent>
            <h2>Confirma Extração?</h2>
            <p>Esta extração irá consumir <strong>500 créditos.</strong></p>
            <p>Depois de confirmado não será possível cancelar o processo.</p>
            
            <ModalActions>
              <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
                Não
              </Button>
              <Button onClick={() => window.location.href = '/prospeccao/feedback'}>
                Sim
              </Button>
            </ModalActions>
          </ModalContent>
        </ConfirmationModal>
      )}
    </Container>
  );
};