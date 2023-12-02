export default () => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        'title': '',
        'subtitle': '',
        'error_with_status': 'Đã xảy ra lỗi trên máy.',
        '404': 'Không tìm thấy trang này.',
        '404_subtitle':
          'Vui lòng chờ trong giây lát, hoặc quay trở lại nơi bắt đầu.',
        'back': 'Quay lại trang chủ.',
        'login': '',
        'login_create': '',
        'login_or': '',
        'login_email': '',
        'login_password': '',
        'login_remember': '',
        'login_forgot': '',
        'continue': '',
        'login_title': '',
        'login_subtitle': '',
        'register': '',
        'register_already': '',
        'register_or': '',
        'register_name': '',
        'register_email': '',
        'register_password': '',
        'register_confirm': '',
        'register_title': '',
        'register_subtitle': '',
        'accept': '',
        'gb': 'English',
        'pl': 'Polski',
        'de': 'Deutsch',
        'cn': '中国',
        'pt': '󠁥󠁮󠁧󠁿Português',
        'id': '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        'in': '󠁥󠁮󠁧󠁿हिन्दी',
        'ar': '󠁥󠁮󠁧󠁿العربيّة',
        'vnm': 'Tiếng Việt',
        'notif_msg': ''
      },
      menu: {
        news: 'Tin tức Sự kiện',
        more: 'Thêm',
        wallets: 'Ví'
      },
      walletsPage: {
        wallets: 'Ví',
        title: 'Danh sách những ví Lotus đang khả dụng trong hệ thống:'
      },
      lotusLanding: {
        features: {
          title: 'Mục tiêu của chúng tôi',
          feature1: {
            title: 'Hợp đồng thông minh',
            description:
              'Taproot với trạng thái, số nguyên lớn hơn, nhiều opcodes và chữ ký thông minh sighash mới'
          },
          feature2: {
            title: 'Tự cấp vốn',
            description:
              '50% số coin mới được trao cho thợ đào, 50% trao cho các dự án cộng đồng'
          },
          feature3: {
            title: 'Tiềm năng mở rộng',
            description:
              'Dựa trên cơ sở mã nguồn của eCash, cho phép mở rộng quy mô lên đến 1 triệu giao dịch trong 1 giây '
          },
          feature4: {
            title: 'Sự ổn định',
            description:
              'Những đồng coin mới được phát hành dựa theo quy luật cung cầu'
          }
        },
        story: {
          section1: {
            headtitle: 'Sứ mệnh của chúng tôi',
            title: 'Biểu tượng mạnh mẽ của sự tri ân',
            text: 'Mỗi ngày, những trải nghiệm trong tương tác hàng ngày khiến cho cuộc sống của ta trở nên phong phú và có ý nghĩa hơn. Chúng ta nói với nhau lời "Cảm ơn". Nhưng lời nói thường thoáng qua. Ai cũng có thể dễ dàng bày tỏ sự tri ân từ tấm lòng thông qua lời nói. Làm cách nào để chúng ta có thể chuyển đổi sự tri ân ấy bằng một thứ khác ý nghĩa hơn? Thế giới sẽ ra sao nếu chúng ta có một cách khác hiệu quả hơn để bày tỏ lòng biết ơn với nhau? Điều gì sẽ xảy ra nếu chúng ta có thể giữ mãi “Sự Tri Ân” bằng Lotus? '
          },
          section2: {
            headtitle: 'Lòng biết ơn vô hạn',
            title: 'Niềm vui từ việc cho và nhận',
            text: 'Lotus là dự án nhằm nâng cao giá trị cốt lõi của việc cho và nhận. Chúng tôi muốn hướng mọi người tới những hành động tích cực và tránh những hành động mang năng lượng không tốt. Và chúng tôi đang tạo ra một cách đúng đắn để thực hiện điều này. Hoa thường được dùng để biểu hiện cho sự trân quý nhau nhưng không thể nào giữ mãi khi đã úa tàn. Tuy nhiên, với những bông hoa được số hóa thì chúng ta có thể giữ mãi bên mình. Đồng số (token) không có tính hữu hình cũng không thể hư hỏng. Hoa sen (Lotus) là biểu tượng cho sự tinh khiết, giác ngộ, tái sinh và tái tạo. Đó là cũng chính là những giá trị cốt lõi mà chúng tôi hướng đến với đồng Lotus.'
          },
          section3: {
            headtitle: 'Cộng đồng là trên hết',
            title:
              'Lotus là sự đổi mới hướng tới cộng đồng nhằm đảm bảo sự tri ân luôn được gìn giữ.',
            text: 'Sổ cái Lotus token dựa trên nguyên lý không cần cấp phép (permissionless), không bị kiểm duyệt (uncensorable), và là một blockchain mở được phát hành và duy trì từ phần mềm do tổ chức Logos Foundation phát triển. Những token được đào với cơ chế chứng thực năng lượng (Proof-of-work) được trao như là một phần thưởng cho các lập trình viên - những người với niềm đam mê đã tạo ra hệ thống cơ sở hạ tầng cho phép đồng token tồn tại và có thể giao dịch trên thị trường, đồng thời cũng được trao cho các thợ đào kiên trì cần mẫn duy trì độ chính xác của Blockchain. Chúng được gọi chung là “Phần thưởng khối” (Block Rewards) – luôn công khai và minh bạch. Không giống như Bitcoin là một tài sản đầu cơ, Lotus mang giá trị yêu thương sâu sắc không thể nào định giá được, biểu trưng cho sự tri ân. Lịch trình phần thưởng được lập trình để có thể đáp ứng trước những nhu cầu thay đổi của thị trường và lạm phát. Lotus là một đồng tiền cấp phát mở rộng không hạn chế, nên không có lý do gì phải tích trữ, trừ khi xem đó như là những kỷ vật mà người khác đã tri ân cho ta. Lotus không phải là tài sản tích lũy đầu tư, nhưng sự trao tặng cho nhau của chúng ta sẽ giúp Lotus tăng trưởng cả về số lượng và chất lượng.'
          }
        },
        before_carousel_1:
          'Lotus mới được phát hành thông qua phần thưởng được trao cho các thợ đào và các dự án mang lại lợi ích cộng đồng như biểu tượng của sự tri ân.',
        before_carousel_2:
          'Bất cứ khi nào sử dụng Lotus nhằm tri ân bạn bè, bạn nên biết rằng bạn đang hỗ trợ cho những dự án tuyệt vời này.',
        header_language: 'Ngôn ngữ',
        header_theme: 'Giao diện',
        header_dark: 'Tối',
        header_light: 'Sáng',
        header_about: 'Về chúng tôi',
        header_projects: 'Các dự án',
        header_carousel: 'Các dự án',
        header_faq: 'Câu hỏi thường gặp',
        header_contact: 'Liên hệ',
        header_block_explorer: 'Lịch sử giao dịch',
        documentation: 'Các tài liệu',
        contributors: 'Tình nguyện viên',
        faq_subtitle:
          'Bạn có thắc mắc? Hãy xem các câu hỏi thường gặp của chúng tôi để tìm câu trả lời ',
        news_readmore: 'Đọc thêm',
        stampchat_desc:
          ' StampChat là một trình nhắn tin được mã hóa đầu cuối phi tập trung, sử dụng đồng Lotus để đảm bảo tất cả tin nhắn bạn nhận được đều có giá trị. Điều này cho phép bạn lọc những tin nhắn rác trên nền tảng mà không cần người điều hành tập trung. Sự giao tiếp là phi tập trung, bảo mật và không bị kiểm duyệt',
        becash_desc:
          'Be.cash hợp tác với Logos Foundation để hỗ trợ phát triển phần mềm chuỗi khối Lotus, cũng như phát triển hệ thống Điểm bán hàng và phương thức thanh toán di động cho các khu vực không có cơ sở hạ tầng thiết yếu để có thể sử dụng các phương thức thanh toán truyền thống.',
        bitcoin_abc_desc:
          ' ABC Bitcoin phát triển phần mềm mã nguồn mở có khả năng mở rộng cao để đào và giao dịch đồng tiền mã hóa. Mặc dù Bitcoin ABC không hề tính phí, cho phép Lotus sử dụng phần mềm của mình làm cơ sở trong hệ thống và Lotus gửi tặng lại Bitcoin ABC để tri ân cho việc sử dụng này. ',
        bcpro_desc:
          ' bcPro Foundation phát triển các phần mềm tiện ích trên nên tảng chuỗi khối blockchain cho thị trường Việt Nam.',
        services_button: 'Khám phá'
      }
    })
  })
}
