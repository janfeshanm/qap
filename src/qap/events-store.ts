import { defineStore, acceptHMRUpdate } from 'pinia';

export const useAPStore = defineStore('ap', {
  state: () => ({}),

  getters: {},

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAPStore, import.meta.hot));
}
