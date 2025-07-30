export const titleAlignsVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title aligns="left">Left</Title>
  <Title aligns="center">Center</Title>
  <Title aligns="right">Right</Title>
  <Title aligns="justify">Justify</Title>
</template>
`

export const titleAlignsReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title aligns="justify">Justify</Title>
      <Title aligns="left">Left</Title>
      <Title aligns="center">Center</Title>
      <Title aligns="right">Right</Title>
    </>
  );
};

export default App;
`