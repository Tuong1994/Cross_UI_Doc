<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Divider, Typography, Flex, Button, Card, Icon, Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import useMenu from '@/components/View/SideMenu/useMenu'

const { Title, Paragraph } = Typography

const { FlexRow, FlexCol } = Flex

const t = useLangStore()

const layout = useLayoutStore()

const { filterMenus } = useMenu()

const search = ref<string>('')

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container)
}
</script>

<template>
  <vue-particles
    id="tsparticles"
    @particles-loaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: '#000'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }"
  />

  <div :style="{ position: 'relative' }">
    <Title>Vue Components</Title>
    <Paragraph>
      {{ t.lang.home.desc }}
    </Paragraph>
    <Divider />
    <FlexRow>
      <FlexCol :xs="24" :md="14" :lg="14" :span="10">
        <Input v-model="search" :placeholder="t.lang.common.form.placeholder.search" :color="layout.color">
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
                  <Button :color="layout.color" ghost>
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
