const dropdown_vn = {
  desc: 'Một danh sách thả xuống',
  api: {
    dropdownDesc: {
      rootClassName: 'Tên class của container',
      labelClassName: 'Tên class của nhãn',
      dropdownClassName: 'Tên class của bảng dropdown',
      rootStyle: 'Style nội tuyến của container',
      labelStyle: 'Style nội tuyến của nhãn',
      dropdownStyle: 'Style nội tuyến của bảng dropdown',
      placement: 'Vị trí hiển thị dropdown (ví dụ: bottom-left, top-right)',
      defaultSelectedId: 'ID mặc định của mục được chọn',
      items: 'Danh sách các mục trong dropdown',
      trigger: 'Kiểu kích hoạt dropdown (click hoặc hover)',
      onSelect: 'Được kích hoạt khi một mục trong dropdown được chọn'
    },
    itemDesc: {
      id: 'ID duy nhất của mục',
      label: 'Nhãn văn bản hoặc component nhãn của mục',
      comName: 'Dùng để xác định nội dung nào của mục sẽ được render'
    }
  }
}

export default dropdown_vn
