export const titleWeightVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
    <Title>Heading</Title>
    <Title :weight="800">Heading</Title>
</template>
`

export const titleWeightReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title>Heading</Title>
      <Title weight={800}>Heading</Title>
    </>
  );
};

export default App;
`