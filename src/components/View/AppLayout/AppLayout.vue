<script setup lang="ts">
import { computed, type StyleValue } from 'vue'
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

const isNotHomeRoute = computed<boolean>(() => currentRoute.value.name !== routeNames.HOME)

const responsive = computed<boolean>(() => screenWidth.value > LAPTOP)

const showSide = computed<boolean>(() => isNotHomeRoute.value)

const showCatalog = computed<boolean>(() => Boolean(isNotHomeRoute.value && responsive.value))

const sectionClassName = computed<string>(() => (!isNotHomeRoute.value ? 'app-content-wrapper' : ''))

const contentStyle = computed<StyleValue | undefined>(() =>
  isNotHomeRoute.value ? undefined : { paddingLeft: 0 }
)
</script>

<template>
  <Container>
    <Header />
    <Body>
      <Side v-if="showSide">
        <SideMenu />
      </Side>
      <Content :rootStyle="contentStyle">
        <Section :rootClassName="sectionClassName">
          <FlexRow>
            <FlexCol :xs="24" :md="24" :lg="24" :span="showCatalog ? 20 : 24">
              <slot></slot>
            </FlexCol>
          </FlexRow>
          <SideCatalog v-if="showCatalog" />
        </Section>
      </Content>
    </Body>
  </Container>
</template>
