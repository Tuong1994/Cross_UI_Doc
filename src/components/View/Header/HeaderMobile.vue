<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Drawer, Flex } from '@/components/UI'
import SideMenu from '../SideMenu/SideMenu.vue'
import HeaderMode from './HeaderMode.vue'
import HeaderTranslate from './HeaderTranslate.vue'
import { useViewPoint } from '@/hooks'

const { FlexRow, FlexCol } = Flex

interface HeaderMobileProps {
  open?: boolean
}

defineProps<HeaderMobileProps>()

const emits = defineEmits(['onClose'])

const { isPhone } = useViewPoint()

const handleClose = () => emits('onClose')
</script>

<template>
  <Drawer :full="isPhone" :open="open" @onClose="handleClose">
    <template #head>
      <FlexRow v-if="isPhone">
        <FlexCol :xs="10">
          <HeaderMode />
        </FlexCol>
        <FlexCol :xs="12">
          <HeaderTranslate />
        </FlexCol>
      </FlexRow>
    </template>
    <template #body>
      <SideMenu />
    </template>
  </Drawer>
</template>
