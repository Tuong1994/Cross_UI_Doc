const backgrounds_en = {
  floating: {
    desc: 'Background with floating squares or bubble animations in multiple colors',
    api: {
      floatingDesc: {
        rootClassName: 'Class name of the container',
        rootStyle: 'Inline styles for the container',
        color: 'Color of the background',
        shape: 'Shape of background items',
        count: 'Number of items visible in the background',
        zIndex: 'Determines whether the background appears in front of or behind others when overlapping',
        fullScreen: 'Enables fixed positioning for the background to cover the full page'
      }
    }
  },
  particles: {
    desc: {
      content: 'Background with multiple particle animation options',
      prefix: 'Particles are based on',
      suffix: 'library'
    },
    api: {
      particlesDesc: {
        rootClassName: 'Class name of the container',
        rootStyle: 'Inline styles for the container',
        id: 'Unique ID for the particles (recommended: provide this when rendering multiple backgrounds in the same component)',
        hasColor: 'Enables color for the background',
        fullScreen: 'Enables fixed positioning for the background to cover the full page',
        color: 'Color of the background',
        zIndex: 'Determines whether the background appears in front of or behind others when overlapping',
        options: 'Particle options (based on tsparticles library)'
      }
    }
  }
}

export default backgrounds_en
