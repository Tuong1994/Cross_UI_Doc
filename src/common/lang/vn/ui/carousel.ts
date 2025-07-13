const carousel_vn = {
  desc: 'Một tập hợp các khu vực trình chiếu (carousel)',
  api: {
    carouselApi: {
      rootClassName: 'Tên class của container',
      prevBtnClassName: 'Tên class của nút chuyển về slide trước',
      nextBtnClassName: 'Tên class của nút chuyển đến slide tiếp theo',
      itemClassName: 'Tên class của từng slide',
      dotClassName: 'Tên class của các dấu chấm (dots)',
      rootStyle: 'Style nội tuyến của container',
      prevBtnStyle: 'Style nội tuyến của nút slide trước',
      nextBtnStyle: 'Style nội tuyến của nút slide tiếp theo',
      itemStyle: 'Style nội tuyến của từng slide',
      dotStyle: 'Style nội tuyến của các dấu chấm',
      items: 'Danh sách các slide trong carousel',
      slideId: 'ID duy nhất của mỗi slide',
      time: 'Khoảng thời gian chuyển slide tự động',
      infinite: 'Bật chế độ trượt vô hạn',
      autoPlay: 'Bật chế độ phát tự động',
      hasManualStop: 'Cho phép dừng tự động khi người dùng vuốt slide',
      prevButtonIcon: 'Tên biểu tượng của nút slide trước',
      nextButtonIcon: 'Tên biểu tượng của nút slide tiếp theo',
      mode: 'Chuyển đổi giữa chế độ sáng và tối'
    },
    carouselProductApi: {
      rootClassName: 'Tên class của container',
      rootStyle: 'Style nội tuyến của container',
      items: 'Danh sách các slide trong carousel',
      slideId: 'ID duy nhất của mỗi slide',
      time: 'Khoảng thời gian chuyển slide tự động',
      infinite: 'Bật chế độ trượt vô hạn',
      autoPlay: 'Bật chế độ phát tự động',
      hasManualStop: 'Cho phép dừng tự động khi người dùng vuốt slide',
      prevButtonIcon: 'Tên biểu tượng của nút slide trước',
      nextButtonIcon: 'Tên biểu tượng của nút slide tiếp theo',
      mode: 'Chuyển đổi giữa chế độ sáng và tối'
    },
    carouselItem: {
      id: 'ID duy nhất của mục',
      comName: 'Dùng để xác định nội dung nào của mục cần được hiển thị',
      url: 'URL hình ảnh của mục dùng cho thư viện carousel'
    }
  }
}

export default carousel_vn
