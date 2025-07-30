export const dividerVerticalVueCode = `
<script setup lang="ts">
import { Divider, Badge, Space } from '@/components/UI'

const badges = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <template v-for="(badge, idx) in badges" :key="badge">
      <Badge :color="badge">{{ badge }}</Badge>
      <Divider v-if="idx < badges.length - 1" type="vertical" />
    </template>
  </Space>
</template>
`

export const dividerVerticalReactCode = `
import { Badge, Space, Divider } from "./components/UI";
import { BadgeColor } from "./components/UI/Badge/type";

const App: React.FC = () => {
  const badges: BadgeColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const renderContent = () => {
    return badges.map((badge, idx) => (
      <>
        <Badge color={badge}>{badge}</Badge>
        {idx < badges.length - 1 && <Divider type="vertical" />}
      </>
    ));
  };

  return <Space>{renderContent()}</Space>;
};

export default App;
`