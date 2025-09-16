<script setup lang="ts">
import { Card, Space, Typography, Button } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card rootClassName="section-space">
    <template #body>
      <Space aligns="middle" :size="2">
        <Paragraph italic>{{ t.lang.backgrounds.particles.desc.prefix }}</Paragraph>
        <Button text>
          <a href="https://particles.js.org/" target="_blank">tsparticles</a>
        </Button>
        <Paragraph italic>{{ t.lang.backgrounds.particles.desc.suffix }}</Paragraph>
      </Space>
    </template>
  </Card>
</template>
