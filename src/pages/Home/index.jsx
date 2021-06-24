import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Row } from './styles';
import { Container } from '../../components/Layout/Container';
import { Modal } from '../../components/Modal';

export const Home = () => {
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);
  async function getList() {
    const api = await fetch(
      'https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json'
    );
    const data = await api.json();

    setList(data);
  }

  const handleModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Row>
          {list
            .sort((a, b) => a.remainingTime - b.remainingTime)
            .map((item) => {
              return <Card key={item.id} modal={showModal} details={item} />;
            })}
        </Row>
      </Container>

      {modal && (
        <Modal onDismiss={handleModal}>
          <h3>Desculpe, o tempo para dar esse lance esgotou :(</h3>
        </Modal>
      )}
    </>
  );
};
