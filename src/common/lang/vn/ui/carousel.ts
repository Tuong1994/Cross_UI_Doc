const carousel_vn = {
  desc: 'Một tập hợp các khu vực trình chiếu (carousel)',
  api: {
    carouselApi: {
      rootClassName: 'Tên class của container',
      prevBtnClassName: 'Tên class của nút chuyển về trang trước',
      nextBtnClassName: 'Tên class của nút chuyển sang trang sau',
      itemClassName: 'Tên class của từng slide',
      dotClassName: 'Tên class của các dấu chấm điều hướng',
      rootStyle: 'Style nội tuyến của container',
      prevBtnStyle: 'Style nội tuyến của nút chuyển về',
      nextBtnStyle: 'Style nội tuyến của nút chuyển tiếp',
      itemStyle: 'Style nội tuyến của từng slide',
      dotStyle: 'Style nội tuyến của dấu chấm điều hướng',
      items: 'Danh sách các slide trong carousel',
      slideId: 'ID duy nhất cho mỗi slide',
      time: 'Thời gian lặp lại (ms) cho chế độ tự động chạy',
      infinite: 'Bật chế độ lặp lại vô hạn',
      autoPlay: 'Bật chế độ tự động chạy',
      hasArrow: 'Hiển thị hoặc ẩn nút chuyển slide trước/sau',
      hasManualStop: 'Cho phép dừng tự động chạy khi người dùng vuốt',
      prevButtonIcon: 'Tên biểu tượng cho nút chuyển về',
      nextButtonIcon: 'Tên biểu tượng cho nút chuyển tiếp',
      mode: 'Chuyển đổi giữa chế độ sáng và tối'
    },

    carouselProductApi: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Style nội tuyến của container',
      items: 'Danh sách các slide trong carousel',
      slideId: 'ID duy nhất cho mỗi slide',
      time: 'Thời gian lặp lại (ms) cho chế độ tự động chạy',
      infinite: 'Bật chế độ lặp lại vô hạn',
      autoPlay: 'Bật chế độ tự động chạy',
      hasManualStop: 'Cho phép dừng tự động chạy khi người dùng vuốt',
      prevButtonIcon: 'Tên biểu tượng cho nút chuyển về',
      nextButtonIcon: 'Tên biểu tượng cho nút chuyển tiếp',
      mode: 'Chuyển đổi giữa chế độ sáng và tối'
    },

    carouselItem: {
      id: 'ID duy nhất của mục',
      comName: 'Dùng để xác định component nào sẽ được render',
      content: 'Văn bản hoặc component được sử dụng làm nội dung của mục',
      url: 'URL hình ảnh của mục trong carousel gallery'
    }
  }
}

export default carousel_vn
