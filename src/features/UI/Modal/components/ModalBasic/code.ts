export const modalBasicCode = `
<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@/components/UI'

const open = ref<boolean>(false)

const handleOpenModal = () => (open.value = !open.value)
</script>

<template>
  <Button color="green" @click="handleOpenModal">Click me</Button>
  <Modal color="green" :open="open" @onClose="handleOpenModal">
    <template #head> Modal </template>
    <template #body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae eum, laborum autem pariatur
      beatae consectetur harum magnam est numquam officia optio quae, odit totam aliquid eligendi iste culpa
      eveniet quo, in consequuntur aspernatur. Eaque quae repellat repellendus voluptatem, similique,
      asperiores veniam vero recusandae unde quidem eligendi atque consectetur fugit!
    </template>
  </Modal>
</template>
`