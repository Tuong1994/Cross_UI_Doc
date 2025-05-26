const list_vn = {
  desc: 'Hiển thị danh sách cơ bản, có thể chứa văn bản, danh sách, hình ảnh, đoạn văn',
  api: {
    listDesc: {
      rootClassName: 'Tên class của thẻ bao container',
      headClassName: 'Tên class của phần tiêu đề',
      contentClassName: 'Tên class của phần nội dung',
      rootStyle: 'Style nội tuyến của thẻ bao container',
      headStyle: 'Style nội tuyến của phần tiêu đề',
      contentStyle: 'Style nội tuyến của phần nội dung',
      icon: 'Biểu tượng cho mỗi mục trong danh sách'
    },
    listItemDesc: {
      rootClassName: 'Tên class của thẻ bao container',
      contentClassName: 'Tên class của phần nội dung',
      rootStyle: 'Style nội tuyến của thẻ bao container',
      contentStyle: 'Style nội tuyến của phần nội dung',
      icon: 'Biểu tượng của mục trong danh sách'
    }
  }
}

export default list_vn
