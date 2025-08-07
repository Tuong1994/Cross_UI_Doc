const select_vn = {
  desc: 'Một menu thả xuống để hiển thị các lựa chọn',
  api: {
    selectDesc: {
      rootClassName: 'Tên class của phần tử bao bọc',
      labelClassName: 'Tên class của nhãn (label)',
      inputClassName: 'Tên class của ô chọn (select input)',
      rootStyle: 'Style inline cho phần tử bao bọc',
      labelStyle: 'Style inline cho nhãn (label)',
      inputStyle: 'Style inline cho ô chọn (select input)',
      options: 'Danh sách các tùy chọn có thể chọn',
      defaultValue: 'Giá trị được chọn mặc định',
      defaultTags: 'Danh sách tag mặc định (dùng cho chế độ tag selection)',
      name: 'Tên của control (dùng cho form)',
      placeholder: 'Văn bản gợi ý khi chưa có giá trị',
      sizes: 'Kích thước của ô chọn',
      color: 'Chủ đề màu sắc của ô chọn',
      shape: 'Hình dạng của ô chọn',
      async: 'Bật chế độ tải dữ liệu bất đồng bộ (dành cho gọi API)',
      loading: 'Hiển thị trạng thái đang tải (nên dùng khi bật async)',
      disabled: 'Vô hiệu hóa ô chọn',
      total: 'Tổng số tùy chọn (dùng cho phân trang)',
      limit: 'Số lượng tùy chọn tối đa trên mỗi trang',
      required: 'Đánh dấu trường là bắt buộc',
      optional: 'Đánh dấu trường là không bắt buộc',
      hasClear: 'Bật nút xóa để reset giá trị đã chọn',
      hasSearch: 'Bật chức năng tìm kiếm',
      rule: 'Luật kiểm tra (validation) cho ô chọn',
      onChangeSelect: 'Được gọi khi một tùy chọn được chọn',
      onChangeSearch: 'Được gọi khi giá trị tìm kiếm thay đổi',
      onChangePage: 'Được gọi khi chuyển trang trong danh sách tùy chọn',
      label: 'Nội dung hoặc component hiển thị nhãn (label)',
      addonBefore: 'Nội dung hoặc component hiển thị trước ô chọn',
      addonAfter: 'Nội dung hoặc component hiển thị sau ô chọn',
      emptyContent: 'Nội dung hiển thị khi không có tùy chọn nào',
      dropdownRender: 'Hàm render dropdown tùy chỉnh'
    }
  }
}

export default select_vn
