import React from 'react';
import { Container, Header, Title, Content } from './styles';

export const Help = () => {
  return (
    <Container>
      <Header>
        <Title>Ajuda</Title>
      </Header>
      <Content>
        <h2>Central de Ajuda</h2>
        <p>Bem-vindo à nossa central de ajuda. Aqui você encontra respostas para dúvidas comuns e informações para resolver problemas rapidamente.</p>
        <h3>Perguntas Frequentes</h3>
        <ul>
          <li>
            <strong>1. Como faço para criar uma conta?</strong>
            <p>
              Você pode criar uma conta clicando no botão "Registrar" na página inicial e preenchendo o formulário com seus dados pessoais.
            </p>
          </li>
          <li>
            <strong>2. Esqueci minha senha. O que faço?</strong>
            <p>
              Clique no link "Esqueceu sua senha?" na página de login. Você receberá um e-mail com instruções para redefinir sua senha.
            </p>
          </li>
          <li>
            <strong>3. Como posso alterar minhas informações de perfil?</strong>
            <p>
              Acesse a página "Perfil", clique em "Editar" e atualize suas informações. Lembre-se de salvar as alterações.
            </p>
          </li>
          <li>
            <strong>4. Como entro em contato com o suporte?</strong>
            <p>
              Você pode enviar um e-mail para <a href="suporte@smdata.com.br ">suporte@smdata.com.br</a> ou acessar o chat ao vivo disponível no canto inferior direito da página.
            </p>
          </li>
          <li>
            <strong>5. Onde encontro os Termos de Uso e a Política de Privacidade?</strong>
            <p>
              Os links para os Termos de Uso e a Política de Privacidade estão no rodapé de todas as páginas do site.
            </p>
          </li>
        </ul>
        <h3>Precisa de mais ajuda?</h3>
        <p>
          Se não encontrou o que procurava, entre em contato conosco. Estamos disponíveis para ajudar com qualquer dúvida ou problema!
        </p>
      </Content>
    </Container>
  );
};
