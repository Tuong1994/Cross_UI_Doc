const backgrounds_vn = {
  floating: {
    desc: 'Nền với các hình vuông hoặc bong bóng nổi, có hoạt ảnh nhiều màu',
    api: {
      floatingDesc: {
        rootClassName: 'Tên class của container',
        rootStyle: 'Kiểu inline cho container',
        color: 'Màu của nền',
        shape: 'Hình dạng của các phần tử nền',
        count: 'Số lượng phần tử hiển thị trong nền',
        zIndex: 'Xác định nền xuất hiện phía trước hay phía sau khi chồng lấp',
        fullScreen: 'Bật chế độ cố định toàn màn hình cho nền'
      }
    }
  },
  particles: {
    desc: {
      content: 'Nền với nhiều tùy chọn hoạt ảnh hạt',
      prefix: 'Hạt được xây dựng dựa trên',
      suffix: 'thư viện'
    },
    api: {
      particlesDesc: {
        rootClassName: 'Tên class của container',
        rootStyle: 'Kiểu inline cho container',
        id: 'ID duy nhất cho particles (khuyến nghị: nên cung cấp khi render nhiều nền trong cùng một component)',
        hasColor: 'Bật màu cho nền',
        fullScreen: 'Bật chế độ cố định toàn màn hình cho nền',
        color: 'Màu của nền',
        zIndex: 'Xác định nền xuất hiện phía trước hay phía sau khi chồng lấp',
        options: 'Các tùy chọn hạt (dựa trên thư viện tsparticles)'
      }
    }
  }
}

export default backgrounds_vn
