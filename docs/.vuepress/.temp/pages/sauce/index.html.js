export const data = {
  "key": "v-d9300a02",
  "path": "/sauce/",
  "title": "团体首页",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649814184000,
    "contributors": [
      {
        "name": "ChenSauce",
        "email": "chensauce@icloud.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "sauce/README.md"
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
