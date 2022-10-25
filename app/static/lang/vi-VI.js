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
      banner: {
        why_1: 'Xã hội thường gặp khó khăn trong việc cấp vốn cho các dự án công cộng - việc phân bổ nguồn lực vào những công việc cấp bách nhưng không có lợi ích kinh tế. Với vấn đề này, Lotus đã được tạo ra. Chúng tôi tin tưởng rằng bằng cách thay đổi cách nhìn nhận về đồng tiền, và thách thức những sáng kiến xung quanh việc sử dụng đồng tiền, chúng tôi có thể giải quyết được việc cấp vốn cho những dự án công cộng.',
        why_2: 'Mục tiêu của chúng tôi là để bày tỏ lòng tri ân với các tình nguyện viên của các dự án từ thiện bằng cách gửi Lotus cho họ một cách miễn phí. Và, như là một cư xử văn hóa, sẵn lòng chấp nhận những đồng tiền này để đổi lại những thứ mà những tình nguyện viên này cần.',
        why_3: 'Những tập trung đầu tiên của chúng tôi là các dự án mã nguồn mở, đặc biệt là các dự án thiết yếu để giúp Lotus tồn tại và phát triển. Chúng tôi sẵn lòng để thảo luận với các dự án tự nguyện mong muốn tham gia. Chúng tôi đặc biệt quan tâm cho việc cấp phát vốn cho các dự án mã nguồn mở, trường học, trại mồ côi, bác sỹ, và các tiện ích công cộng khác.',
        why_4: 'Nếu bạn đang triển khai một dự án như vậy, và mong muốn sử dụng Lotus, xin hãy gửi đơn theo mẫu để được xét nhận Lotus:  <a class="white--text" href="https://forms.gle/j9EeY5NN57RcAoY99" target="_blank">form</a>, hoặc liên hệ qua <a class="white--text" href="https://discord.gg/KECbh3JEmm" target="_blank">discord.</a>',
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
        subscribe: {
          caption: 'Đăng ký',
          text: 'Tham gia nhận tin từ danh mục cộng đồng để nhận những tin tức mới nhất'
        },
        banner: {
          caption:
            'Khi bạn cho và nhận Lotus, bạn đang hỗ trợ cộng đồng và gia tăng giá trị cho nền kinh tế thế giới.',
          text: 'Khi sử dụng Lotus, bạn có thể hỗ trợ cho những chương trình sau: ',
          initiatives: [
            'Quyền con người',
            'Năng lượng tái tạo',
            'Quyền riêng tư số',
            'Nông nghiệp bền vững',
            'Phần mềm mã nguồn mở',
            'Cứu trợ nhân đạo và từ thiện'
          ]
        },
        faq: {
          q1: {
            question: 'Tôi có thể bắt đầu đào như thế nào?',
            answer:
              'Bạn cần chạy Node Lotus trên máy tính của mình. Bạn có thể xem chỉ dẫn tại <a href="https://docs.givelotus.org/guides/mining" target="_blank"> here</a>.'
          },
          q2: {
            question: 'Ví sẵn có là gì?',
            answer:
              'Nếu bạn sử dụng trình duyệt thì <a href="https://sendlotus.com" target="_blank">SendLotus.com</a> có thể sử dụng bất cứ khi nào. Hoặc đối với thiết bị di động của bạn, bạn có thể sử dụng Lotus Vase trên <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank"> Android</a> và <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. Bạn cũng có thể chạy Lotus Node light cho <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-osx-unsigned.dmg" target="_blank">MacOS</a> và <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. '
          },
          q3: {
            question: 'Làm sao để tôi có được Lotus?',
            answer:
              'Bạn có thể dùng <a href="https://faucet.lotuslounge.org/" target="_blank">faucet</a>. Hoặc bạn có thể nhận quà từ <a href="https://t.me/givelotus" target="_blank">telegram group</a>.'
          },
          q4: {
            question: 'Tôi có thể đóng góp cho dự án như thế nào?',
            answer:
              'Hãy tham khảo mã nguồn mở của chúng tôi <a href="https://github.com/LogosFoundation" target="_blank">here</a> và đừng ngại liên hệ với các lập trình viên trên <a href="https://t.me/givelotus" target="_blank">telegram group</a>.'
          },
          q5: {
            question:
              ' Có bất kỳ hướng dẫn quảng bá thương hiệu cùng với logo và hình ảnh nào mà tôi có thể sử dụng không?',
            answer:
              'Bạn có thể tải về tại <a href="https://storage.googleapis.com/lotus-project/Lotus%20Branding.zip" target="_blank">here</a>'
          }
        },
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
        banner_title: '',
        banner_titlestrong: 'Biểu trưng của sự tri ân',
        banner_subtitle:
          'Lotus của sự tri ân, là một biểu trưng (token) kỹ thuật số vô giá mà bạn có thể gửi qua mạng internet để tỏ lòng tri ân.',
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
