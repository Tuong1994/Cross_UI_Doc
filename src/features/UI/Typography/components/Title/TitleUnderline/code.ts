export const titleUnderlineVueCode = `
<script setup lang="ts">
import { Typography } from '@/components/UI'

const { Title } = Typography
</script>

<template>
  <Title underline>Heading</Title>
</template>
`

export const titleUnderlineReactCode = `
import { Typography } from "./components/UI";

const { Title } = Typography;

const App: React.FC = () => {
  return <Title underline>Heading</Title>;
};

export default App;
`