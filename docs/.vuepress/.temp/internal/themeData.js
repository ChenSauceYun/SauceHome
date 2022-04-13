export const themeData = {
  "logo": "https://minblue.cc/images/2022/04/11/aig8.png",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "文档",
      "link": "/doc/"
    },
    {
      "text": "框架",
      "link": "/frame/"
    },
    {
      "text": "捐赠",
      "link": "/jz/"
    },
    {
      "text": "SAUCE",
      "children": [
        {
          "text": "首页",
          "link": "/sauce/"
        },
        {
          "text": "简介",
          "link": "/sauce/jj.md"
        }
      ]
    },
    {
      "text": "运营部",
      "children": [
        {
          "text": "首页",
          "link": "https://chensauce.cn"
        },
        {
          "text": "其它链接",
          "link": "https://www.baidu.com/"
        }
      ]
    },
    {
      "text": "镜像站",
      "link": "https://mirror.minblue.cc"
    },
    {
      "text": "监控站",
      "link": "https://nz.minblue.cn"
    },
    {
      "text": "云图床",
      "link": "https://minblue.cc"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "简介",
        "children": [
          "/guide/README.md",
          "/guide/brief.md",
          "/guide/domain.md",
          "/guide/frame.md",
          "/guide/doc.md",
          "/guide/about.md"
        ]
      }
    ],
    "/doc/": [
      {
        "text": "项目文档",
        "children": [
          "/doc/README.md"
        ]
      }
    ],
    "/sauce/": [
      {
        "text": "SAUCE",
        "children": [
          "/sauce/README.md",
          "/sauce/jj.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
