export const avatarLetterVueCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" letter="Apple" />
    <Avatar :size="avatarSize" letter="Banana" />
    <Avatar :size="avatarSize" letter="C" />
  </Space>
</template>
`

export const avatarLetterReactCode = `
import { Space, Avatar } from "./components/UI";

const size = 50;

const App: React.FC = () => {
  return (
    <Space>
      <Avatar size={size} letter="Apple" />
      <Avatar size={size} letter="Banana" />
      <Avatar size={size} letter="C" />
    </Space>
  );
};

export default App;
`
