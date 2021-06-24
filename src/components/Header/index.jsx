import React from 'react';
import { HeaderStyled, Container, BoxLogin, BoxPhone } from './styles';

import logo from '../../assets/img/logo.png';
import phoneIcon from '../../assets/img/phone.png';
import userIcon from '../../assets/img/user.png';
import caret from '../../assets/img/caret.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <img src={logo} alt="" />
        <BoxPhone>
          <img src={phoneIcon} alt="Entre em contato | InstaCarros" />
          <p>(11) 3569-3465</p>
        </BoxPhone>
        <BoxLogin>
          <img src={caret} className="caret" alt="Login | InstaCarros" />
          <img src={userIcon} alt="Login | InstaCarros" />
          <p>User Test</p>
        </BoxLogin>
      </Container>
    </HeaderStyled>
  );
};
