import getUserFromToken from './lib/getUserFromToken';

export type Context = {
  userId: string | null;
};

export const createContext = async ({ req }: any): Promise<Context> => {
  const authHeader = req.headers.authorization || '';
  const idToken = authHeader.split(' ')[1];
  const user = await getUserFromToken(idToken);
  return {
    userId: user?.uid || null,
  };
};
