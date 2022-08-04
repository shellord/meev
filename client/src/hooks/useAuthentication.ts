import React from 'react';
import {
  getAuth,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();

export default function useAuthentication() {
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
  };
}
