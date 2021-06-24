import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
  margin: 4rem 0;

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 4rem 1rem;
  }
`;
