const form_vn = {
  desc: 'Thành phần biểu mẫu với khả năng quản lý miền dữ liệu. Bao gồm nhập liệu, kiểm tra hợp lệ và các kiểu hiển thị tương ứng',
  api: {
    formDesc: {
      initialValues: 'Giá trị dữ liệu khởi tạo của form',
      disabled: 'Toàn bộ form có bị vô hiệu hóa hay không',
      autoFocusValidation: 'Tự động focus vào trường không hợp lệ đầu tiên khi submit',
      color: 'Màu sắc chủ đề của form',
      sizes: 'Kích thước của form (ví dụ: small, medium, large)',
      shape: 'Hình dạng của các phần tử trong form (ví dụ: bo góc, vuông)',
      onFinish: 'Hàm callback được gọi khi form được submit thành công, truyền vào giá trị của form'
    },
    formItemDesc: {
      name: 'Tên/khóa của trường dữ liệu (dùng để liên kết giá trị)',
      type: 'Loại control (áp dụng cho các trường như checkbox, radio)',
      rules: 'Luật kiểm tra tính hợp lệ cho trường dữ liệu',
      disabled: 'Trường này có bị vô hiệu hóa hay không'
    }
  }
}

export default form_vn
