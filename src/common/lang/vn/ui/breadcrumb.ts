const breadcrumb_vn = {
  desc: 'Hiển thị vị trí hiện tại trong một cấu trúc phân cấp và cho phép quay lại các cấp cao hơn trong cấu trúc đó',
  api: {
    breadcrumbDesc: {
      rootClassName: 'Tên class của container',
      itemClassName: 'Tên class của từng mục breadcrumb',
      rootStyle: 'Style nội tuyến của container',
      itemStyle: 'Style nội tuyến của từng mục breadcrumb',
      items: 'Danh sách các mục breadcrumb',
      separator: 'Thành phần phân cách giữa các mục'
    },
    itemDesc: {
      id: 'ID duy nhất của mục',
      label: 'Nhãn văn bản của mục',
      labelIcon: 'Biểu tượng hiển thị cùng với nhãn',
      link: 'URL điều hướng',
      actived: 'Xác định mục có đang được kích hoạt hay không'
    }
  }
}

export default breadcrumb_vn
