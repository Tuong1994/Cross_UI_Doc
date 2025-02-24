<script setup lang="ts">
import { computed } from 'vue'
import { Layout, Section, Flex } from '@/components/UI'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import Header from '../Header/Header.vue'
import SideMenu from '../SideMenu/SideMenu.vue'
import SideCatalog from '../SideCatalog/SideCatalog.vue'

const { FlexRow, FlexCol } = Flex

const { Container, Body, Side, Content } = Layout

const { LAPTOP } = breakpoint

const { currentRoute } = useRouter()

const { screenWidth } = useViewPoint()

const responsive = computed<boolean>(() => screenWidth.value > LAPTOP)

const showCatalog = computed<boolean>(() =>
  Boolean(currentRoute.value.name !== routeNames.HOME && responsive.value)
)
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
            <FlexCol :xs="24" :md="24" :lg="24" :span="20">
              <slot></slot>
            </FlexCol>
          </FlexRow>
          <SideCatalog v-if="showCatalog" />
        </Section>
      </Content>
    </Body>
  </Container>
</template>
