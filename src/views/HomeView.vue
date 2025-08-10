<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Divider, Typography, Flex, Button, Card, Icon, Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import HomeParticles from '@/features/Home/HomeParticles.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useMenu from '@/components/View/SideMenu/useMenu'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const t = useLangStore()

const layout = useLayoutStore()

const { filterMenus } = useMenu()

const search = ref<string>('')
</script>

<template>
  <HomeParticles />
  <div :style="{ position: 'relative' }">
    <Title aligns="center">CrossUI</Title>
    <Paragraph aligns="center" :size="18">
      {{ t.lang.home.desc }}
    </Paragraph>
    <Divider />
    <FlexRow>
      <FlexCol :xs="24" :md="14" :lg="14" :span="10">
        <Input v-model="search" :placeholder="t.lang.common.form.placeholder.search" :color="layout.color" sizes="lg">
          <template #addonBefore>
            <Icon :iconName="iconName.SEARCH" />
          </template>
        </Input>
      </FlexCol>
    </FlexRow>
    <div class="home-menu">
      <template v-if="filterMenus(search).length > 0">
        <Card v-for="menu in filterMenus(search)" :key="menu.id" class="menu-group" hoverable>
          <template #body>
            <Paragraph strong :size="18" variant="secondary" rootClassName="group-category">
              {{ menu.category }}
            </Paragraph>
            <FlexRow>
              <FlexCol v-for="item in menu.items" :key="item.id">
                <RouterLink :to="String(item.path)">
                  <Button :color="layout.color">
                    {{ item.label }}
                  </Button>
                </RouterLink>
              </FlexCol>
            </FlexRow>
          </template>
        </Card>
      </template>
      <Space v-else justify="center">
        <Paragraph :size="18" variant="secondary">
          {{ t.lang.common.header.search.empty }}
        </Paragraph>
      </Space>
    </div>
  </div>
</template>
