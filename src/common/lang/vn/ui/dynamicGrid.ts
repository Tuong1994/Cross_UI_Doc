const dynamicGrid_vn = {
  desc: 'Hiển thị bố cục động với nhiều phần tử',
  items: {
    oneItem: 'Một phần tử',
    twoItems: 'Hai phần tử',
    threeItems: 'Ba phần tử',
    fourItems: 'Bốn phần tử',
    moreFiveItems: 'Nhiều hơn năm phần tử'
  },
  api: {
    dynamicGridDesc: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Inline style của container',
      items: 'Danh sách các phần tử hiển thị trong grid'
    },
    dynamicGridItemDesc: {
      id: 'ID duy nhất của phần tử',
      comName: 'Xác định nội dung phần tử nào sẽ được render',
      node: 'Văn bản hoặc component hiển thị trong grid'
    }
  }
}

export default dynamicGrid_vn
