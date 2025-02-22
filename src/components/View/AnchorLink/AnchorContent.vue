<script setup lang="ts">
import { defineProps } from 'vue'

interface AnchorContentProps {
  id?: string
  rootClassName?: string
}

defineProps<AnchorContentProps>()
</script>

<template>
  <div :id="id" :class="['anchor-content', rootClassName]">
    <slot></slot>
  </div>
</template>
