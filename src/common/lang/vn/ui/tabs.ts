const tabs_vn = {
  desc: 'Tabs giúp dễ dàng khám phá và chuyển đổi giữa các chế độ xem khác nhau.',
  api: {
    tabsDesc: {
      type: 'Kiểu hiển thị của tab (ví dụ: line, card)',
      items: 'Danh sách các tab cần hiển thị',
      color: 'Chủ đề màu sắc của tab',
      rootClassName: 'Tên class của phần tử bao ngoài (container)',
      headClassName: 'Tên class của phần tiêu đề tab',
      contentClassName: 'Tên class của phần nội dung tab',
      rootStyle: 'Style nội tuyến cho container',
      headStyle: 'Style nội tuyến cho phần tiêu đề tab',
      contentStyle: 'Style nội tuyến cho phần nội dung tab',
      defaultActiveId: 'ID của tab được kích hoạt mặc định',
      onSelectTab: 'Kích hoạt khi người dùng chọn tab'
    },
    itemDesc: {
      id: 'ID duy nhất của từng tab',
      label: 'Nhãn tiêu đề hiển thị cho tab',
      labelIcon: 'Biểu tượng hiển thị bên cạnh tiêu đề tab',
      comName: 'Tên component động được render trong nội dung tab',
      content: 'Nội dung văn bản hoặc component hiển thị trong phần nội dung tab'
    }
  }
}

export default tabs_vn
