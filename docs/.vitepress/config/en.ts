import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/finance/': { base: '/finance/', items: sidebarFinance() },
      '/quantlib/': { base: '/quantlib/', items: sidebarQuantLib() }
    },

    footer: {
      message: 'Made by haun with ❤️',
      copyright: 'Copyright © 2024-present'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/intro',
      activeMatch: '/guide/'
    },
    {
      text: 'Finance',
      link: '/finance/index',
      activeMatch: '/finance/'
    },
    {
      text: 'QuantLib',
      link: '/quantlib/intro',
      activeMatch: '/quantlib/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Blog Story', link: 'intro' },
        { text: 'Finance', link: 'finance' },
        { text: 'Quant', link: 'quant' },
        { text: 'QuantLib', link: 'quantlib' }
      ]
    }
  ]
}

function sidebarFinance(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Finance',
        collapsed: false,
        items: [
          { text: 'Overview', link: 'index' },
        ]
      },
      {
        text: 'Financial System in Korea',
        collapsed: false,
        base: '/finance/overview/',
        items: [
          { text: 'Financial System', link: 'index' },
          { text: 'Financial Market', link: 'financial-market' },
          { text: 'Financial Institution', link: 'financial-institution' },
          { text: 'Financial Infrastructure', link: 'financial-infrastructure' }
        ]
      },
      {
        text: 'Financial Stability',
        collapsed: false,
        base: '/finance/financial-stability/',
        items: [
          { text: 'Financial Stability', link: 'index' },
        ]
      }
    ]
  }

function sidebarQuantLib(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'QuantLib',
      items: [
        { text: 'Introduction', link: 'intro' },
        { text: 'Examples', link: 'examples' },
        { text: 'Date Class', link: 'date' },
        { text: 'Period Class', link: 'period' },
        { text: 'Calendar Class', link: 'calendar' },
      ]
    }
  ]
}