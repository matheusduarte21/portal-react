import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--bg-color, #fff);
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  color: var(--text-color, #333);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
   color: var(--secondary-color, #444);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 1.6;

  h2, h3 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--secondary-color, #444);
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
    color: var(--text-color, #555);
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      padding: 1rem;
      border: 1px solid var(--border-color, #ddd);
      border-radius: 0.75rem;
      background-color: var(--card-bg, #f9f9f9);
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      }

      strong {
        display: block;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--primary-color, #4a90e2);
      }

      p {
        font-size: 0.9rem;
        color: var(--text-color, #666);
      }

      a {
        color: var(--link-color, #0066cc);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
