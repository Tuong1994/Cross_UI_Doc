<script setup lang="ts">
import { Typography } from '@/components/UI'
import { typographyCatalogIds } from '@/features/UI/Typography/repository/catalogIds'
import { paragraphLineHeightReactCode, paragraphLineHeightVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="typographyCatalogIds.PARAGRAPH_LINE_HEIGHT">
    <ShowCase title="Line height" code="" :vueCode="paragraphLineHeightVueCode" :reactCode="paragraphLineHeightReactCode">
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph :lineHeight="35">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
    </ShowCase>
  </AnchorContent>
</template>
