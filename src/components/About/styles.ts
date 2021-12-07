import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (ma-width: 1000px) {
      gap: 1rem;
    }
  }
`;

export const AboutContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
      line-height: 2.5;
    }
  }

  button {
    margin: 1rem;
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
      line-height: 2.5;
    }
  }

  &:hover > div {
    filter: brightness(1.2);
  }

  @media (max-width: 1000px) {
    > div {
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.9rem;
        line-height: 2;
      }
    }
  }

  @media (max-width: 700px) {
    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
