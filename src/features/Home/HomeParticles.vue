<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import type { ISourceOptions } from '@tsparticles/engine'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const background = ref<string>('#eee')

const particlesColor = ref<string>('#000')

const particlesOptions = computed<ISourceOptions>(() => ({
  background: {
    color: {
      value: background.value
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
      value: particlesColor.value
    },
    links: {
      color: particlesColor.value,
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
      value: 120
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
}))

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container)
}

watchEffect(() => {
  if (layout.theme === 'light') {
    background.value = '#eee'
    particlesColor.value = '#000'
  } else {
    background.value = '#222'
    particlesColor.value = '#fff'
  }
})
</script>

<template>
  <vue-particles id="tsparticles" :key="layout.theme" @particles-loaded="particlesLoaded" :options="particlesOptions" />
</template>
