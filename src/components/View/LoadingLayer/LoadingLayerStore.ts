import { ref } from 'vue'
import { defineStore } from 'pinia'

const useLoadingLayerStore = defineStore('loading-layer', () => {
  const open = ref<boolean>(false)
  const isReady = ref<boolean>(false)
  const initialLoad = async (time = 2000) => {
    open.value = true
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        open.value = false
        resolve()
      }, time)
    )
    isReady.value = true
  }
  const trigger = async (time = 2000) => {
    open.value = true
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        open.value = false
        resolve()
      }, time)
    )
  }
  return { open, isReady, initialLoad, trigger }
})

export default useLoadingLayerStore
