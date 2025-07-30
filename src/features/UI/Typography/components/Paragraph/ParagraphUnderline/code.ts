export const paragraphUnderlineVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Paragraph } = Typography
</script>

<template>
  <Paragraph underline>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
</template>
`

export const paragraphUnderlineReactCode = `
import { Typography } from "./components/UI";

const { Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <Paragraph underline>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
      minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
      illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
      recusandae harum vel dolorem corrupti! Assumenda?
    </Paragraph>
  );
};

export default App;
`