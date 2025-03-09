export const iconListCode = `
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUser,
    // ...other icons
} from '@fortawesome/free-solid-svg-icons'

export const iconList = () => {
  return library.add(
    faUser,
    // ...other icons
  )
}
`
export const iconNameCode = `
export const iconType = {
  FAS: 'fas',
  FAR: 'far'
  // ...other icon type
}

export const iconName = {
  USER: 'user',
  // ...other icons
}
`

export const iconComponentCode = `
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { iconType } from './constant.ts'

export interface IconProps {
  type?: string
  iconName: string
  // ...other props
}

const props = withDefaults(defineProps<IconProps>(), {
  rootClassName: '',
  type: iconType.FAS
})
</script>

<template>
  <fa :icon="[type, iconName]" :class="rootClassName"  />
</template>
`
