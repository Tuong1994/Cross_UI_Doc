const layout_en = {
  desc: 'Handling the overall layout of a page',
  note: {
    title: 'Important',
    content:
      'The Layout component must be used at the root level of your application layout, and should not be nested inside any other container elements (like <div>, <section>, etc.).',
    reason:
      'This layout uses "position: fixed" for elements like the "Header" and "Sidebar". Wrapping it inside other containers can interfere with positioning and cause visual/layout issues.'
  },
  api: {
    commonDesc: {
      rootClassName: 'Class name of the container',
      rootStyle: 'Inline styles for the container'
    },
    containerDesc: {
      theme: 'Layout theme (light or dark mode)',
      color: 'Color theme of the layout'
    },
    headDesc: {
      fixed: 'Enables fixed header mode'
    },
    sideDesc: {
      collapsable: 'Enables sidebar collapsible mode',
      hasCollapseButton: 'Shows or hides the collapse button',
      onCollapse: 'Triggered when the collapse button is clicked'
    },
    menuDesc: {
      itemClassName: 'Class name of the menu item',
      itemStyle: 'Inline styles for the menu item',
      items: 'List of menu items',
      type: 'Type of the menu',
      color: 'Color theme of the menu'
    },
    menuItemDesc: {
      id: 'Unique ID of the menu item',
      label: 'Text label of the menu item',
      labelIcon: 'Icon displayed alongside the menu label',
      type: 'Type of the menu item',
      path: 'Route path for the menu item',
      isRoot: 'Indicates whether the menu item is a root item',
      children: 'List of nested submenu items'
    }
  }
}

export default layout_en
