export const data = {
  "key": "v-18c5f3ba",
  "path": "/sauce/jj.html",
  "title": "简介",
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
        "commits": 3
      }
    ]
  },
  "filePathRelative": "sauce/jj.md"
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
