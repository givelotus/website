export default () => {
  return new Promise(function (resolve) {
    resolve({
      common: {
        'title': '',
        'subtitle': '',
        'error_with_status': 'An error occurred on server',
        '404': 'This page could not be found.',
        '404_subtitle':
          'You can either stay and chill here, or go back to the beginning.',
        'back': 'back to home',
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
        news: 'News',
        more: 'More',
        wallets: 'Wallets'
      },
      walletsPage: {
        wallets: 'Wallets',
        title: 'Wallets allow you to store and send your lotus tokens'
      },
      banner: {
        why_1:
          'Society struggles with efficiently funding public goods projects — with allocating resources towards work that is desparately needed but has no direct profit incentive. To this end, Lotus was created. We believe that by reframing what money is, and challenging the ideas around how it is used, we can solve the problem of funding public goods.',
        why_2:
          'Our goal is to show volunteers of charitable projects appreciation by distributing Lotus to them free-of-charge. And, as a culture, being willing to accept those tokens in return for things these volunteers need.',
        why_3:
          'Our initial focus is on open source projects, and specifically the projects needed to make Lotus function and exist. However, we are looking for additional charitable projects who are willing to accept and use Lotus. We would love to speak to any volunteer-based projects that are interesting in participating. We have a particular interest in providing tokens to open source, schools, orphanages, doctors, and other public utilities.'
      },
      lotusLanding: {
        features: {
          title: 'We are about',
          feature1: {
            title: 'Smart contracts',
            description:
              'Taproot with state, bigger integers, more opcodes and a new smart sighash '
          },
          feature2: {
            title: 'Self-funding',
            description:
              '50% of new coins go to miners, 50% to projects supporting the community'
          },
          feature3: {
            title: 'Scalability',
            description:
              'Based on the codebase of eCash, which allows organically scaling to +1M transactions/second '
          },
          feature4: {
            title: 'Stability',
            description:
              'Issuance of new coins softly follows supply and demand'
          }
        },
        story: {
          section1: {
            headtitle: 'Our mission',
            title: 'Powerful symbol of appreciation',
            text: 'Every day, in our interactions with other people we have experiences that make life worth living. We say, “thank you” to each other. But, talk is cheap and words are fleeting. It’s easy for someone to express appreciation through words alone. How motivating is “thank you?” What if we could seamlessly back our words with something priceless? What would the world look like if we had a more effective way to express gratitude to each other? What if we could keep the “appreciation,” we receive, forever? '
          },
          section2: {
            headtitle: 'Eternal gratitude',
            title: 'The joy of giving and receiving',
            text: 'The Lotus Project believes that it would foster the spirit of reciprocity. We believe that it would guide people towards positive actions — and away from things that are not beneficial. And we are creating a way to do exactly that. Flowers are often given to show appreciation, but we cannot keep perishable flowers at hand. By tokenizing a flower, we can always have the symbol with us. Tokens take up no physical space, and do not perish. The lotus in particular symbolizes purity, enlightenment, rebirth, and regeneration. These are the values which this token seeks to represent.'
          },
          section3: {
            headtitle: 'Community first',
            title:
              'Lotus is a community-driven innovation that will ensure that your gratitude is preserved forever.',
            text: 'The Lotus token ledger is maintained on a permissionless, uncensorable, and open blockchain which is maintained and enabled by software produced by the Logos Foundation. New tokens are minted through proof-of-work mining and given as a reward to the developers who lovingly produce the infrastructure which enables the token to exist and be transferred, and to the miners who carefully maintain the accuracy of the blockchain. This occurs through "block rewards", which are open and transparent. Unlike Bitcoin, which is a speculative asset, Lotus is priceless — a token of appreciation — having sentimental value. The reward schedule is programmed to react to changes in the demand for Lotus tokens and is inflationary. By being inflationary, there is no reason to hoard it except as a reminder of how much people value us. Lotus is not to be an investment, but our investments in each other will generate more Lotus. '
          }
        },
        before_carousel_1:
          'New Lotus are issued through rewards that are split between miners and projects which benefit the public good as a show of appreciation.',
        before_carousel_2:
          "Whenever you use Lotus to appreciate your friends, you know that you're also supporting these great projects.",
        subscribe: {
          caption: 'Subscribe',
          text: 'Join our community mailing list to keep up to date'
        },
        banner: {
          caption:
            'When you give or accept Lotus you are supporting the commons and adding value to the worldwide economy.',
          text: 'The initiatives you support when you use Lotus are: ',
          initiatives: [
            'Human rights',
            'Renewable power',
            'Digital privacy',
            'Permaculture',
            'Open source software',
            'Humanitarian efforts'
          ]
        },
        faq: {
          q1: {
            question: 'How can I start mining?',
            answer:
              'You will need to run Lotus Node on your computer. You can find instructions <a href="https://docs.givelotus.org/guides/mining" target="_blank"> here</a>.'
          },
          q2: {
            question: 'What are available wallets?',
            answer:
              'Enjoy browser based <a href="https://sendlotus.com" target="_blank">SendLotus.com</a> or for your mobile device you can use Lotus Vase with <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank"> Android</a> and <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. You can also run lightweight Lotus Node for <a href="https://storage.googleapis.com/lotus-project/lotus-4.3.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-4.3.3-osx-unsigned.dmg" target="_blank">MacOS</a> and <a href="https://storage.googleapis.com/lotus-project/lotus-4.3.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. '
          },
          q3: {
            question: 'How do I get Lotus?',
            answer:
              'You can use our <a href="https://faucet.lotuslounge.org/" target="_blank">faucet</a>. Or you can get gifted on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>.'
          },
          q4: {
            question: 'How can I contribute to the project?',
            answer:
              'Check the open source code we have <a href="https://github.com/LogosFoundation" target="_blank">here</a> and feel free to contact developers on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>.'
          },
          q5: {
            question:
              'Do you have any branding guides with logos or images I can use?',
            answer:
              'You can download them <a href="https://storage.googleapis.com/lotus-project/Lotus%20Branding.zip" target="_blank">here</a>'
          }
        },
        header_language: 'language',
        header_theme: 'Theme mode',
        header_dark: 'dark',
        header_light: 'light',
        header_about: 'about',
        header_carousel: 'projects',
        header_faq: 'FAQ',
        header_contact: 'contact',
        header_block_explorer: 'Block explorer',
        documentation: 'Docs',
        contributors: 'Contributors',
        banner_title: 'The token of appreciation',
        banner_subtitle:
          'Lotus is a priceless digital token that you can send over the internet to show your appreciation.',
        faq_subtitle:
          'Have a question? Check out our frequently asked questions to find your answer.',
        news_readmore: 'read more',
        stampchat_desc:
          ' StampChat is a decentralized end-to-end encrypted messenger which uses the Lotus token to ensure all messages you receive are valuable. This allows spam to be filtered on the platform without centralized moderators. The communication is decentralized, secure, and uncensorable. ',
        becash_desc:
          ' Be.cash collaborates with the Logos Foundation to assist in developing the lotus blockchain software, as well as developing Point of Sale systems and mobile payment methods for areas without the necessary infrastructure for traditional payment methods. ',
        bitcoin_abc_desc:
          ' Bitcoin ABC develops highly scalable open-source software for mining and transferring cryptotokens. Although Bitcoin ABC does not charge for its work, Lotus uses this software as a basis for the network and deems it appropriate to reciprocate to these developers. ',
        bcpro_desc:
          ' bcPro Foundation builds custom blockchain software targetting the Vietnamese market ',
        services_button: 'Explore'
      }
    })
  })
}
