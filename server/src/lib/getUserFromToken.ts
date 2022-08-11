import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from '../config/firebase-service-account.json';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
  }),
});

const getUserFromToken = async (token: string) => {
  try {
    const user = await getAuth().verifyIdToken(token);
    return user;
  } catch (error) {
    return null;
  }
};

export default getUserFromToken;
