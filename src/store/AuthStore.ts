import axios from 'axios';
import { create } from 'zustand';

type AuthData = {
    token: string;
    pin: string;
};

type AuthState = {
  authData?: AuthData;
  loading: boolean;
  isLoggedIn: boolean;
  logIn: (id: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  setIsLoggedIn: (is: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  authData: undefined,
  loading: true,
  isLoggedIn: false,


  logIn: async (id: string, password:string) => {

    const response = await axios.post("https://voting-system-api.onrender.com/login", {student_id: id, password});
    const authData: AuthData = {
        token: response.data.token,
        pin: response.data.pin
    }
    set({authData, loading: false});
  },
  logOut: async () => {
    set({authData: undefined, isLoggedIn: false, loading: false});
  },

  setIsLoggedIn: (is) => {
    set({isLoggedIn: is});
  }
}));
