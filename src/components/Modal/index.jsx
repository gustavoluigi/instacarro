import React from 'react';

import { Container, CloseButton } from './styles';

export const Modal = ({ children, onDismiss }) => {
  return (
    <Container>
      <div>
        {children}
        <CloseButton onClick={onDismiss} type="button">
          x
        </CloseButton>
      </div>
    </Container>
  );
};
