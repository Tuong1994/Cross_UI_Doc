<script setup lang="ts">
import { ref } from 'vue'
import { Divider, Typography, Flex, Button } from '@/components/UI'
import { Input } from '@/components/Control'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useMenu from '@/components/View/SideMenu/hooks/useMenu'
import { RouterLink } from 'vue-router'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const t = useLangStore()

const layout = useLayoutStore()

const menus = useMenu()

const search = ref<string>('')
</script>

<template>
  <Title>Vue Components</Title>
  <Paragraph>
    Provides plenty of UI components to enrich your web applications, and we will improve components
    experience consistently.
  </Paragraph>
  <Divider />
  <FlexRow>
    <FlexCol :span="10">
      <Input v-model="search" :placeholder="t.lang.common.form.placeholder.search" :color="layout.color" />
    </FlexCol>
    <FlexCol>
      <Button :color="layout.color">
        {{ t.lang.common.form.placeholder.search }}
      </Button>
    </FlexCol>
  </FlexRow>
  <div class="home-menu">
    <div v-for="menu in menus" :key="menu.id" class="menu-group">
      <Paragraph strong :size="18" variant="secondary" rootClassName="group-category">
        {{ menu.category }}
      </Paragraph>
      <FlexRow>
        <FlexCol v-for="item in menu.items" :key="item.id">
          <RouterLink :to="String(item.path)">
            <Button :color="layout.color" ghost>
              {{ item.label }}
            </Button>
          </RouterLink>
        </FlexCol>
      </FlexRow>
    </div>
  </div>
</template>
