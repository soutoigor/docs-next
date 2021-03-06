const sidebar = {
  cookbook: [
    {
      title: 'Livro de Receitas',
      collapsable: false,
      children: ['/cookbook/', '/cookbook/editable-svg-icons']
    }
  ],
  guide: [
    {
      title: 'Essenciais',
      collapsable: false,
      children: [
        '/guide/installation',
        '/guide/introduction',
        '/guide/instance',
        '/guide/template-syntax',
        '/guide/data-methods',
        '/guide/computed',
        '/guide/class-and-style',
        '/guide/conditional',
        '/guide/list',
        '/guide/events',
        '/guide/forms',
        '/guide/component-basics'
      ]
    },
    {
      title: 'Componentes em Detalhes',
      collapsable: false,
      children: [
        '/guide/component-registration',
        '/guide/component-props',
        '/guide/component-attrs',
        '/guide/component-custom-events',
        '/guide/component-slots',
        '/guide/component-provide-inject',
        '/guide/component-dynamic-async',
        '/guide/component-template-refs',
        '/guide/component-edge-cases'
      ]
    },
    {
      title: 'Transições & Animações',
      collapsable: false,
      children: [
        '/guide/transitions-overview',
        '/guide/transitions-enterleave',
        '/guide/transitions-list',
        '/guide/transitions-state'
      ]
    },
    {
      title: 'Reuso & Composição',
      collapsable: false,
      children: [
        '/guide/mixins',
        '/guide/custom-directive',
        '/guide/teleport',
        '/guide/render-function',
        '/guide/plugins'
      ]
    },
    {
      title: 'Guias Avançados',
      collapsable: false,
      children: [
        {
          title: 'Reatividade',
          children: [
            '/guide/reactivity',
            '/guide/reactivity-fundamentals',
            '/guide/reactivity-computed-watchers'
          ]
        },
        {
          title: 'API de Composição',
          children: [
            '/guide/composition-api-introduction',
            '/guide/composition-api-setup',
            '/guide/composition-api-lifecycle-hooks',
            '/guide/composition-api-provide-inject',
            '/guide/composition-api-template-refs'
          ]
        },
        '/guide/optimizations',
        '/guide/change-detection'
      ]
    },
    {
      title: 'Ferramentas',
      collapsable: false,
      children: [
        '/guide/single-file-component',
        '/guide/testing',
        '/guide/typescript-support',
        '/guide/mobile'
      ]
    },
    {
      title: 'Escalonando',
      collapsable: false,
      children: ['/guide/routing', '/guide/state-management', '/guide/ssr']
    },
    {
      title: 'Acessibilidade',
      collapsable: false,
      children: [
        '/guide/a11y-basics',
        '/guide/a11y-semantics',
        '/guide/a11y-standards',
        '/guide/a11y-resources'
      ]
    },
    {
      title: 'Guia de Migração',
      collapsable: true,
      children: [
        '/guide/migration/introduction',
        '/guide/migration/array-refs',
        '/guide/migration/async-components',
        '/guide/migration/attribute-coercion',
        '/guide/migration/custom-directives',
        '/guide/migration/custom-elements-interop',
        '/guide/migration/data-option',
        '/guide/migration/events-api',
        '/guide/migration/filters',
        '/guide/migration/fragments',
        '/guide/migration/functional-components',
        '/guide/migration/global-api',
        '/guide/migration/global-api-treeshaking',
        '/guide/migration/inline-template-attribute',
        '/guide/migration/key-attribute',
        '/guide/migration/keycode-modifiers',
        '/guide/migration/props-default-this',
        '/guide/migration/render-function-api',
        '/guide/migration/slots-unification',
        '/guide/migration/transition',
        '/guide/migration/v-model',
        '/guide/migration/v-if-v-for',
        '/guide/migration/v-bind'
      ]
    },
    {
      title: 'Contribua com as Docs',
      collapsable: true,
      children: [
        '/guide/contributing/writing-guide',
        '/guide/contributing/doc-style-guide',
        '/guide/contributing/translations'
      ]
    }
  ],
  api: [
    '/api/application-config',
    '/api/application-api',
    '/api/global-api',
    {
      title: 'Opções',
      path: '/api/options-api',
      collapsable: false,
      children: [
        '/api/options-data',
        '/api/options-dom',
        '/api/options-lifecycle-hooks',
        '/api/options-assets',
        '/api/options-composition',
        '/api/options-misc'
      ]
    },
    '/api/instance-properties',
    '/api/instance-methods',
    '/api/directives',
    '/api/special-attributes',
    '/api/built-in-components.md',
    {
      title: 'API de Reatividade',
      path: '/api/reactivity-api',
      collapsable: false,
      children: [
        '/api/basic-reactivity',
        '/api/refs-api',
        '/api/computed-watch-api'
      ]
    },
    '/api/composition-api'
  ],
  examples: [
    {
      title: 'Exemplos',
      collapsable: false,
      children: [
        '/examples/markdown',
        '/examples/commits',
        '/examples/grid-component',
        '/examples/tree-view',
        '/examples/svg',
        '/examples/modal',
        '/examples/elastic-header',
        '/examples/select2',
        '/examples/todomvc'
      ]
    }
  ]
}

