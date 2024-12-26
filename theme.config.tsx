import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Sui Bootcamp 2024</span>,
  project: {
    link: 'https://github.com/vbi-academy/sui-bootcamp-2024',
  },
  chat: {
    link: 'https://discord.gg/aquamovedao',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,  
 
    toggleButton: true,  // Hiển thị nút đóng/mở sidebar
    autoCollapse: true,  // Tự động đóng các section khác khi mở một section
  },
  docsRepositoryBase: 'https://github.com/vbi-academy/sui-bootcamp-2024',
  footer: {
    text: 'Sui Bootcamp 2024',
  },
}

export default config
