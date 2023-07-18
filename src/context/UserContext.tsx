import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import Cookies from 'js-cookie';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  email: string;
  photoURL: string;
}

interface UserContextData {
  user: UserData | undefined;
  signInWithGoogle: () => void;
  signOut: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextData);

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userState, setUserState] = useState<UserData>();

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const result = await signInWithPopup(auth, provider);

    if (!result.user) {
      throw new Error('Não foi possível autenticar com esse usuário, tente novamente');
    }
    if (!result.user.displayName) {
      throw new Error('A conta precisa de um nome');
    }

    const token = await result.user.getIdTokenResult();

    if (token) {
      const user: UserData = {
        name: result.user.displayName,
        email: result.user.email || '',
        photoURL: result.user.photoURL || '',
      };
      setUserState(user);

      localStorage.setItem('@facilite:user', JSON.stringify(user));
      const expiredDateToken = new Date(token.expirationTime);

      Cookies.set('_facilite_accessToken', token.token, {
        expires: expiredDateToken,
      });

      navigate('/transactions');
    }
  };

  const signOut = () => {
    Cookies.remove('_facilite_accessToken');
    localStorage.removeItem('@facilite:user');
    window.location.replace('/login');
  };

  useEffect(() => {
    const userStorage = localStorage.getItem('@facilite:user');

    if (userStorage) {
      const user = JSON.parse(userStorage);
      setUserState(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user: userState, signInWithGoogle, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

export { UserProvider, useUser };
