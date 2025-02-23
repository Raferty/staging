import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",

  state: () => {
    return {
      access_token: null,
      user: null,
    };
  },

  actions: {
    updateToken(payload) {
      this.access_token = payload;
    },
  },

  getters: {
    isAuth: (state) => !!state.access_token,
  },
});
