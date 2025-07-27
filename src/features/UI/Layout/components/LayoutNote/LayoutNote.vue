<script setup lang="ts">
import { Typography, UList, Card } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { List, ListItem } = UList

const t = useLangStore()
</script>

<template>
  <Card rootClassName="section-space">
    <template #body>
      <List>
        <template #head>
          <Paragraph strong :size="16" variant="warning">{{ t.lang.layout.note.title }}</Paragraph>
        </template>
        <ListItem>
          {{ t.lang.layout.note.content }}
        </ListItem>
        <ListItem>
          {{ t.lang.layout.note.reason }}
        </ListItem>
      </List>
    </template>
  </Card>
</template>
