const select_vn = {
  desc: 'Một menu thả xuống để hiển thị các lựa chọn',
  api: {
    selectDesc: {
      rootClassName: 'Tên class của vùng chứa',
      labelClassName: 'Tên class của nhãn (label)',
      inputClassName: 'Tên class của trường nhập (input)',
      rootStyle: 'Style nội tuyến cho vùng chứa',
      labelStyle: 'Style nội tuyến cho nhãn',
      inputStyle: 'Style nội tuyến cho trường nhập',
      options: 'Danh sách các tùy chọn có thể chọn',
      defaultValue: 'Giá trị được chọn mặc định',
      defaultTags: 'Các thẻ được chọn mặc định (dùng cho chế độ chọn theo thẻ)',
      name: 'Tên của điều khiển (control)',
      placeholder: 'Văn bản gợi ý trong trường nhập',
      sizes: 'Kích thước của trường chọn (select)',
      color: 'Chủ đề màu sắc của trường chọn',
      shape: 'Hình dạng của trường chọn',
      async: 'Bật chế độ tải dữ liệu bất đồng bộ (để lấy options từ API)',
      loading: 'Bật trạng thái đang tải (nên dùng khi async)',
      disabled: 'Vô hiệu hóa trường chọn',
      total: 'Tổng số tùy chọn (dùng cho phân trang)',
      limit: 'Số lượng tùy chọn tối đa mỗi trang',
      required: 'Đánh dấu trường là bắt buộc',
      optional: 'Đánh dấu trường là không bắt buộc',
      hasClear: 'Bật nút xóa để đặt lại giá trị',
      hasSearch: 'Bật chức năng tìm kiếm',
      rule: 'Luật xác thực cho trường chọn',
      onChangeSelect: 'Kích hoạt khi một tùy chọn được chọn',
      onChangeSearch: 'Kích hoạt khi giá trị trong ô tìm kiếm thay đổi',
      onChangePage: 'Kích hoạt khi điều khiển phân trang được nhấn'
    }
  }
}

export default select_vn
