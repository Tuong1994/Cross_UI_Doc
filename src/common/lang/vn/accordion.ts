const accordion_vn = {
  desc: 'Một khu vực nội dung có thể được thu gọn và mở rộng',
  api: {
    accordionDesc: {
      rootClassName: 'Tên lớp CSS của container',
      labelClassName: 'Tên lớp CSS của nhãn (label)',
      contentClassName: 'Tên lớp CSS của nội dung',
      rootStyle: 'Style nội tuyến của container',
      labelStyle: 'Style nội tuyến của nhãn',
      contentStyle: 'Style nội tuyến của nội dung',
      label: 'Nhãn của accordion',
      labelIcon: 'Biểu tượng thu gọn/mở rộng của accordion',
      extraIcon: 'Biểu tượng phụ của accordion',
      contentId: 'ID duy nhất cho mỗi accordion',
      type: 'Loại accordion, "default" hoặc "group"',
      bordered: 'Bật/tắt viền cho accordion',
      showLabelIcon: 'Hiển thị hoặc ẩn biểu tượng thu gọn nhãn',
      isCollapsed: 'Bật/tắt trạng thái thu gọn nội dung',
      onCollapse: 'Kích hoạt khi được nhấp',
      onSelect: 'Dùng cho loại group, kích hoạt khi nhấp vào accordion cụ thể'
    }
  }
}

export default accordion_vn
