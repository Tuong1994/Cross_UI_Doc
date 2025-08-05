// Vue
export const useAlertHookUsageVueCode = `
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

export const useAlertHookVueCode = `
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

export const alertStoreVueCode = `
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

export const alertTypeVueCode = `
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

// React
export const useAlertHookUsageReactCode = `
import {
  HiCheckCircle as SuccessIcon,
  HiXCircle as ErrorIcon,
  HiInformationCircle as InfoIcon,
} from "react-icons/hi2";
import { PiWarningCircleFill as WarningIcon } from "react-icons/pi";
import useAlert from "./components/UI/Alert/useAlert";

const alertApi = useAlert({
  placement: "top",
  icons: {
    successIcon: <SuccessIcon />,
    errorIcon: <ErrorIcon />,
    infoIcon: <InfoIcon />,
    warningIcon: <WarningIcon />,
  },
});

// Put these functions in events like click to trigger it
alertApi.success('This is success message')
alertApi.error('This is success message')
alertApi.warning('This is success message')
alertApi.info('This is success message')
`

export const useAlertHookReactCode = `
import { useEffect } from "react";
import useAlertStore, { AlertOptions } from "./AlertStore";

const useAlert = (options?: AlertOptions) => {
  const [onOpen, configOptions] = useAlertStore((state) => [state.onOpen, state.configOptions]);

  useEffect(() => {
    if (options) configOptions(options);
  }, []);

  const success = (message: string) => onOpen(message, "success");
  const error = (message: string) => onOpen(message, "error");
  const warning = (message: string) => onOpen(message, "warning");
  const info = (message: string) => onOpen(message, "info");

  const alertApi = { success, error, warning, info };

  return alertApi;
};

export default useAlert;
`

export const alertStoreReactCode = `
import { ReactNode } from "react";
import { create, StateCreator } from "zustand";
import {
  HiCheckCircle as SuccessIcon,
  HiXCircle as ErrorIcon,
  HiInformationCircle as InfoIcon,
} from "react-icons/hi2";
import { PiWarningCircleFill as WarningIcon } from "react-icons/pi";
import { AlertType, AlertIcon } from "./type";
import { ComponentPlacement } from "@/common/type";

export type AlertOptions = {
  icons?: AlertIcon;
  placement?: Exclude<ComponentPlacement, "left" | "right">;
};

interface AlertState {
  open: boolean;
  message: ReactNode;
  type: AlertType;
  options: AlertOptions;
  onOpen: (message: ReactNode, type: AlertType) => void;
  onClose: () => void;
  configOptions: (options: AlertOptions) => void;
}

const store: StateCreator<AlertState> = (set) => ({
  open: false,
  message: "",
  type: "info",
  options: {
    placement: "top",
    icons: {
      successIcon: <SuccessIcon size={20} />,
      errorIcon: <ErrorIcon size={20} />,
      warningIcon: <WarningIcon size={20} />,
      infoIcon: <InfoIcon size={20} />,
    },
  },
  onOpen: (message: ReactNode, type: AlertType) =>
    set((state) => ({ ...state, open: true, message, type })),
  onClose: () => set((state) => ({ ...state, open: false })),
  configOptions: (options) => set((state) => ({ ...state, options: { ...state.options, ...options } })),
});

const useAlertStore = create(store);

export default useAlertStore;
`

export const alertTypeReactCode = `
import { ReactNode } from "react";

export type AlertType = "success" | "error" | "warning" | "info";

export type AlertIcon = {
  successIcon?: ReactNode;
  errorIcon?: ReactNode;
  warningIcon?: ReactNode;
  infoIcon?: ReactNode;
};
`