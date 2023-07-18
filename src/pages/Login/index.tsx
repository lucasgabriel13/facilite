import { GoogleLogo } from 'phosphor-react';
import React from 'react';

import illustrationHome from '../../assets/illustration-home.svg';
import logo from '../../assets/logo.svg';
import { useUser } from '../../context/UserContext';
import {
  ButtonSignIn,
  Container,
  ContentLeft,
  ContentRight,
  Heading,
  HeadingSignIn,
  IllustrationWrapper,
  Title,
} from './styles';

export const Login: React.FC = () => {
  const { signInWithGoogle } = useUser();

  return (
    <Container>
      <ContentLeft>
        <Heading>
          <img src={logo} alt="Logo da Facilite" />
          <h2>Controle total da sua gestão financeira, onde quer que você esteja.</h2>
          <IllustrationWrapper>
            <img src={illustrationHome} alt="Logo da Facilite" />
          </IllustrationWrapper>
        </Heading>
      </ContentLeft>
      <ContentRight>
        <HeadingSignIn>
          <Title>
            Olá somos o <strong>Facilite</strong>!
          </Title>
          <p>
            Clique para fazer o login utilizando sua conta
            <br /> google:
          </p>
        </HeadingSignIn>
        <ButtonSignIn type="button" onClick={signInWithGoogle}>
          <GoogleLogo weight="bold" size={16} />
          Fazer Login
        </ButtonSignIn>
      </ContentRight>
    </Container>
  );
};
