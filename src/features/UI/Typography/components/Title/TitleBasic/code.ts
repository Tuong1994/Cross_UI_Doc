export const titleBasicVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title>Heading</Title>
</template>
`

export const titleBasicReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return <Title>Heading</Title>;
};

export default App;
`