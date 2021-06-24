import styled from 'styled-components';

import { ContainerStyled } from '../Layout/Container/styles';

export const HeaderStyled = styled.div`
  background-color: #ffffff;
  box-shadow: 0px -40px 35px 20px rgb(0 0 0 / 20%);
`;

export const Container = styled(ContainerStyled)`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-wrap: wrap;

    > img {
      max-width: 200px;
      padding-left: 1rem;
    }
  }
`;

export const BoxPhone = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 2rem;
  margin-left: 2rem;
  border-left: 1px solid #959595;

  p {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    p {
      color: var(--green-default);
    }
  }

  img {
    margin-right: 1rem;
  }

  @media (max-width: 767px) {
    order: 3;
    margin-left: 0;
    border: 0;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const BoxLogin = styled.div`
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  margin-left: auto;

  .caret {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  p {
    margin: 0;
  }

  @media (max-width: 767px) {
    order: 2;
  }
`;
