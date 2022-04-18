export const data = {
  "key": "v-fc036150",
  "path": "/guide/about.html",
  "title": "关于陈酱",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649834284000,
    "contributors": [
      {
        "name": "ChenSauce",
        "email": "chensauce@icloud.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "guide/about.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
