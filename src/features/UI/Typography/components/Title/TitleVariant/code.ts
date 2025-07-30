export const titleVariantVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title variant="default">Heading</Title>
  <Title variant="secondary">Heading</Title>
  <Title variant="success">Heading</Title>
  <Title variant="warning">Heading</Title>
  <Title variant="danger">Heading</Title>
</template>
`

export const titleVariantReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title variant="default">Heading</Title>
      <Title variant="success">Heading</Title>
      <Title variant="warning">Heading</Title>
      <Title variant="danger">Heading</Title>
      <Title variant="secondary">Heading</Title>
    </>
  );
};

export default App;
`