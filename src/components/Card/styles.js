import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 30%;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  /* justify-content: space-around; */
  border-bottom: 2px solid #e4e4e4;
  width: 95%;
`;

export const Box = styled.div`
  text-align: center;
  margin: 1rem 0;
  flex: 0 0 50%;

  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  small {
    text-transform: uppercase;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;

    &.big {
      font-weight: 700;
      font-size: 1.5rem;
    }

    &.green {
      color: #3eb871;
    }
    &.red {
      color: #ff6d4a;
    }
  }
`;

export const BoxImg = styled.div`
  position: relative;
  height: 340px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .details {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--green-default);
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.1rem;
  border-bottom: 2px solid #e4e4e4;
  padding-bottom: 1rem;
  margin-bottom: 0;
  flex: 1;
  display: flex;
  align-items: center;
  color: #323232;
  width: 95%;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: var(--green-default);
  width: 90%;
  padding: 1rem;
  text-transform: uppercase;
  color: #fff;
  border: 0;
  border-radius: 5px;
  margin: 1rem auto;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: #30864b;
  }
`;
