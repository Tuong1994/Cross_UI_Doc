<script setup lang="ts">
import { computed } from 'vue'
import { Layout, Section, Flex } from '@/components/UI'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import Header from '../Header/Header.vue'
import SideMenu from '../SideMenu/SideMenu.vue'
import SideCatalog from '../SideCatalog/SideCatalog.vue'

const { FlexRow, FlexCol } = Flex

const { Container, Body, Side, Content } = Layout

const { currentRoute } = useRouter()

const showCatalog = computed<boolean>(() => Boolean(currentRoute.value.name !== routeNames.HOME))
</script>

<template>
  <Container>
    <Header />
    <Body>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Section>
          <FlexRow>
            <FlexCol :span="20">
              <slot></slot>
            </FlexCol>
          </FlexRow>
          <SideCatalog v-if="showCatalog" />
        </Section>
      </Content>
    </Body>
  </Container>
</template>
