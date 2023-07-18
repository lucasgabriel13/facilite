import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import { SignOut } from 'phosphor-react';
import React from 'react';

import logoImg from '../../assets/logo.svg';
import { useUser } from '../../context/UserContext';
import { NewTransactionModal } from '../NewTransactionModal';
import {
  ButtonSingOut,
  HeaderContainer,
  HeaderContent,
  LeftContainer,
  NewTransactionButton,
  Profile,
  ProfileContent,
} from './styles';

export const Header: React.FC = () => {
  const { user, signOut } = useUser();
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <LeftContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton type="button">Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
          <Popover.Root>
            <Popover.Trigger asChild>
              {user?.photoURL && (
                <Profile>
                  <img src={user?.photoURL} alt="Lucas Gonçalves" />
                </Profile>
              )}
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content>
                <ProfileContent>
                  <ButtonSingOut type="button" onClick={signOut}>
                    Sair
                    <SignOut size={16} />
                  </ButtonSingOut>
                </ProfileContent>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </LeftContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
