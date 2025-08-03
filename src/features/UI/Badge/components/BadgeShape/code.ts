export const badgeShapeVueCode = `
<script setup lang="ts">
import { Space, Badge } from '@/components/UI'

const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <Badge v-for="color in colors" :key="color" :color="color" shape="square">Badge</Badge>
  </Space>
  <Space>
    <Badge v-for="color in colors" :key="color" :color="color" ghost shape="square">Badge</Badge>
  </Space>
  <Space>
    <Badge v-for="color in colors" :key="color" :color="color" shape="round">Badge</Badge>
  </Space>
  <Space>
    <Badge v-for="color in colors" :key="color" :color="color" ghost shape="round">Badge</Badge>
  </Space>
</template>
`

export const badgeShapeReactCode = `
import { Space, Badge } from "./components/UI";
import { BadgeColor } from "./components/UI/Badge/type";

const App: React.FC = () => {
  const colors: BadgeColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const renderContent = () => {
    return (
      <>
        <Space>
          {colors.map((color) => (
            <Badge key={color} color={color} shape="square">
              Badge
            </Badge>
          ))}
        </Space>
        <Space>
          {colors.map((color) => (
            <Badge key={color} color={color} shape="round" ghost>
              Badge
            </Badge>
          ))}
        </Space>
        <Space>
          {colors.map((color) => (
            <Badge key={color} color={color} shape="square">
              Badge
            </Badge>
          ))}
        </Space>
        <Space>
          {colors.map((color) => (
            <Badge key={color} color={color} shape="round" ghost>
              Badge
            </Badge>
          ))}
        </Space>
      </>
    );
  };

  return renderContent();
};

export default App;
`