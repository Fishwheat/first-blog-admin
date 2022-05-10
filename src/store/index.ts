import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    menuType: false,
    isLoading: false,
  }),
  actions: {
    menuTypeHandle() {
      this.menuType = !this.menuType;
    },
  },
});
