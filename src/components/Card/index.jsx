import React, { useState, useEffect } from 'react';
import { Container, Button, Box, BoxImg, Row, Title } from './styles.js';

export const Card = ({ details, modal }) => {
  const [counter, setCounter] = useState(details.remainingTime);
  // const [counter, setCounter] = useState(1000);
  const [bid, setBid] = useState(
    details.bids.length === 0 ? 0 : details.bids[details.bids.length - 1].amount
  );

  function formatTime(ms) {
    let s = Math.floor((ms / 1000) % 60),
      m = Math.floor((ms / (1000 * 60)) % 60),
      h = Math.floor((ms / (1000 * 60 * 60)) % 24);

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    return h + ':' + m + ':' + s;
  }

  const handleClick = () => {
    if (counter > 0) {
      setBid((prevState) => {
        return prevState + 250;
      });
    } else {
      modal();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCounter((prevState) => (prevState > 0 ? prevState - 1000 : 0));
    }, 1000);
  }, [counter]);

  return (
    <>
      <Container>
        <BoxImg>
          <img src={details.imageUrl} alt="" />
          <p className="details">ver detalhes</p>
        </BoxImg>
        <Row>
          <Box>
            <small>tempo restante</small>
            <p className="red big">{formatTime(counter)}</p>
          </Box>
          <Box>
            <small>última oferta</small>
            <p className="green big">R$ {bid.toLocaleString('pt-BR')}</p>
          </Box>
        </Row>
        <Title>
          {details.make} {details.model} {details.version}
        </Title>
        <Row>
          <Box>
            <p>{details.year}</p>
          </Box>
          <Box>
            <p>{details.km.toLocaleString('pt-BR')} km</p>
          </Box>
        </Row>
        <Button onClick={handleClick} type="button">
          fazer oferta
        </Button>
      </Container>
    </>
  );
};
