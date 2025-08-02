export const avatarBadgeVueCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" badge="1" />
    <Avatar :size="avatarSize" badge="999999" />
  </Space>
</template>
`

export const avatarBadgeReactCode = `
import { Space, Avatar } from "./components/UI";

const size = 50;

const App: React.FC = () => {
  return (
    <Space>
      <Avatar size={size} badge="1" />
      <Avatar size={size} badge="999999" />
    </Space>
  );
};

export default App;
`
