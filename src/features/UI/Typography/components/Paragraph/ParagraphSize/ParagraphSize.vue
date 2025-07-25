<script setup lang="ts">
import { Typography } from '@/components/UI'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { paragraphSizeCode } from './code'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.PARAGRAPH_SIZE">
    <ShowCase title="Size" :code="paragraphSizeCode">
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph :size="18">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
    </ShowCase>
  </AnchorContent>
</template>
