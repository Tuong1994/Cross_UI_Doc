<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue'
import { Drawer, Flex } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import { useRouter } from 'vue-router'
import SideMenu from '../SideMenu/SideMenu.vue'
import HeaderMode from './HeaderMode.vue'
import HeaderTranslate from './HeaderTranslate.vue'

const { FlexRow, FlexCol } = Flex

interface HeaderMobileProps {
  open?: boolean
}

defineProps<HeaderMobileProps>()

const emits = defineEmits(['onClose'])

const { currentRoute } = useRouter()

const { isPhone } = useViewPoint()

const handleClose = () => emits('onClose')

watch(currentRoute, () => handleClose())
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
