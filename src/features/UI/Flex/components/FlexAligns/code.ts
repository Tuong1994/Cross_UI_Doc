export const flexAlignsVueCode = `
<script setup lang="ts">
import { Flex, Card, Typography } from '@/components/UI'
import type { ComponentAligns } from '@/common/type'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const aligns: ComponentAligns[] = ['top', 'middle', 'bottom', 'baseline']
</script>

<template>
  <Card v-for="align in aligns" :key="align" rootClassName="section-space">
    <template #body>
      <Title :level="6">{{ align }}</Title>
      <FlexRow :aligns="align">
        <FlexCol :span="8">
          <Card>
            <template #body>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
              </Paragraph>
            </template>
          </Card>
        </FlexCol>
        <FlexCol :span="8">
          <Card>
            <template #body>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque assumenda blanditiis
                architecto ab quis quaerat maiores, deleniti culpa repudiandae voluptas!
              </Paragraph>
            </template>
          </Card>
        </FlexCol>
        <FlexCol :span="8">
          <Card>
            <template #body>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus mollitia id voluptatibus
                impedit nesciunt esse. Fugiat necessitatibus quaerat, excepturi magnam, quasi commodi, rerum
                modi ipsam neque omnis fugit nulla?
              </Paragraph>
            </template>
          </Card>
        </FlexCol>
      </FlexRow>
    </template>
  </Card>
</template>
`

export const flexAlignsReactCode = `
import { Flex, Card, Typography } from "./components/UI";
import { ComponentAligns } from "./common/type";

const { Title, Paragraph } = Typography;

const { FlexRow, FlexCol } = Flex;

const App: React.FC = () => {
  const aligns: ComponentAligns[] = ["top", "middle", "bottom", "baseline"];

  const renderContent = () => {
    return aligns.map((align) => (
      <Card key={align}>
        <Title level={6}>{align}</Title>
        <FlexRow align={align}>
          <FlexCol span={8}>
            <Card>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, sit?
              </Paragraph>
            </Card>
          </FlexCol>
          <FlexCol span={8}>
            <Card>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque assumenda blanditiis
                architecto ab quis quaerat maiores, deleniti culpa repudiandae voluptas!
              </Paragraph>
            </Card>
          </FlexCol>
          <FlexCol span={8}>
            <Card>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus mollitia id voluptatibus
                impedit nesciunt esse. Fugiat necessitatibus quaerat, excepturi magnam, quasi commodi, rerum
                modi ipsam neque omnis fugit nulla?
              </Paragraph>
            </Card>
          </FlexCol>
        </FlexRow>
      </Card>
    ));
  };

  return renderContent();
};

export default App;
`
