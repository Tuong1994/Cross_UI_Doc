export const flexGuttersVueCode = `
<script setup lang="ts">
import { Flex, Card } from '@/components/UI'

const { FlexRow, FlexCol } = Flex
</script>

<template>
  <FlexRow :gutters="[20, 25]">
    <FlexCol v-for="item in 10" :key="item" :span="6">
      <Card />
    </FlexCol>
  </FlexRow>
</template>
`

export const flexGuttersReactCode = `
import { Flex, Card } from "./components/UI";

const { FlexRow, FlexCol } = Flex;

const App: React.FC = () => {
  const renderContent = () => {
    return (
      <FlexRow gutters={[20, 25]}>
        {[...Array(10)].map((_, idx) => (
          <FlexCol key={idx} span={6}>
            <Card />
          </FlexCol>
        ))}
      </FlexRow>
    );
  };

  return renderContent();
};

export default App;
`