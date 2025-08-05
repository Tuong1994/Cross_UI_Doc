const loading_en = {
  desc: "Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet",
  api: {
    spinnerDesc: {
      rootClassName: 'Class name of the spinner',
      rootStyle: 'Inline styles for the spinner',
      color: 'Color of the spinner',
      size: 'Size of the spinner (applies only to the default type)',
      type: 'Type of spinner (e.g., default, dots, ring, etc.)'
    },
    skeletonDesc: {
      type: 'Type of skeleton (e.g., text, avatar, paragraph)',
      rootClassName: 'Class name of the container',
      rootStyle: 'Inline styles for the container'
    },
    skeletonTypeDesc: {
      width: 'Width of the skeleton',
      height: 'Height of the skeleton',
      size: 'Size of the skeleton (used for fixed-size presets)',
      shape: 'Shape of the skeleton (e.g., circle, square, rounded)',
      lines: 'Number of lines for paragraph-style skeleton'
    }
  }
}

export default loading_en