module.exports = {
  title: 'Vue.js',
  description: 'Vue.js - O Framework JavaScript Progressivo',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      {
        src: 'https://player.vimeo.com/api/player.js'
      }
    ],
    [
      'script',
      {
        src: 'https://extend.vimeocdn.com/ga/72160148.js',
        defer: 'defer'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: 'Documentação',
        ariaLabel: 'Menu de Documentação',
        items: [
          {
            text: 'Guia',
            link: '/guide/introduction'
          },
          {
            text: 'Guia de Migração',
            link: '/guide/migration/introduction'
          },
          {
            text: 'Guia de Estilos',
            link: '/style-guide/'
          },
          {
            text: 'Livro de Receitas',
            link: '/cookbook/'
          },
          {
            text: 'Exemplos',
            link: '/examples/markdown'
          }
        ]
      },
      {
        text: 'Referência da API',
        link: '/api/'
      },
      {
        text: 'Ecossistema',
        items: [
          {
            text: 'Comunidade',
            ariaLabel: 'Menu de Comunidade',
            items: [
              {
                text: 'Equipe',
                link: '/community/team/'
              },
              {
                text: 'Parceiros',
                link: '/community/partners'
              },
              {
                text: 'Junte-se',
                link: '/community/join/'
              },
              {
                text: 'Temas',
                link: '/community/themes/'
              }
            ]
          },
          {
            text: 'Projetos Oficiais',
            items: [
              {
                text: 'Vue Router',
                link: 'https://next.router.vuejs.org/'
              },
              {
                text: 'Vuex',
                link: 'https://vuex.vuejs.org/'
              },
              {
                text: 'Vue CLI',
                link: 'https://cli.vuejs.org/'
              },
              {
                text: 'Vue Test Utils',
                link:
                  'https://vuejs.github.io/vue-test-utils-next-docs/guide/introduction.html'
              },
              {
                text: 'Devtools',
                link: 'https://github.com/vuejs/vue-devtools'
              },
              {
                text: 'Notícias semanais',
                link: 'https://news.vuejs.org/'
              }
            ]
          }
        ]
      },
      {
        text: 'Patrocine',
        link: '/support-vuejs/',
        items: [
          {
            text: 'Doações Únicas',
            link: '/support-vuejs/#one-time-donations'
          },
          {
            text: 'Ajuda Recorrente',
            link: '/support-vuejs/#recurring-pledges'
          },
          {
            text: 'Loja de Camisetas',
            link: 'https://vue.threadless.com/'
          }
        ]
      }
    ],
    repo: 'vuejs/docs-next',
    editLinks: false,
    editLinkText: 'Edite isto no GitHub!',
    lastUpdated: 'Atualizado pela última vez',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/': sidebar.guide,
      '/community/': sidebar.guide,
      '/cookbook/': sidebar.cookbook,
      '/api/': sidebar.api,
      '/examples/': sidebar.examples
    },
    smoothScroll: false,
    algolia: {
      indexName: 'vuejs-v3',
      apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f',
      placeholder: 'Buscar na documentação'
    }
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'Novo conteúdo disponível.',
            buttonText: 'Atualizar'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
