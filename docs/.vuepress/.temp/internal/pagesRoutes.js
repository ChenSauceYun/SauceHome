import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-7445f070","/doc/",{"title":"项目文档"},["/doc/index.html","/doc/README.md"]],
  ["v-7e1f989b","/frame/",{"title":"整体框架"},["/frame/index.html","/frame/README.md"]],
  ["v-fc036150","/guide/about.html",{"title":"关于陈酱"},["/guide/about","/guide/about.md"]],
  ["v-35ffd2ea","/guide/brief.html",{"title":"基础简介"},["/guide/brief","/guide/brief.md"]],
  ["v-34d2cb8d","/guide/doc.html",{"title":"网站文档"},["/guide/doc","/guide/doc.md"]],
  ["v-7ba1fbae","/guide/domain.html",{"title":"域名公示"},["/guide/domain","/guide/domain.md"]],
  ["v-1c997578","/guide/frame.html",{"title":"整体框架"},["/guide/frame","/guide/frame.md"]],
  ["v-fffb8e28","/guide/",{"title":"网站大纲"},["/guide/index.html","/guide/README.md"]],
  ["v-2d0a9b46","/jz/",{"title":"捐赠"},["/jz/index.html","/jz/README.md"]],
  ["v-d8a81970","/sauce/gy.html",{"title":"关于"},["/sauce/gy","/sauce/gy.md"]],
  ["v-18c5f3ba","/sauce/jj.html",{"title":"简介"},["/sauce/jj","/sauce/jj.md"]],
  ["v-d9300a02","/sauce/",{"title":"团体首页"},["/sauce/index.html","/sauce/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
