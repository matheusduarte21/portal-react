import React, { useState } from 'react';
import { CreditCard,FileSpreadsheet, Wallet, Ban as Bank } from 'lucide-react';
import {
  Container,
  Header,
  CreditSection,
  PaymentSection,
  CreditTable,
  PaymentMethods,
  PaymentMethod,
  PaymentForm,
  TotalAmount,
  SubmitButton,
  InfoText,
  Input,
  InputGroup,
} from './style';

interface CreditType {
  type: string;
  amount: number;
  price: number;
}

export const CreditPurchase: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<'boleto' | 'credit' | 'transfer'>('credit');
  const [credits, setCredits] = useState<CreditType[]>([
    { type: 'Prospecção', amount: 0, price: 5.00 },
    { type: 'Consulta', amount: 0, price: 0.00 },
  ]);

  const calculateTotal = () => {
    return credits.reduce((total, credit) => total + (credit.amount * credit.price), 0);
  };

  const handleCreditChange = (index: number, amount: number) => {
    const newCredits = [...credits];
    newCredits[index] = { ...newCredits[index], amount };
    setCredits(newCredits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Header>
        <h1>Comprar Créditos</h1>
      </Header>

      <CreditSection>
        <h2>Quantidade de Créditos</h2>
        <InfoText>
          Escolha a quantidade de créditos que deseja comprar para cada serviço.
          Os créditos não expiram e podem ser utilizados a qualquer momento.
        </InfoText>

        <CreditTable>
          <thead>
            <tr>
              <th>Tipo de Serviço</th>
              <th>Quantidade</th>
              <th>Valor Unitário (R$)</th>
              <th>Subtotal (R$)</th>
            </tr>
          </thead>
          <tbody>
            {credits.map((credit, index) => (
              <tr key={credit.type}>
                <td>{credit.type}</td>
                <td>
                  <Input
                    type="number"
                    min="0"
                    value={credit.amount}
                    onChange={(e) => handleCreditChange(index, parseInt(e.target.value) || 0)}
                  />
                </td>
                <td>R$ {credit.price.toFixed(2)}</td>
                <td>R$ {(credit.amount * credit.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </CreditTable>
      </CreditSection>

      <PaymentSection>
        <h2>Forma de Pagamento</h2>
        <InfoText>
          Escolha a forma de pagamento que melhor se adequa às suas necessidades.
          Todas as transações são processadas com segurança.
        </InfoText>

        <PaymentMethods>
          <PaymentMethod
            selected={selectedMethod === 'boleto'}
            onClick={() => setSelectedMethod('boleto')}
          >
            <FileSpreadsheet size={24} />
            <span>Boleto Bancário</span>
          </PaymentMethod>

          <PaymentMethod
            selected={selectedMethod === 'credit'}
            onClick={() => setSelectedMethod('credit')}
          >
            <CreditCard size={24} />
            <span>Cartão de Crédito</span>
          </PaymentMethod>

          <PaymentMethod
            selected={selectedMethod === 'transfer'}
            onClick={() => setSelectedMethod('transfer')}
          >
            <Wallet size={24} />
            <span>Transferência</span>
          </PaymentMethod>
        </PaymentMethods>

        <PaymentForm onSubmit={handleSubmit}>
          {selectedMethod === 'credit' && (
            <>
              <InputGroup>
                <label>Número do Cartão</label>
                <Input type="text" placeholder="0000 0000 0000 0000" />
              </InputGroup>

              <InputGroup>
                <label>Nome no Cartão</label>
                <Input type="text" placeholder="Nome como aparece no cartão" />
              </InputGroup>

              <div className="grid grid-cols-2 gap-4">
                <InputGroup>
                  <label>Validade</label>
                  <Input type="text" placeholder="MM/AA" />
                </InputGroup>

                <InputGroup>
                  <label>CVV</label>
                  <Input type="text" placeholder="123" maxLength={3} />
                </InputGroup>
              </div>
            </>
          )}

          {selectedMethod === 'boleto' && (
            <div className="space-y-4">
              <InfoText>
                • O boleto será gerado após a confirmação da compra
                <br />
                • Prazo de pagamento: 2 dias úteis
                <br />
                • O pagamento deve ser realizado no valor integral
                <br />
                • Após o pagamento, os créditos serão liberados em até 1 dia útil
              </InfoText>
            </div>
          )}

          {selectedMethod === 'transfer' && (
            <div className="space-y-4">
              <InfoText>
                <strong>Dados bancários:</strong>
                <br />
                Banco: XXX
                <br />
                Agência: XXXX
                <br />
                Conta: XXXXX-X
                <br />
                CNPJ: XX.XXX.XXX/0001-XX
                <br />
                Razão Social: XXXXXXXX LTDA
              </InfoText>
            </div>
          )}

          <TotalAmount>
            <span>Valor Total:</span>
            <strong>R$ {calculateTotal().toFixed(2)}</strong>
          </TotalAmount>

          <SubmitButton type="submit">
            Finalizar Compra
          </SubmitButton>
        </PaymentForm>
      </PaymentSection>
    </Container>
  );
};