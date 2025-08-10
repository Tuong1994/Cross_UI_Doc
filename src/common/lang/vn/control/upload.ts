const upload_vn = {
  desc: 'Dùng để chọn và tải lên tập tin hoặc kéo và thả tập tin',
  api: {
    uploadDesc: {
      rootClassName: 'Tên class của phần tử bao bọc',
      controlClassName: 'Tên class của control',
      rootStyle: 'Style inline cho phần tử bao bọc',
      controlStyle: 'Style inline cho control',
      shape: 'Hình dạng của component upload',
      color: 'Chủ đề màu sắc của component upload',
      limit: 'Dung lượng tệp tối đa cho phép',
      fileAccepted: 'Các loại tệp được chấp nhận (ví dụ: .jpg, .png)',
      disabled: 'Vô hiệu hóa component upload',
      onUpload: 'Được gọi khi tệp được tải lên'
    },
    singleDesc: {
      loading: 'Trạng thái tải của component',
      defaultImageUrl: 'URL ảnh mặc định'
    },
    multiDesc: {
      defaultImages: 'Danh sách URL ảnh mặc định',
      maxUpload: 'Số lượng tệp tối đa có thể tải lên',
      onRemoveDefaultImage: 'Được gọi khi xóa một tệp khỏi danh sách mặc định'
    },
    fileDesc: {
      multiple: 'Cho phép tải lên nhiều tệp',
      label: 'Nội dung hoặc component cho nhãn (label) tải tệp'
    }
  }
}

export default upload_vn
