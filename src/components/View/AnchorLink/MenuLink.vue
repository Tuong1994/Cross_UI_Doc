<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { smoothScroll } from './smoothScroll'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useAnchorLink from './useAnchorLink'

interface MenuLinkProps {
  id?: string
  rootClassName?: string
}

defineProps<MenuLinkProps>()

const layout = useLayoutStore()

const colorClassName = computed<string>(() => `menu-link-${layout.color}`)

useAnchorLink()

const handleNavigate = (e: MouseEvent) => smoothScroll(e)
</script>

<template>
  <a :href="`#${id}`" :class="['menu-link', colorClassName, rootClassName]" @click="handleNavigate">
    <slot></slot>
  </a>
</template>
