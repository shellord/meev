import { getAuth } from 'firebase-admin/auth';

const getUserFromToken = async (token: string) => {
  try {
    const user = await getAuth().verifyIdToken(token);
    return user;
  } catch (error) {
    return null;
  }
};

export default getUserFromToken;
