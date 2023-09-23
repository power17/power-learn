import { defineConfig } from 'vitepress'
export default defineConfig((config) => {
  let base = process.env.BUILD_TYPE === 'git' ? '/power-blog' : '' 

  return {
    title: "疯世权王",
    description: "记录技术的点点滴滴",
    head: [
      // 图标配置
      ['link', { rel: 'icon',type:"image/x-icon", href: base + '/logo.svg' }],
   
    ],
    srcDir: 'src',
  
    lastUpdated: true,
    base: base,
    themeConfig: {
      // externalLinkIcon: true,
      logo: '/logo.png',
      search: {
        provider: 'local'
      },
      nav: [
        
        { text: '首页', link: '/' },
        { text: '前端', link: '/frontend/Vite' },
        { text: '算法', link: '/algorithm/Array'},
        { text: '数据库', link: '/databases/Mysql'},
        { text: 'mac', link: '/mac/macEvironment'},
       
      ],
       sidebar: {
        '/algorithm/': [
          {
            text: '数据结构',
            items: [
              { text: '数组', link: '/algorithm/Array' },
              { text: '链表', link: '/algorithm/LinkedList' }
            ]
          },
          {
            text: '算法',
            items: [
              { text: '排序', link: '/algorithm/Sort'},
            ]
          }
        ],
        '/frontend/': [
          {
            text: '源码系列',
            items: [
              { text: 'vite源码', link: '/frontend/Vite' },
             
            ]
          },
          {
            
          }
        ],  
        '/databases/': [
          {
            text: '数据库',
            items: [
              { text: 'mysql基本操作', link: '/databases/Mysql' },
             
            ]
          },
        ],
        '/mac/': [
          {
            text: 'mac配置',
            items: [
              { text: 'mac配置环境', link: '/mac/macEvironment' },
             
            ]
          },
        ]
       }, 
  
      
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/power17/power-learn' }
      ]
    }
  }
})
