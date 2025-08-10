<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@/components/UI'
import { modalBasicReactCode, modalBasicVueCode } from './code'
import { modalCatalogIds } from '@/features/UI/Modal/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const open = ref<boolean>(false)

const handleOpenModal = () => (open.value = !open.value)
</script>

<template>
  <AnchorContent :id="modalCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="modalBasicVueCode" :reactCode="modalBasicReactCode">
      <Button color="green" @click="handleOpenModal">Click me</Button>
      <Modal color="green" :open="open" @onClose="handleOpenModal">
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
