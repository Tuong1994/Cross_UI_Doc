const loading_vn = {
  desc: 'Cung cấp một phần giữ chỗ trong khi chờ nội dung tải hoặc để hình dung nội dung chưa tồn tại',
  api: {
    spinnerDesc: {
      rootClassName: 'Tên class của spinner',
      rootStyle: 'Style nội tuyến cho spinner',
      color: 'Màu sắc của spinner',
      size: 'Kích thước của spinner (chỉ áp dụng cho loại mặc định)',
      type: 'Loại spinner (ví dụ: default, dots, ring, v.v.)'
    },
    skeletonDesc: {
      type: 'Loại skeleton (ví dụ: text, avatar, paragraph)',
      rootClassName: 'Tên class của phần tử bao ngoài',
      rootStyle: 'Style nội tuyến cho phần tử bao ngoài'
    },
    skeletonTypeDesc: {
      width: 'Chiều rộng của skeleton',
      height: 'Chiều cao của skeleton',
      size: 'Kích thước của skeleton (sử dụng cho preset có kích thước cố định)',
      shape: 'Hình dạng của skeleton (ví dụ: hình tròn, hình vuông, bo góc)',
      lines: 'Số dòng trong skeleton kiểu đoạn văn'
    }
  }
}

export default loading_vn
