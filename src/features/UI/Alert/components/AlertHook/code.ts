export const useAlertHookCode = `
import { watchEffect } from 'vue'
import useAlertStore, { type AlertOptions } from './AlertStore'

const useAlert = (options?: AlertOptions) => {
  const alertStore = useAlertStore()

  watchEffect(() => {
    if (options) alertStore.configOptions(options)
  })

  const success = (message: string) => alertStore.onOpen(message, 'success')
  const error = (message: string) => alertStore.onOpen(message, 'error')
  const warning = (message: string) => alertStore.onOpen(message, 'warning')
  const info = (message: string) => alertStore.onOpen(message, 'info')

  const alertApi = { success, error, warning, info }

  return alertApi
}

export default useAlert
`

export const useAlertHookUsageCode = `
import { iconName } from '@/components/UI/Icon/constant'
import useAlert from '@/components/UI/Alert/useAlert'

const alertApi = useAlert({
  placement: 'top',                   // Position of alert
  icons: {                            // Icon of each alert type
    successIconName: iconName.CIRCLE_CHECK,
    errorIconName: iconName.X_MARK_CIRCLE,
    warningIconName: iconName.CIRCLE_EXCLAMATION,
    infoIconName: iconName.CIRCLE_INFO
  }
})

// Put these functions in events like click to trigger it
alertApi.success('This is success message')
alertApi.error('This is success message')
alertApi.warning('This is success message')
alertApi.info('This is success message')
`

export const alertStoreCode = `
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { iconName } from '@/components/UI/Icon/constant'
import type { AlertType, AlertIcon, AlertPlacement } from './type'

export type AlertOptions = {
  icons?: AlertIcon
  placement?: AlertPlacement
}

const useAlertStore = defineStore('alert', () => {
  const open = ref<boolean>(false)
  const message = ref<string>('')
  const type = ref<AlertType>('info')
  const options = ref<AlertOptions>({
    placement: 'top',
    icons: {
      successIconName: iconName.CIRCLE_CHECK,
      errorIconName: iconName.X_MARK_CIRCLE,
      warningIconName: iconName.CIRCLE_EXCLAMATION,
      infoIconName: iconName.CIRCLE_INFO
    }
  })
  const onOpen = (text: string, mode: AlertType) => {
    open.value = true
    message.value = text
    type.value = mode
  }
  const onClose = () => (open.value = false)
  const configOptions = (op: AlertOptions) => (options.value = { ...options.value, ...op })

  return { open, message, type, options, onOpen, onClose, configOptions }
})

export default useAlertStore
`
export const alertTypeCode = `
import type { ComponentPlacement } from '@/common/type'

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export type AlertIcon = {
  successIconName?: string
  errorIconName?: string
  warningIconName?: string
  infoIconName?: string
}

export type AlertPlacement = Exclude<ComponentPlacement, 'left' | 'right'>
`
