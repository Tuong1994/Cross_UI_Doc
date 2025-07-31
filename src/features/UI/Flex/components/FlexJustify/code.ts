export const flexJustifyVueCode = `
<script setup lang="ts">
import { Flex, Card, Typography } from '@/components/UI'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const justifies = ['start', 'center', 'end', 'between', 'around', 'evenly']
</script>

<template>
  <Card v-for="justify in justifies" :key="justify" rootClassName="section-space">
    <template #body>
      <Title :level="6">{{ justify }}</Title>
      <FlexRow :justify="justify">
        <FlexCol v-for="item in 3" :key="item" :span="6">
          <Card>
            <template #body>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
              </Paragraph>
            </template>
          </Card>
        </FlexCol>
      </FlexRow>
    </template>
  </Card>
</template>
`

export const flexJustifyReactCode = `
import { Flex, Card, Typography } from "./components/UI";
import { ComponentJustify } from "./common/type";

const { Title, Paragraph } = Typography;

const { FlexRow, FlexCol } = Flex;

const App: React.FC = () => {
  const justifies: ComponentJustify[] = ["start", "center", "end", "between", "around", "evenly"];

  const renderContent = () => {
    return justifies.map((justify) => (
      <Card key={justify}>
        <Title level={6}>{justify}</Title>
        <FlexRow justify={justify}>
          {[...Array(3)].map((_, idx) => (
            <FlexCol key={idx} span={6}>
              <Card>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
                </Paragraph>
              </Card>
            </FlexCol>
          ))}
        </FlexRow>
      </Card>
    ));
  };

  return renderContent();
};

export default App;
`