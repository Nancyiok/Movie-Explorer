import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    active: false, // Показывает, идет ли сейчас какой-либо процесс
    counter: 0, // Для подсчета параллельных загрузок
  }),
  actions: {
    startLoading() {
      this.counter++
      this.active = true
    },
    stopLoading() {
      this.counter--
      if (this.counter <= 0) {
        this.counter = 0
        this.active = false
      }
    },
  },
})
