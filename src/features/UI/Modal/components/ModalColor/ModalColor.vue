<script setup lang="ts">
import { computed, ref } from 'vue'
import { Modal, Space, Button } from '@/components/UI'
import { modalCatalogIds } from '@/features/UI/Modal/repository/catalogIds'
import { modalColorReactCode, modalColorVueCode } from './code'
import type { ComponentColor } from '@/common/type'
import type { ButtonColor } from '@/components/UI/Button/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const open = ref<boolean>(false)

const currentColor = ref<ComponentColor>('green')

const colors = computed<ComponentColor[]>(() => [
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'purple',
  'pink'
])

const handleOpenModal = (color: ComponentColor) => {
  currentColor.value = color
  open.value = !open.value
}
</script>

<template>
  <AnchorContent :id="modalCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="modalColorVueCode" :reactCode="modalColorReactCode">
      <Space>
        <Button
          v-for="color in colors"
          :key="color"
          :color="color as ButtonColor"
          @click="handleOpenModal(color)"
        >
          Click me
        </Button>
      </Space>
      <Modal :color="currentColor" :open="open" @onClose="handleOpenModal">
        <template #head> Modal </template>
        <template #body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae eum, laborum autem
          pariatur beatae consectetur harum magnam est numquam officia optio quae, odit totam aliquid eligendi
          iste culpa eveniet quo, in consequuntur aspernatur. Eaque quae repellat repellendus voluptatem,
          similique, asperiores veniam vero recusandae unde quidem eligendi atque consectetur fugit!
        </template>
      </Modal>
    </ShowCase>
  </AnchorContent>
</template>
