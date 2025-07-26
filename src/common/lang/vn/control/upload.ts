const upload_vn = {
  desc: 'Dùng để chọn và tải lên tập tin hoặc kéo và thả tập tin',
  api: {
    uploadDesc: {
      rootClassName: 'Tên lớp của vùng chứa',
      controlClassName: 'Tên lớp của thành phần điều khiển',
      rootStyle: 'Kiểu inline cho vùng chứa',
      controlStyle: 'Kiểu inline cho thành phần điều khiển',
      shape: 'Hình dạng của thành phần tải lên',
      color: 'Chủ đề màu của thành phần tải lên',
      limit: 'Kích thước tối đa của tập tin cho phép',
      fileAccepted: 'Các loại tập tin được chấp nhận (ví dụ: .jpg, .png)',
      disabled: 'Vô hiệu hóa thành phần tải lên',
      onUpload: 'Kích hoạt khi các tập tin được tải lên'
    },
    singleDesc: {
      loading: 'Trạng thái đang tải của thành phần',
      defaultImageUrl: 'URL ảnh mặc định'
    },
    multiDesc: {
      defaultImages: 'Danh sách URL ảnh mặc định',
      maxUpload: 'Số lượng tập tin tối đa có thể tải lên',
      onRemoveDefaultImage: 'Kích hoạt khi một tập tin trong danh sách mặc định bị xóa'
    },
    fileDesc: {
      multiple: 'Cho phép tải lên nhiều tập tin'
    }
  }
}

export default upload_vn
