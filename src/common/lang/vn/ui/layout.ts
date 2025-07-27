const layout_vn = {
  desc: 'Xử lý bố cục tổng thể của một trang',
  note: {
    title: 'Quan trọng',
    content:
      'Component Layout chỉ nên được sử dụng ở cấp cao nhất của ứng dụng (tức là layout gốc), không nên được bọc trong bất kỳ thẻ HTML hay component nào khác như <div>, <section>, v.v.',
    reason:
      'Layout này sử dụng "position: fixed" cho các phần tử như "Header" và "Sidebar". Nếu bọc bên trong các container khác, layout có thể hiển thị sai, bị tràn hoặc sai vị trí.'
  },
  api: {
    commonDesc: {
      rootClassName: 'Tên class của phần tử bao bọc',
      rootStyle: 'Style nội tuyến cho phần tử bao bọc'
    },
    containerDesc: {
      theme: 'Giao diện bố cục (chế độ sáng hoặc tối)',
      color: 'Chủ đề màu của bố cục'
    },
    headDesc: {
      fixed: 'Bật chế độ cố định phần đầu trang'
    },
    sideDesc: {
      collapsable: 'Bật chế độ thu gọn thanh bên',
      hasCollapseButton: 'Hiển thị hoặc ẩn nút thu gọn',
      onCollapse: 'Được gọi khi nhấn nút thu gọn'
    },
    menuDesc: {
      itemClassName: 'Tên class của mục menu',
      itemStyle: 'Style nội tuyến cho mục menu',
      items: 'Danh sách các mục menu',
      type: 'Kiểu menu',
      color: 'Chủ đề màu của menu'
    },
    menuItemDesc: {
      id: 'ID duy nhất của mục menu',
      label: 'Nhãn văn bản của mục menu',
      labelIcon: 'Biểu tượng hiển thị cùng với nhãn menu',
      type: 'Loại của mục menu',
      path: 'Đường dẫn định tuyến của mục menu',
      isRoot: 'Cho biết mục menu có phải là mục gốc hay không',
      children: 'Danh sách các mục menu con lồng bên trong'
    }
  }
}

export default layout_vn
