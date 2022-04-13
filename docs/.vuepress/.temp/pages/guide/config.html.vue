<template><h1 id="整体框架" tabindex="-1"><a class="header-anchor" href="#整体框架" aria-hidden="true">#</a> 整体框架</h1>
<h3 id="框架简介" tabindex="-1"><a class="header-anchor" href="#框架简介" aria-hidden="true">#</a> 框架简介</h3>
<hr>
<p>网站自豪的采用VuePress 进行搭建VuePress是一个以 Markdown 为中心的静态网站生成器。</p>
<p>可以使用 Markdown在新窗口打开 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。</p>
<p>VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。</p>
<h3 id="目前计划" tabindex="-1"><a class="header-anchor" href="#目前计划" aria-hidden="true">#</a> 目前计划</h3>
<hr>
<ul>
<li>博客是否转移使用VuePress</li>
<li>运营部是否由hexo转移到VuePress</li>
</ul>
<h3 id="基础框架" tabindex="-1"><a class="header-anchor" href="#基础框架" aria-hidden="true">#</a> 基础框架</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docs
├─ .vuepress 配置文件
│  ├─dist 编译完成文件
│  ├─public 基础文件
│  └─ config.js 站点配置
├─ README.md 站点首页
├─ .gitignore
├─ package.json 运行编译
├─ guide 快速了解
│  ├─ getting-started 网站简介
│  ├─ domain 域名公示
│  └─ config 整体框架
├─ documentation 文档/项目文档
│  └─ README.md 首页
├─ references 框架
│  ├─ README.md 首页 
│  ├─ 以下计划中
│  ├─ ho.md 首页
│  ├─ lj.md 了解
│  ├─ wd.md 文档
│  ├─ tt.md 团体
│  └─ config 整体框架
├─ sause 团体
│  ├─ README.md 首页
│  └─ about.md 关于
├─ jz 捐赠
│  └─ README.md

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="https://api.minblue.cc" alt=""></p>
<h3 id="捐赠" tabindex="-1"><a class="header-anchor" href="#捐赠" aria-hidden="true">#</a> 捐赠</h3>
<p>如果你觉得此网站对你有所帮助同时你钱包宽裕不妨捐赠一下！
我会非常感谢你！
<img src="https://minblue.cc/images/2022/04/05/f8J.jpg" alt=""></p>
<p><img src="https://minblue.cc/images/2022/04/05/RNCd.jpg" alt=""></p>
<p><img src="https://minblue.cc/images/2022/04/05/RRim.jpg" alt=""></p>
</template>
