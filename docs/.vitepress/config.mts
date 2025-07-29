export default {
  lang: 'zh-CN',
  title: '我的文档',
  description: '这是一个基于 VitePress 构建的现代化文档站点',
  
  // 移除URL中的.html后缀
  cleanUrls: true,

  // 配置base路径，因为仓库名不是 your-username.github.io
  base: '/my-vitepress-site/',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '我的文档',
      description: '这是一个中文文档站点',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'My Docs',
      description: 'This is an English documentation site',
    },
  },

  themeConfig: {
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                }
              }
            }
          }
        }
      }
    },

    // 全局侧边栏配置
    sidebar: {
      '/': [
        {
          text: '中文文档',
          items: [
            { text: '首页', link: '/' },
            { text: '使用指南', link: '/guide' },
            { text: '常见问题', link: '/faq' },
          ],
        },
      ],
      '/en/': [
        {
          text: 'English Docs',
          items: [
            { text: 'Home', link: '/en/' },
            { text: 'Guide', link: '/en/guide' },
            { text: 'FAQ', link: '/en/faq' },
          ],
        },
      ],
    },

    // 多语言配置
    locales: {
      root: {
        nav: [
          { text: '指南', link: '/guide' },
          { text: '常见问题', link: '/faq' },
        ],
        // 中文UI翻译
        outlineTitle: '页面导航',
        lastUpdatedText: '最后更新',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        returnToTopLabel: '返回顶部'
      },
      en: {
        nav: [
          { text: 'Guide', link: '/en/guide' },
          { text: 'FAQ', link: '/en/faq' },
        ],
        // 英文UI翻译
        outlineTitle: 'On this page',
        lastUpdatedText: 'Last updated',
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        returnToTopLabel: 'Back to top'
      },
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/smileCccc/my-vitepress-site' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    }
  },
}
