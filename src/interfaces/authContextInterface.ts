import { User, UserCredential } from "firebase/auth";

export interface AuthContextInterface {
  currentUser: User | null | undefined;
  signup: (
    displayName: string,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  signin: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  isAuthorized: () => Promise<boolean | undefined>;
}
