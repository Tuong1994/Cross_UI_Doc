import { watchEffect } from 'vue'

const useAnchorLink = () => {
  const handleScroll = () => {
    const contents = document.querySelectorAll('.anchor-content')
    const menuItems = document.querySelectorAll('.menu-link')
    contents.forEach((content: any) => {
      const scrollY = window.scrollY
      const top = content.offsetTop - 150
      const height = content.offsetHeight
      if (scrollY > top && scrollY < top + height) {
        menuItems.forEach((menu) => {
          menu.classList.remove('menu-link-active')
          if (content.id)
            document.querySelector(`.menu-link[href*=${content.id}]`)?.classList.add('menu-link-active')
        })
      }
    })
  }

  watchEffect((onStop) => {
    window.addEventListener('scroll', handleScroll)
    onStop(() => window.removeEventListener('scroll', handleScroll))
  })
}

export default useAnchorLink
