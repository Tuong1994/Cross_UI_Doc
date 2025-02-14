<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Drawer } from '@/components/UI'

interface HeaderMobileProps {
  open?: boolean
}

defineProps<HeaderMobileProps>()

const emits = defineEmits(['onClose'])

const handleClose = () => emits('onClose')
</script>

<template>
  <Drawer :open="open" @onClose="handleClose">
    
  </Drawer>
</template>
