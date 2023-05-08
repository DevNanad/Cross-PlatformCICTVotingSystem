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
  setAuthData: (data: any) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  authData: undefined,
  loading: false,
  isLoggedIn: false,
  loginError: "",


  logIn: async (id: string, password:string) => {
    try {
      set({loading: true})
      const response = await axios.post("https://voting-system-api.onrender.com/login", {student_id: id, password});
      const authData: AuthData = {
        token: response.data.token,
        pin: response.data.pin
      }
      set({authData, loading: false, loginError: ""});
    } catch (error: any) {
      //console.log(error.response);
      if (error.response) {
        set({loginError: error.response.data.message , loading: false});
      } else {
        set({loginError: "No internet connection", loading: false});
      }
    }
  },
  logOut: async () => {
    set({authData: undefined, isLoggedIn: false, loading: false});
  },

  setIsLoggedIn: (is) => {
    set({isLoggedIn: is});
  },

  setAuthData: (data) => {
    set({authData: data});
  }
}));
