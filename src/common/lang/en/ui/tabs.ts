const tabs_en = {
  desc: 'Tabs make it easy to explore and switch between different views.',
  api: {
    tabsDesc: {
      type: 'Type of the tabs (e.g., line, card)',
      items: 'List of tab items to display',
      color: 'Color theme of the tabs',
      rootClassName: 'Class name of the container',
      headClassName: 'Class name of the tab headers',
      contentClassName: 'Class name of the tab content section',
      rootStyle: 'Inline styles for the container',
      headStyle: 'Inline styles for the tab headers',
      contentStyle: 'Inline styles for the tab content section',
      defaultActiveId: 'ID of the tab to be active by default',
      onSelectTab: 'Triggered when a tab is selected'
    },
    itemDesc: {
      id: 'Unique ID of the tab item',
      label: 'Label text for the tab title',
      labelIcon: 'Icon displayed next to the tab title',
      comName: 'Name of the dynamic component to render in the tab content',
      content: 'Text or component to display in the tab content'
    }
  }
}

export default tabs_en
