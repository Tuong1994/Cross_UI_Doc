const grid_vn = {
  desc: 'Hệ thống bố cục lưới',
  api: {
    gridDesc: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Style nội tuyến của container',
      gap: 'Khoảng cách giữa hàng và cột, có thể sử dụng mảng để thiết lập khoảng cách ngang và dọc cùng lúc [ngang, dọc]',
      xs: 'Màn hình <= 480 để thiết lập số cột của lưới',
      md: 'Màn hình <= 768 để thiết lập số cột của lưới',
      lg: 'Màn hình <= 1100 để thiết lập số cột của lưới',
      span: 'Màn hình > 1100 để thiết lập số cột của lưới'
    }
  }
}

export default grid_vn
