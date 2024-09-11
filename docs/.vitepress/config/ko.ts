import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)

export const ko = defineConfig({
  lang: 'ko-KR',
  description: 'Vite 및 Vue 기반 정적 사이트 생성기.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/ko/guide/': { base: '/ko/guide/', items: sidebarGuide() },
      '/ko/finance/': { base: '/ko/finance/', items: sidebarFinance() },
      '/ko/quantlib/': { base: '/ko/quantlib/', items: sidebarQuantLib() }
    },

    footer: {
      message: 'Made by haun with ❤️',
      copyright: 'Copyright © 2024-present'
    },

    docFooter: {
      prev: '이전',
      next: '다음'
    },

    outline: {
      label: '이 페이지 목차'
    },

    lastUpdated: {
      text: '업데이트 날짜'
    },

    langMenuLabel: '언어 변경',
    returnToTopLabel: '맨 위로 돌아가기',
    sidebarMenuLabel: '사이드바 메뉴',
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 변경',
    darkModeSwitchTitle: '다크 모드로 변경'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '가이드',
      link: '/ko/guide/intro',
      activeMatch: '/ko/guide/'
    },
    {
      text: 'Finance',
      link: '/ko/finance/index',
      activeMatch: '/ko/finance/'
    },
    {
      text: 'QuantLib',
      link: '/ko/quantlib/intro',
      activeMatch: '/ko/quantlib/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '블로그 소개',
      collapsed: false,
      items: [
        { text: '블로그 스토리', link: 'intro' },
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
          { text: '금융', link: 'index' },
        ]
      },
      {
        text: '한국의 금융시스템',
        collapsed: false,
        base: '/ko/finance/overview/',
        items: [
          { text: '금융시스템', link: 'index' },
          { text: '금융시장', link: 'financial-market' },
          { text: '금융기관', link: 'financial-institution' },
          { text: '금융인프라', link: 'financial-infrastructure' }
        ]
      },
      {
        text: '한국의 통화정책',
        collapsed: false,
        base: '/ko/finance/monetary-policy/',
        items: [
          { text: '통화정책', link: 'index' },
        ]
      },
      {
        text: '채권',
        collapsed: false,
        base: '/ko/finance/bond/',
        items: [
          { text: '채권 개념', link: 'index' },
          { text: '채권 용어', link: 'term' },
          { text: '채권 분류', link: 'category' },
          { text: '채권 특징', link: 'feature' }
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

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  ko: {
    placeholder: '문서 검색',
    translations: {
      button: {
        buttonText: '검색',
        buttonAriaLabel: '검색'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '검색 지우기',
          resetButtonAriaLabel: '검색 지우기',
          cancelButtonText: '취소',
          cancelButtonAriaLabel: '취소'
        },
        startScreen: {
          recentSearchesTitle: '검색 기록',
          noRecentSearchesText: '최근 검색 없음',
          saveRecentSearchButtonTitle: '검색 기록에 저장',
          removeRecentSearchButtonTitle: '검색 기록에서 삭제',
          favoriteSearchesTitle: '즐겨찾기',
          removeFavoriteSearchButtonTitle: '즐겨찾기에서 삭제'
        },
        errorScreen: {
          titleText: '결과를 가져올 수 없습니다',
          helpText: '네트워크 연결을 확인하세요'
        },
        footer: {
          selectText: '선택',
          navigateText: '탐색',
          closeText: '닫기',
          searchByText: '검색 기준'
        },
        noResultsScreen: {
          noResultsText: '결과를 찾을 수 없습니다',
          suggestedQueryText: '새로운 검색을 시도할 수 있습니다',
          reportMissingResultsText: '해당 검색어에 대한 결과가 있어야 합니까?',
          reportMissingResultsLinkText: '피드백 보내기 클릭'
        }
      }
    }
  }
}