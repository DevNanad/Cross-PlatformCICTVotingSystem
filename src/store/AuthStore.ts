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
  loginError: string;
};

export const useAuthStore = create<AuthState>((set) => ({
  authData: undefined,
  loading: true,
  isLoggedIn: false,
  loginError: "",


  logIn: async (id: string, password:string) => {
    try {
      const response = await axios.post("https://voting-system-api.onrender.com/login", {student_id: id, password});
      const authData: AuthData = {
        token: response.data.token,
        pin: response.data.pin
      }
      set({authData, loading: false});
    } catch (error: any) {
      //console.log(error.response.data.message);
      set({loginError: error.response.data.message});
      //console.warn(error.message)
    }
  },
  logOut: async () => {
    set({authData: undefined, isLoggedIn: false, loading: false});
  },

  setIsLoggedIn: (is) => {
    set({isLoggedIn: is});
  }
}));
