export const badgeBasicVueCode = `
<script setup lang="ts">
import { Space, Badge } from '@/components/UI'
</script>

<template>
  <Space>
    <Badge>Badge</Badge>
    <Badge ghost>Badge</Badge>
  </Space>
</template>
`

export const badgeBasicReactCode = `
import { Space, Badge } from "./components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <Badge>Badge</Badge>
      <Badge ghost>Badge</Badge>
    </Space>
  );
};

export default App;
`