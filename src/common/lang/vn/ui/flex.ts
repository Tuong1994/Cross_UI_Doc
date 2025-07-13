const flex_vn = {
  desc: 'Một container bố cục flex để căn chỉnh nội dung',
  api: {
    flexRowDesc: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Style nội tuyến của container',
      justify: 'Căn chỉnh theo chiều ngang trong flex box',
      aligns: 'Căn chỉnh theo chiều dọc trong flex box',
      gutters: 'Khoảng cách giữa các hàng và cột'
    },
    flexColDesc: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Style nội tuyến của container',
      isFill: 'Chiếm phần không gian còn lại trong flex box',
      span: 'Số cột chiếm trên màn hình desktop, từ 0 đến 24',
      xs: 'Số cột chiếm trên màn hình di động, từ 0 đến 24',
      md: 'Số cột chiếm trên màn hình máy tính bảng, từ 0 đến 24',
      lg: 'Số cột chiếm trên màn hình laptop, từ 0 đến 24'
    }
  }
}

export default flex_vn
