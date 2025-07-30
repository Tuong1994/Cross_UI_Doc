export const paragraphAlignsVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Paragraph } = Typography
</script>

<template>
  <Paragraph aligns="justify">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph aligns="left">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph aligns="center">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
  <Paragraph aligns="right">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda harum
    minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim incidunt
    illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto, ipsa magnam
    recusandae harum vel dolorem corrupti! Assumenda?
  </Paragraph>
</template>
`

export const paragraphAlignsReactCode = `
import { Typography } from "./components/UI";

const { Title, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title level={6} aligns="justify">
        Justify
      </Title>
      <Paragraph aligns="justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Title level={6} aligns="left">
        Left
      </Title>
      <Paragraph aligns="left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Title level={6} aligns="center">
        Center
      </Title>
      <Paragraph aligns="center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ducimus magni recusandae assumenda
        harum minima ex cumque deleniti corrupti amet, eos provident possimus at dicta animi excepturi enim
        incidunt illum quaerat eum corporis itaque nostrum rem. Corporis cumque sunt, esse, earum architecto,
        ipsa magnam recusandae harum vel dolorem corrupti! Assumenda?
      </Paragraph>
      <Title level={6} aligns="right">
        Right
      </Title>
      <Paragraph aligns="right">
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
