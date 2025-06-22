<script setup lang="ts">
import { computed, ref } from 'vue'
import { Modal, Space, Button } from '@/components/UI'
import { modalCatalogIds } from '@/features/Modal/repository/catalogIds'
import { modalSizeCode } from './code'
import type { ComponentSize } from '@/common/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
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
  <AnchorContent :id="modalCatalogIds.SIZE">
    <ShowCase title="Size" :code="modalSizeCode">
      <Space>
        <Button v-for="size in sizes" color="green" @click="handleOpenModal(size)">
          {{ buttonTitle(size) }}
        </Button>
      </Space>
      <Modal color="green" :sizes="currentSize" :open="open" @onClose="handleOpenModal">
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
