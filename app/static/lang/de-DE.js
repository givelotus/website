export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: '',
        subtitle: '',
        error_with_status: 'Auf dem Server ist ein Fehler aufgetreten',
        '404': 'Diese Seite konnte nicht gefunden werden.',
        '404_subtitle':
          'Sie können entweder hier bleiben und entspannen oder zum Anfang zurückkehren.',
        zurück: 'zurück nach Hause',
        login: '',
        login_create: '',
        login_or: '',
        login_email: '',
        login_password: '',
        login_remember: '',
        login_forgot: '',
        continue: '',
        login_title: '',
        login_subtitle: '',
        register: '',
        register_already: '',
        register_or: '',
        register_name: '',
        register_email: '',
        register_password: '',
        register_confirm: '',
        register_title: '',
        register_subtitle: '',
        accept: '',
        en: 'English',
        de: 'Deutsch',
        zh: '简体中文',
        pt: '󠁥󠁮󠁧󠁿Português',
        id: '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        ar: '󠁥󠁮󠁧󠁿العربيّة',
        notif_msg:
          'Dies ist ein Beispiel für eine Nachricht, die häufig für wichtige Informationen für Besucher oder Benutzer verwendet wird. Bitte klicken Sie auf die Schaltfläche neben, um diese Nachricht zu schließen.',
      },
      calculator: {
        title: 'Lotus Mining Rechner',
        subtitle: '[experimentell]',
        user_rewards_xpi: 'Tägliche Lotus Ausschüttung:',
        user_electricity_costs: 'Tägliche Stromkosten:',
        gpu_question: 'Was ist deine GPU-Karte?',
        user_hashrate: 'Wie hoch ist die Hashrate? *',
        user_power_consumption: 'Wie hoch ist der Stromverbrauch? *',
        watt_cost: 'Was kostet 1 kWh an deinem Standort?',
        advanced: 'Erweitert anzeigen',
        avg_price: 'Durchschnittspreis [USDT]',
        current_difficulty: 'Aktuelle Schwierigkeit',
        total_network_hashrate: 'Gesamtnetzwerk-Hashrate',
        update_data: 'Neue Daten holen',
        rewards: 'Ausschüttung',
        electricity_costs: 'Stromkosten',
        hourly: 'stündlich',
        daily: 'täglich',
        weekly: 'wöchentlich',
        monthly: 'monatlich',
        period: 'Zeitraum',
      },
      lotusLanding: {
        features: {
          title: 'We are about', // needs translation
          feature1: {
            title: 'Smart contracts', // needs translation
            description:
              'Taproot mit State, größere Ganzzahlen, mehr Opcodes und ein neuer smarter Sighash',
          },
          feature2: {
            title: 'Self-funding', // needs translation
            description:
              '50% der neuen Coins gehen an Miner, 50% an Projekte zur Unterstützung der Community',
          },
          feature3: {
            title: 'Scalability', // needs translation
            description:
              'Basiert auf dem Code von eCash, die eine organische Skalierung auf +1 Mio. Transaktionen/Sekunde ermöglicht',
          },
          feature4: {
            title: 'Stability', // needs translation
            description:
              'Generierung neuer Coins folgt gedämpft Angebot und Nachfrage',
          },
        },
        story: {
          section1: {
            headtitle: 'Unsere Mission',
            title: 'Mächtiges Symbol der Anerkennung',
            text:
              'Jeden Tag machen wir im Umgang mit anderen Menschen Erfahrungen, die das Leben lebenswert machen. Wir sagen "Danke" zueinander. Aber Gerede ist billig und Worte sind flüchtig. Es ist für jemanden leicht, seine Wertschätzung allein durch Worte auszudrücken. Wie motivierend ist ein "Danke"? Was wäre, wenn wir unseren Worten nahtlos etwas Unbezahlbares folgen lassen könnten? Wie sähe die Welt aus, wenn wir eine effektivere Möglichkeit hätten, uns gegenseitig unsere Dankbarkeit auszudrücken? Was wäre, wenn wir die "Wertschätzung", die wir erhalten, für immer behalten könnten?',
          },
          section2: {
            headtitle: 'Ewige Dankbarkeit',
            title: 'Die Freude des Gebens und Empfangens',
            text:
              'Das Lotus-Projekt glaubt, dass es den Geist der Gegenseitigkeit fördern würde. Wir glauben, dass es die Menschen zu positiven Handlungen führen würde - und weg von Dingen, die nicht nützlich sind. Und wir schaffen eine Möglichkeit, genau das zu tun. \n Blumen werden oft verschenkt, um Wertschätzung zu zeigen, aber wir können keine verderblichen Blumen vorrätig halten. Indem wir eine Blume zu einem Token machen, können wir das Symbol immer bei uns haben. Token nehmen keinen Platz weg und verderben nicht. Insbesondere der Lotus symbolisiert Reinheit, Erleuchtung, Wiedergeburt und Regeneration. Dies sind die Werte, die diese Tokens repräsentieren soll.',
          },
          section3: {
            headtitle: 'Community first', // needs translation
            title:
              'Lotus ist eine von der Community betriebene Innovation, die dafür sorgt, dass deine Anerkennung für immer erhalten bleibt.',
            // needs translation
            text:
              'The Lotus token ledger is maintained on a permissionless, uncensorable, and open blockchain which is maintained and enabled by software produced by the Logos Foundation. New tokens are minted through proof-of-work mining and given as a reward to the developers who lovingly produce the infrastructure which enables the token to exist and be transferred, and to the miners who carefully maintain the accuracy of the blockchain. This occurs through "block rewards", which are open and transparent. Unlike Bitcoin, which is a speculative asset, Lotus is priceless -- a token of appreciation -- having sentimental value. The reward schedule is programmed to react to changes in the demand for Lotus tokens and is inflationary. By being inflationary, there is no reason to hoard it except as a reminder of how much people value us. Lotus is not to be an investment, but our investments in each other will generate more Lotus. ',
          },
        },
        before_carousel_1:
          'Neue Lotus werden zur Hälfte an Miner generiert und zur Hälfte an Projekte die dem Gemeinwohl dienen generiert, als Zeichen der Anerkennung.',
        before_carousel_2:
          'Wenn du Lotus verwendest, um deine Freunde zu würdigen, weißt du, dass du damit auch diese bedeutsamen Projekte unterstützt.',
        banner: {
          caption:
            // needs translation
            'When you give or accept Lotus you are supporting the commons and adding value to the worldwide economy.',
          text:
            'Die Initiativen die du unterstützt wenn du Lotus verwendest sind: ',
          initiatives: [
            // needs translation
            'Human rights',
            'Renewable power',
            'Digital privacy',
            'Permaculture',
            'Open source software',
            'Humanitarian efforts',
          ],
        },
        // needs translation
        faq: {
          q1: {
            question: 'How can I start mining?',
            answer:
              'You will need to run Lotus Node on your computer. You can find instructions <a href="https://docs.givelotus.org/guides/mining" target="_blank"> here</a>. To check your hashrate and approximate rewards check our <a href="/calculator" target="_blank">rewards calculator</a>.',
          },
          q2: {
            question: 'What are available wallets?',
            answer:
              'Cashew mobile wallet for <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank"> Android</a> and <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. You can also run lightweight Lotus Node for <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-osx-unsigned.dmg" target="_blank">MacOS</a> and <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. ',
          },
          q3: {
            question: 'How do I get Lotus?',
            answer:
              'You can use our <a href="https://faucet.lotuslounge.org/" target="_blank">faucet</a>. Or you can get gifted on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>. You can also trade your other coins for Lotus [XPI] on <a href="https://www.exbitron.com/" target="_blank">Exbitron exchange</a>.',
          },
          q4: {
            question: 'Where can I trade?',
            answer:
              'You can trade Lotus on Exbitron for <a href="https://www.exbitron.com/trading/xpiusdt" target="_blank">USDT</a>, <a href="https://www.exbitron.com/trading/xpidoge" target="_blank">Dogecoin</a> and <a href="https://www.exbitron.com/trading/xpibch" target="_blank">Bitcoin Cash</a>',
          },
          q5: {
            question: 'How can I contribute to the project?',
            answer:
              'Check the open source code we have <a href="https://github.com/LogosFoundation" target="_blank">here</a> and feel free to contact developers on our <a href="https://t.me/givelotus" target="_blank">telegram group</a>.',
          },
        },
        header_language: 'Sprache',
        header_theme: 'Themenmodus',
        header_dark: 'dunkel',
        header_light: 'Licht',
        header_about: 'about',
        header_projects: 'Projekte',
        header_carousel: 'Projekte',
        header_faq: 'FAQ',
        header_contact: 'Kontakt',
        header_block_explorer: 'Block Explorer',
        documentation: 'Dokumentation',
        banner_title: '',
        banner_titlestrong: 'Das Token der Anerkennung',
        banner_subtitle:
          'Lotus ist ein preisloses digitales Token der Anerkennung das du immer zur Hand haben kannst.',
        faq_subtitle:
          'Hast du eine Frage? In unseren häufig gestellten Fragen findest du deine Antwort.',
        logos_desc:
          'Die Logos Foundation ist für die Durchführung dieses Projekts verantwortlich und stellt sicher, dass die Infrastruktur für alle Benutzer zur Verfügung steht. Ohne sie würde es Lotus nicht existieren. ',
        stampchat_desc:
          ' StampChat ist ein dezentraler, Ende-zu-Ende-verschlüsselter Messenger, der Lotus-Token verwendet, um sicherzustellen, dass alle Nachrichten, die Sie erhalten, wertvoll sind. Dadurch kann Spam auf der Plattform ohne zentrale Moderatoren gefiltert werden. Die Kommunikation ist dezentralisiert, sicher und unzensierbar. ',
        becash_desc:
          ' be.cash arbeitet mit der Logos Foundation zusammen, um die Entwicklung der Software der Lotus-Blockchain zu unterstützen, sowie Point-of-Sale-Systeme und mobile Zahlungsmethoden für Gebiete zu entwickeln, die nicht über die notwendige Infrastruktur für traditionelle Zahlungsmethoden verfügen. ',
        bitcoin_abc_desc:
          ' Bitcoin ABC entwickelt hochskalierbare Open-Source Software für Mining und Transaktionen von Kryptowährungen. Obwohl Bitcoin ABC keine Gebühren für seine Arbeit erhebt, nutzt Lotus diese Software als Grundlage für das Netzwerk und hält es für angemessen, den Entwicklern eine Gegenleistung zu erbringen. ',
        services_button: 'Entdecken',
      },
    })
  })
}
