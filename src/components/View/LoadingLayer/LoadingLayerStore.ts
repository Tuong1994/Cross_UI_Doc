import { ref } from 'vue'
import { defineStore } from 'pinia'

const useLoadingLayerStore = defineStore('loading-layer', () => {
  const open = ref<boolean>(false)
  const trigger = (time = 2000) => {
    open.value = true
    setTimeout(() => (open.value = false), time)
  }
  return { open, trigger }
})

export default useLoadingLayerStore
