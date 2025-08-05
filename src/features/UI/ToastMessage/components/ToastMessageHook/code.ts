// Vue
export const toastHookUsageVueCode = `
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
export const toastHookVueCode = `
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

export const toastStoreVueCode = `
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

export const toastTypeVueCode = `
export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type ToastMessage = {
  id: string
  type: ToastType
  message: string
}

export type ToastMessages = ToastMessage[]
`

// React
export const toastHookUsageReactCode = `
import useMessage from "./components/UI/ToastMessage/useMessage";
import {
  HiOutlineCheckCircle as SuccessIcon,
  HiOutlineXCircle as ErrorIcon,
  HiOutlineInformationCircle as InfoIcon,
} from "react-icons/hi2";
import { PiWarningCircle as WarningIcon } from "react-icons/pi";

const messageApi = useMessage({
  successIcon: <SuccessIcon size={20} />,
  errorIcon: <ErrorIcon size={20} />,
  infoIcon: <InfoIcon size={20} />,
  warningIcon: <WarningIcon size={20} />,
});

messageApi.success("This is a success message");
messageApi.error("This is a error message");
messageApi.warning("This is a warning message");
messageApi.info("This is a info message");
`

export const toastHookReactCode = `
import { useEffect } from "react";
import useToastStore, { MessageOptions } from "./ToastStore";

const useMessage = (options?: MessageOptions) => {
  const [addToast, configOptions] = useToastStore((state) => [state.addToast, state.configOptions]);

  useEffect(() => {
    if (options) configOptions(options);
  }, []);

  const success = (message: string) => addToast("success", message);

  const error = (message: string) => addToast("error", message);

  const warning = (message: string) => addToast("warning", message);

  const info = (message: string) => addToast("info", message);

  const messageApi = { success, error, warning, info };

  return messageApi;
};

export default useMessage;
`

export const toastStoreReactCode = `
import { ReactNode } from "react";
import { create, StateCreator } from "zustand";
import { ToastMessage, ToastMessages, ToastType } from "./type";
import {
  HiOutlineCheckCircle as SuccessIcon,
  HiOutlineXCircle as ErrorIcon,
  HiOutlineInformationCircle as InfoIcon,
} from "react-icons/hi2";
import { PiWarningCircle as WarningIcon } from "react-icons/pi";
import utils from "@/utils";

export type MessageOptions = {
  successIcon?: ReactNode;
  errorIcon?: ReactNode;
  warningIcon?: ReactNode;
  infoIcon?: ReactNode;
};

interface ToastState {
  toasts: ToastMessages;
  options: MessageOptions;
  addToast: (type: ToastType, message: string) => void;
  removeToast: (id: string) => void;
  configOptions: (options: MessageOptions) => void;
}

const store: StateCreator<ToastState> = (set) => ({
  toasts: [],
  options: {
    successIcon: <SuccessIcon size={20} />,
    errorIcon: <ErrorIcon size={20} />,
    warningIcon: <WarningIcon size={20} />,
    infoIcon: <InfoIcon size={20} />,
  },
  addToast: (type, message) => {
    const newToast: ToastMessage = { id: utils.uuid(), type, message };
    set((state) => ({ ...state, toasts: [newToast, ...state.toasts] }));
  },
  removeToast: (id) =>
    set((state) => ({ ...state, toasts: [...state.toasts].filter((toast) => toast.id !== id) })),
  configOptions: (options) => set((state) => ({ ...state, options: { ...state.options, ...options } })),
});

const useToastStore = create(store);

export default useToastStore;
`

export const toastTypeReactCode = `
export type ToastType = "success" | "error" | "warning" | "info";

export type ToastMessage = {
  id: string;
  type: ToastType;
  message: string;
};

export type ToastMessages = ToastMessage[];
`