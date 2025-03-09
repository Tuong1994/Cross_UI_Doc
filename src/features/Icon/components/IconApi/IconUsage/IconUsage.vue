<script setup lang="ts">
import { Card, Space, Button, Typography } from '@/components/UI'
import { iconComponentCode, iconListCode, iconNameCode } from './code'
import { iconCatalogIds } from '@/features/Icon/repository/catalogIds'
import CodeBlock from '@/components/View/Code/CodeBlock.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="iconCatalogIds.ICON_USAGE">
    <Paragraph :size="18" strong>
      {{ t.lang.icon.usage.title }}
    </Paragraph>
    <Space :size="0" aligns="middle">
      <Paragraph italic>
        {{ t.lang.icon.usage.desc.prefix }}
      </Paragraph>
      <Button text>
        <a href="https://docs.fontawesome.com/web/use-with/vue/add-icons" target="_blank">vue-fortawesome</a>
      </Button>
      <Paragraph italic>
        {{ t.lang.icon.usage.desc.suffix }}
      </Paragraph>
    </Space>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph italic variant="secondary">src/libs/icon.ts</Paragraph>
      </template>
      <template #body>
        <Paragraph>
          {{ t.lang.icon.usage.libs }}
        </Paragraph>
        <CodeBlock :code="iconListCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph italic variant="secondary">@/components/UI/Icon/constant</Paragraph>
      </template>
      <template #body>
        <Paragraph>
          {{ t.lang.icon.usage.iconName }}
        </Paragraph>
        <Paragraph italic>
          {{ t.lang.icon.usage.example }}: faAngleDown => ANGLE_DOWN: 'angle-down'
        </Paragraph>
        <CodeBlock :code="iconNameCode" />
      </template>
    </Card>
    <Card rootClassName="section-space">
      <template #head>
        <Paragraph italic variant="secondary">@/components/UI/Icon/Icon.vue</Paragraph>
      </template>
      <template #body>
        <Paragraph>Icon component</Paragraph>
        <CodeBlock :code="iconComponentCode" />
      </template>
    </Card>
  </AnchorContent>
</template>
