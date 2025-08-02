export const avatarDotVueCode = ` 
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50

const avatarColors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" dot />
  </Space>
</template>
`

export const avatarDotReactCode = `
import { Space, Avatar } from "./components/UI";
import { AvatarColor } from "./components/UI/Avatar/type";

const size = 50;

const App: React.FC = () => {
  const colors: AvatarColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const renderContent = () => {
    return (
      <Space>
        {colors.map((color) => (
          <Avatar key={color} size={size} color={color} dot />
        ))}
      </Space>
    );
  };

  return renderContent();
};

export default App;
`