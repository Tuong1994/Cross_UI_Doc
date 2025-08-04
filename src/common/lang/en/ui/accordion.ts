const accordion_en = {
  desc: 'A content area which can be collapsed and expanded',
  api: {
    accordionDesc: {
      rootClassName: 'Class name of the container',
      labelClassName: 'Class name of the label section',
      contentClassName: 'Class name of the content section',
      rootStyle: 'Inline styles for the container',
      labelStyle: 'Inline styles for the label section',
      contentStyle: 'Inline styles for the content section',
      label: 'Text label of the accordion header',
      labelIcon: 'Icon indicating collapse/expand state',
      extraIcon: 'Additional icon displayed in the header',
      contentId: 'Unique ID for the accordion content',
      type: 'Accordion type: "default" or "group"',
      bordered: 'Enables border around the accordion',
      showLabelIcon: 'Shows or hides the collapse icon next to the label',
      isCollapsed: 'Controls whether the content is collapsed by default',
      onCollapse: 'Triggered when the accordion is clicked',
      onSelect: 'Triggered (in group mode) when a specific accordion is clicked',
      expandIcon: 'Custom icon used to replace the default expand icon'
    }
  }
}

export default accordion_en
