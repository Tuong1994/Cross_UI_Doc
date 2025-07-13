export const paragraphLineHeightCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Paragraph } = Typography
</script>

<template>
    <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
        minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
        illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
        recusandae harum vel dolorem corrupti! Assumenda?
    </Paragraph>
    <Paragraph :lineHeight="35">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
        minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
        illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
        recusandae harum vel dolorem corrupti! Assumenda?
    </Paragraph>
</template>
`
