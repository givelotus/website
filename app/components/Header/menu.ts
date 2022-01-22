type MenuItem = {
  translation: string,
  url: string,
  offset?: number
}

export const menuList: MenuItem[] = [
  {
    translation: 'lotusLanding.header_about',
    url: '#about',
  },
  {
    translation: 'lotusLanding.header_carousel',
    url: '#carousel',
  },
  {
    translation: 'lotusLanding.header_faq',
    url: '#faq',
    offset: 60,
  },
]
