module.exports = { 
    title: '陈酱', // 网站的标题
    description: 'chsas 运营维护者',
    themeConfig: {
    logo: 'https://minblue.cc/images/2022/04/11/aig8.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },

      {
        text: '文档',
        link: '/doc/',
      },

      {
        text: '框架',
        link: '/frame/',
      },

      {
        text: '捐赠',
        link: '/jz/',
      },


      // NavbarGroup
      {
      text: 'SAUCE',
           children:[
                    {text:'首页', link: '/sauce/'},// 以 ‘/’结束，默认读取 README.md
                    {text:'简介', link: '/sauce/jj.md'} // 外部链接
                ]

              },

      {
      text: '运营部',
            children:[
                     {text:'首页', link: 'https://chensauce.cn'},// 以 ‘/’结束，默认读取 README.md
                     {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
                  ]
          
                },
      {
       text: '镜像站',
       link: 'https://mirror.minblue.cc',
      },

      {
        text: '监控站',
        link: 'https://nz.minblue.cn',
      },

      {
        text: '云图床',
        link: 'https://minblue.cc',
       },
 


            ],
            
            



            sidebar: {
              '/guide/': [
                {
                  text: '简介',
                  children: ['/guide/README.md', '/guide/brief.md', '/guide/domain.md', '/guide/frame.md', '/guide/doc.md', '/guide/about.md'],
                },
              ],
              '/doc/': [
                {
                  text: '项目文档',
                  children: ['/doc/README.md', ],
                },
              ],

              '/sauce/': [
                {
                  text: 'SAUCE',
                  children: ['/sauce/README.md', '/sauce/jj.md', '/sauce/gy.md' ],
                },
              ],

            },
            
}
}    
  
  
  
  