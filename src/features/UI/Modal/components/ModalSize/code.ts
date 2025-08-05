export const modalSizeVueCode = `
<script setup lang="ts">
import { computed, ref } from 'vue'
import { Modal, Space, Button } from '@/components/UI'
import type { ComponentSize } from '@/common/type'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const open = ref<boolean>(false)

const currentSize = ref<ComponentSize>('sm')

const sizes = computed<ComponentSize[]>(() => ['sm', 'md', 'lg'])

const buttonTitle = (size: ComponentSize) => {
  const record: Record<string, string> = {
    sm: t.lang.common.size.sm,
    md: t.lang.common.size.md,
    lg: t.lang.common.size.lg
  }
  return record[size]
}

const handleOpenModal = (size: ComponentSize) => {
  currentSize.value = size
  open.value = !open.value
}
</script>

<template>
  <Space>
    <Button v-for="size in sizes" color="green" @click="handleOpenModal(size)">
      {{ buttonTitle(size) }}
    </Button>
  </Space>
  <Modal color="green" :sizes="currentSize" :open="open" @onClose="handleOpenModal">
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

export const modalSizeReactCode = `
import { useState } from "react";
import { Modal, Button, Space } from "./components/UI";
import { ComponentSize } from "./common/type";
import { ButtonSize } from "./components/UI/Button/type";

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [modalSize, setModalSize] = useState<ComponentSize>("md");

  const sizes: ButtonSize[] = ["sm", "md", "lg"];

  const handleTrigger = (size?: ButtonSize) => {
    if (size) setModalSize(size);
    setOpen(!open);
  };

  return (
    <>
      <Space>
        {sizes.map((size) => (
          <Button key={size} sizes={size} onClick={() => handleTrigger(size)}>
            Click me
          </Button>
        ))}
      </Space>
      <Modal sizes={modalSize} open={open} onCancel={handleTrigger}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita provident aliquam placeat
        repudiandae maiores porro cupiditate doloremque libero nam? Corrupti, dolores libero aliquam magnam
        quas aspernatur cumque error provident laborum cupiditate accusamus veniam, incidunt blanditiis sint
        possimus itaque aut sed atque? Asperiores saepe animi aspernatur impedit illum harum minima corporis
        earum fugiat eveniet velit, officia, quaerat facere voluptatem, laboriosam iure nobis quo nesciunt
      </Modal>
    </>
  );
};

export default App;
`