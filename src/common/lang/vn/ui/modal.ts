const modal_vn = {
  desc: 'Hiển thị hộp thoại dạng modal, cung cấp tiêu đề, vùng nội dung và các nút thao tác',
  api: {
    modalDesc: {
      rootClassName: 'Tên class của phần tử bao ngoài (container)',
      headClassName: 'Tên class của phần tiêu đề (header)',
      bodyClassName: 'Tên class của phần nội dung (body)',
      footClassName: 'Tên class của phần chân (footer)',
      rootStyle: 'Style nội tuyến cho phần tử bao ngoài',
      headStyle: 'Style nội tuyến cho phần tiêu đề',
      bodyStyle: 'Style nội tuyến cho phần nội dung',
      footStyle: 'Style nội tuyến cho phần chân',
      head: 'Văn bản hoặc component hiển thị trong phần tiêu đề của modal',
      hasHead: 'Hiển thị hoặc ẩn phần tiêu đề',
      hasFoot: 'Hiển thị hoặc ẩn phần chân (footer)',
      hasCloseIcon: 'Hiển thị hoặc ẩn biểu tượng đóng (close) ở phần tiêu đề',
      backdropClose: 'Cho phép đóng modal khi nhấn vào phần nền (backdrop)',
      hasCancelButton: 'Hiển thị hoặc ẩn nút huỷ (Cancel) ở phần footer',
      open: 'Điều khiển việc hiển thị modal',
      sizes: 'Các tuỳ chọn kích thước của modal',
      color: 'Chủ đề màu sắc của modal',
      okButtonTitle: 'Văn bản hiển thị trên nút OK (gửi)',
      cancelButtonTitle: 'Văn bản hiển thị trên nút Cancel (đóng)',
      okButtonProps: 'Các thuộc tính của nút OK (gửi)',
      cancelButtonProps: 'Các thuộc tính của nút Cancel (đóng)',
      onOk: 'Được gọi khi nhấn vào nút OK',
      onCancel: 'Được gọi khi nhấn vào nút Cancel'
    }
  }
}

export default modal_vn
