import {getAuth, signOut} from "firebase/auth";

const auth = getAuth();

export default async function logOut() {
  let result = null,
    error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return {result, error};
}
