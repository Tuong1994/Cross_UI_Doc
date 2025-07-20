const helper = {
  getColorType: (...colors: string[]) => {
    const baseColors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
    if (!colors.length) return baseColors
    return [...baseColors, ...colors]
  },

  getShapeType: (...shapes: string[]) => {
    const baseShapes = ['square', 'round']
    if (!shapes.length) return baseShapes
    return [...baseShapes, ...shapes]
  },

  getSizeType: (...sizes: string[]) => {
    const baseSizes = ['sm', 'md', 'lg']
    if (!sizes.length) return baseSizes
    return [...baseSizes, ...sizes]
  }
}

export default helper
