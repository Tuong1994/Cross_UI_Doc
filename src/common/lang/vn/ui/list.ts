const list_vn = {
  desc: 'Hiển thị danh sách cơ bản, có thể chứa văn bản, danh sách, hình ảnh, đoạn văn',
  api: {
    listDesc: {
      rootClassName: 'Tên class của container',
      headClassName: 'Tên class của phần tiêu đề',
      contentClassName: 'Tên class của phần nội dung',
      rootStyle: 'Style nội tuyến của container',
      headStyle: 'Style nội tuyến của phần tiêu đề',
      contentStyle: 'Style nội tuyến của phần nội dung',
      icon: 'Biểu tượng hiển thị kèm mỗi mục trong danh sách',
      head: 'Văn bản hoặc component được sử dụng làm tiêu đề danh sách'
    },

    listItemDesc: {
      rootClassName: 'Tên class của container',
      contentClassName: 'Tên class của phần nội dung',
      rootStyle: 'Style nội tuyến của container',
      contentStyle: 'Style nội tuyến của phần nội dung',
      icon: 'Biểu tượng của mục trong danh sách'
    }
  }
}

export default list_vn
