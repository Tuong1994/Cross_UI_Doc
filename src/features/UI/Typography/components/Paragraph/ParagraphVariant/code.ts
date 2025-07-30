export const paragraphVariantVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Paragraph } = Typography
</script>

<template>
  <Paragraph variant="default">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph variant="secondary">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph variant="success">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph variant="warning">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph variant="danger">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
</template>
`

export const paragraphVariantReactCode = `
import { Typography } from "./components/UI";

const { Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Paragraph variant="default">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph variant="secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph variant="success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph variant="warning">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Paragraph variant="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
    </>
  );
};

export default App;
`