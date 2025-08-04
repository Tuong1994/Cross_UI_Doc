export const tooltipPlacementVueCode = `
<script setup lang="ts">
import { Tooltip, Button, Divider } from '@/components/UI'
import type { ComponentPlacement } from '@/common/type'

const placements: ComponentPlacement[] = ['top', 'bottom', 'left', 'right']
</script>

<template>
  <template v-for="placement in placements" :key="placement">
    <Divider>{{ placement }}</Divider>
    <Tooltip :placement="placement">
      <template #title>
        <Button>Hover me</Button>
      </template>
      <template #content>Tooltip Popup</template>
    </Tooltip>
  </template>
</template>
`

export const tooltipPlacementReactCode = `
import { Button, Divider, Space, Tooltip } from "./components/UI";
import { ComponentPlacement } from "./common/type";
import { Fragment } from "react";

const App: React.FC = () => {
  const placements: ComponentPlacement[] = ["top", "bottom", "left", "right"];

  const renderContent = () => {
    return placements.map((placement) => (
      <Fragment key={placement}>
        <Divider>{placement}</Divider>
        <Space justify="center">
          <Tooltip content="Tooltip popup">
            <Button>Hover me</Button>
          </Tooltip>
        </Space>
      </Fragment>
    ));
  };

  return renderContent();
};

export default App;
`