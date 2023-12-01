export default () => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        'title': '',
        'subtitle': '',
        'error_with_status': '服务器出现错误',
        '404': '无法找到页面。',
        '404_subtitle': '你可以留在这里放松，或者回退到开始。',
        'back': '返回首页',
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
        'vnm': 'Tiếng Việt',
        'pt': '󠁥󠁮󠁧󠁿Português',
        'id': '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        'in': '󠁥󠁮󠁧󠁿हिन्दी',
        'ar': '󠁥󠁮󠁧󠁿العربيّة',
        'notif_msg': ''
      },
      menu: {
        news: '新闻',
        more: '更多的',
        wallets: '钱包'
      },
      walletsPage: {
        wallets: '钱包',
        title: '检查当前可用于生态系统的 Lotus 钱包：'
      },
      lotusLanding: {
        features: {
          title: '关于我们',
          feature1: {
            title: '智能合约',
            description:
              '结合状态机的Taproot，支持更大的整数, 更多的操作码，以及新的智能签名哈希'
          },
          feature2: {
            title: '经费自筹',
            description: '50%的新币归属矿工，另外50%会资助支持社区发展的项目'
          },
          feature3: {
            title: '可扩展性',
            description:
              '因为基于eCash的代码库，可以原生性的支持每秒一百万次以上交易'
          },
          feature4: {
            title: '稳定性',
            description: '新币的发行速率会跟随供需状况自适应调整'
          }
        },
        story: {
          section1: {
            headtitle: '我们的使命',
            title: '强有力的感恩符号',
            text: '每一天，通过人与人的互动，丰富多彩的经历让生活变得更有价值。 我们互相说声“谢谢”。 但是，说话是廉价的，言语是转瞬即逝的。 说些好听的话非常容易。但说“谢谢”的人到底有多真诚？ 是否可以用无价的东西去表示我们的感恩？ 如果可以有一种更有效的方式来表达彼此的感激之情，世界会是什么样子？ 如果我们能够永远保持我们收到的“赞赏”呢？'
          },
          section2: {
            headtitle: '永久的恩情',
            title: '给予和收获的喜悦',
            text: '莲花项目就是为了培养互利互惠的精神。 我们相信它会引导人们采取积极的行动，同时远离无益的事情。 我们就是要用一个新的方法来做到这一点。鲜花通常用来表示谢意，但却不能长期保存。 通过发行代表鲜花的数字代币，就能一直持有。 代币不占用物理空间，也不会变质。 莲花象征着纯洁、启蒙、转世和重生。 这些都是这个代币想要代表的价值。'
          },
          section3: {
            headtitle: '社区第一',
            title:
              '莲花项目是一个由社区推动的创新，会永久的保存人们的感激之情。',
            text: '莲花代币（Lotus）账本维护在一个无需许可、不可审查且开放的区块链上。这个区块链是由Logos 基金会组织开发的软件来运行和维护的。 新代币是通过工作量证明（POW）来增发的，并作为奖励给予那些搭建基础设施的开发人员，以及那些维护区块链准确性的矿工。 这些都通过公开透明的“区块奖励”来实现。与在一定程度上作为投机资产的比特币不同，Lotus 是一种无价的，代表感恩的代币，具有情感价值。 程序设定了奖励计划会根据对Lotus需求的变化做出反应，会有通胀。由于通胀的属性，Lotus本身并没有囤积的价值，除非作为一种方式来珍藏他人对我们的重视。 Lotus不是一种投资，但人与人之前的情感投资会产生更多的Lotus。'
          }
        },
        before_carousel_1:
          '新的莲花代币（Lotus）会分发给矿工和那些有利于社会大众的项目，这本身也是一种感恩的表现。',
        before_carousel_2:
          '每当您使用Lotus来表达感激之情的时候，您其实也同时在支持这些优秀的项目。',

        header_language: '语言',
        header_theme: '主题模式',
        header_dark: '深色',
        header_light: '浅色',
        header_about: '关于',
        header_projects: '项目',
        header_carousel: '项目',
        header_faq: '常见问题',
        header_contact: '联系方式',
        header_block_explorer: '区块浏览器',
        documentation: '文档',
        contributors: '贡献者',
        faq_subtitle: '有问题？可以查阅常见问题来寻找您想要的答案。',
        news_readmore: '了解更多',
        stampchat_desc:
          'StampChat是一款去中心化的点对点加密的通讯软件，使用Lotus代币来确保收到的都是有价值消息。可以达到在没有中心化审查的情况下实现垃圾信息过滤的效果。通讯是去中性化，安全，且无法审查的。',
        becash_desc:
          ' Be.cash 和Logos Foundation合作开发了Lotus区块链软件，同时也开发了销售点（POS）系统，可以给缺乏传统支付所需基础设施的地方提供移动支付方式。',
        bitcoin_abc_desc:
          ' Bitcoin ABC团队开发了具有高度延展性的开源软件，用来支持挖矿和传输数字货币。 尽管Bitcoin ABC团队并不为此收费，Lotus使用了该软件作为网络的基础，认为应当给予这些开发着适当的酬劳。',
        services_button: '探索'
      }
    })
  })
}
