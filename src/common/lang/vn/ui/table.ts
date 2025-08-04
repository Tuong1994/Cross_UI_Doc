const table_vn = {
  desc: 'Bảng hiển thị các hàng dữ liệu.',
  api: {
    tableDesc: {
      dataSource: 'Mảng dữ liệu cần hiển thị trong bảng',
      columns: 'Cấu hình các cột của bảng',
      hasRowSelection: 'Bật chức năng chọn hàng',
      hasExpand: 'Bật chức năng mở rộng hàng (dùng cho bảng lồng nhau)',
      hasFilter: 'Hiển thị khu vực lọc dữ liệu',
      hasPagination: 'Bật phân trang',
      loading: 'Trạng thái đang tải của bảng',
      rowKey: 'Khóa duy nhất cho mỗi hàng',
      color: 'Giao diện màu của bảng',
      rootClassName: 'Tên class của phần tử bao ngoài (container)',
      tableClassName: 'Tên class của phần tử bảng',
      rootStyle: 'Style nội tuyến cho container',
      tableStyle: 'Style nội tuyến cho bảng',
      paginationProps: 'Thuộc tính truyền cho component phân trang',
      removeButtonTitle: 'Văn bản hoặc component của nút "Xoá các hàng đã chọn"',
      cancelButtonTitle: 'Văn bản hoặc component của nút "Huỷ xoá"',
      filter: 'Component lọc dữ liệu cho bảng',
      filterProps: 'Thuộc tính của component lọc dữ liệu',
      removeButtonProps: 'Thuộc tính của nút "Xoá các hàng đã chọn"',
      cancelButtonProps: 'Thuộc tính của nút "Huỷ xoá"',
      expandRowTable: 'Hàm trả về nội dung mở rộng (bảng hoặc component tuỳ chỉnh)',
      onRowSelect: 'Kích hoạt khi người dùng chọn hàng trong bảng',
      onChangePage: 'Kích hoạt khi người dùng đổi trang',
      onFilter: 'Kích hoạt khi áp dụng bộ lọc',
      onCancelFilter: 'Kích hoạt khi huỷ bộ lọc'
    },
    tableFilterDesc: {
      color: 'Giao diện màu của bảng',
      filter: 'Component lọc dữ liệu cho bảng',
      filterButtonTitle: 'Văn bản hoặc component của nút "Lọc dữ liệu"',
      cancelFilterButtonTitle: 'Văn bản hoặc component của nút "Huỷ lọc dữ liệu"',
      filterButtonProps: 'Thuộc tính của nút "Lọc dữ liệu"',
      cancelFilterButtonProps: 'Thuộc tính của nút "Huỷ lọc dữ liệu"',
      hasFilterButton: 'Hiển thị hoặc ẩn nút lọc dữ liệu',
      hasCancelFilterButton: 'Hiển thị hoặc ẩn nút huỷ lọc dữ liệu',
      onFilter: 'Kích hoạt khi áp dụng bộ lọc',
      onCancelFilter: 'Kích hoạt khi huỷ bộ lọc'
    },
    columnDesc: {
      id: 'ID duy nhất cho mỗi cột',
      title: 'Tiêu đề của cột',
      dataIndex: 'Khóa dữ liệu trong bản ghi cần hiển thị ở cột này',
      component: 'Component động được hiển thị trong cột',
      render: 'Chuỗi HTML được render bằng v-html'
    },
    componentDesc: {
      node: 'Component động sẽ được hiển thị',
      slotContent: 'Nội dung được truyền vào slot của component',
      props: 'Thuộc tính được truyền cho component động'
    }
  }
}

export default table_vn
