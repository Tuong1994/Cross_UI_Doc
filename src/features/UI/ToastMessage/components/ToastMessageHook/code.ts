export const toastHookUsageCode = `
import { iconName } from '@/components/UI/Icon/constant'
import useMessage from '@/components/UI/ToastMessage/useMessage'

const messageApi = useMessage({
  successIconName: iconName.CIRCLE_CHECK,
  errorIconName: iconName.X_MARK_CIRCLE,
  warningIconName: iconName.CIRCLE_EXCLAMATION,
  infoIconName: iconName.CIRCLE_INFO
})

messageApi.success('This is a success message')
messageApi.error('This is a error message')
messageApi.warning('This is a warning message')
messageApi.info('This is a info message')
`
export const toastHookCode = `
import { watchEffect } from 'vue'
import useToastStore, { type ToastOptions } from './ToastStore'

const useMessage = (options?: ToastOptions) => {
  const toastStore = useToastStore()

  watchEffect(() => {
    if (options) toastStore.configOptions(options)
  })

  const success = (message: string) => toastStore.addToast('success', message)

  const error = (message: string) => toastStore.addToast('error', message)

  const warning = (message: string) => toastStore.addToast('warning', message)

  const info = (message: string) => toastStore.addToast('info', message)

  const messageApi = { success, error, warning, info }

  return messageApi
}

export default useMessage
`

export const toastStoreCode = `
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { iconName } from '@/components/UI/Icon/constant'
import type { ToastMessages, ToastMessage, ToastType } from './type'
import utils from '@/utils'

export type ToastOptions = {
  successIconName?: string
  errorIconName?: string
  warningIconName?: string
  infoIconName?: string
}

const useToastStore = defineStore('toast', () => {
  const toastMessages = ref<ToastMessages>([])
  const options = ref<ToastOptions>({
    successIconName: iconName.CIRCLE_CHECK,
    errorIconName: iconName.X_MARK_CIRCLE,
    warningIconName: iconName.CIRCLE_EXCLAMATION,
    infoIconName: iconName.CIRCLE_INFO
  })
  const addToast = (type: ToastType, message: string) => {
    const newToast: ToastMessage = { id: utils.uuid(), type, message }
    toastMessages.value = [newToast, ...toastMessages.value]
  }
  const removeToast = (id: string) =>
    (toastMessages.value = [...toastMessages.value].filter((toast) => toast.id !== id))
  const configOptions = (op: ToastOptions) => (options.value = { ...options.value, ...op })

  return { toastMessages, options, addToast, removeToast, configOptions }
})

export default useToastStore
`

export const toastTypeCode = `
export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type ToastMessage = {
  id: string
  type: ToastType
  message: string
}

export type ToastMessages = ToastMessage[]
`
