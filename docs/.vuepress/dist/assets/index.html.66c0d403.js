import{_ as n,e as s}from"./app.2027c8e7.js";const a={},e=s(`<h1 id="\u6574\u4F53\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u6574\u4F53\u6846\u67B6" aria-hidden="true">#</a> \u6574\u4F53\u6846\u67B6</h1><h3 id="\u6846\u67B6\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u7B80\u4ECB" aria-hidden="true">#</a> \u6846\u67B6\u7B80\u4ECB</h3><hr><p>\u7F51\u7AD9\u81EA\u8C6A\u7684\u91C7\u7528VuePress \u8FDB\u884C\u642D\u5EFAVuePress\u662F\u4E00\u4E2A\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 Markdown\u5728\u65B0\u7A97\u53E3\u6253\u5F00 \u6765\u4E66\u5199\u5185\u5BB9\uFF08\u5982\u6587\u6863\u3001\u535A\u5BA2\u7B49\uFF09\uFF0C\u7136\u540E VuePress \u4F1A\u5E2E\u52A9\u4F60\u751F\u6210\u4E00\u4E2A\u9759\u6001\u7F51\u7AD9\u6765\u5C55\u793A\u5B83\u4EEC\u3002</p><p>VuePress \u8BDE\u751F\u7684\u521D\u8877\u662F\u4E3A\u4E86\u652F\u6301 Vue.js \u53CA\u5176\u5B50\u9879\u76EE\u7684\u6587\u6863\u9700\u6C42\uFF0C\u4F46\u662F\u73B0\u5728\u5B83\u5DF2\u7ECF\u5728\u5E2E\u52A9\u5927\u91CF\u7528\u6237\u6784\u5EFA\u4ED6\u4EEC\u7684\u6587\u6863\u3001\u535A\u5BA2\u548C\u5176\u4ED6\u9759\u6001\u7F51\u7AD9\u3002</p><h3 id="\u76EE\u524D\u8BA1\u5212" tabindex="-1"><a class="header-anchor" href="#\u76EE\u524D\u8BA1\u5212" aria-hidden="true">#</a> \u76EE\u524D\u8BA1\u5212</h3><hr><ul><li>\u535A\u5BA2\u662F\u5426\u8F6C\u79FB\u4F7F\u7528VuePress</li><li>\u8FD0\u8425\u90E8\u662F\u5426\u7531hexo\u8F6C\u79FB\u5230VuePress</li></ul><h3 id="\u57FA\u7840\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u6846\u67B6" aria-hidden="true">#</a> \u57FA\u7840\u6846\u67B6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docs
\u251C\u2500 .vuepress \u914D\u7F6E\u6587\u4EF6
\u2502  \u251C\u2500dist \u7F16\u8BD1\u5B8C\u6210\u6587\u4EF6
\u2502  \u251C\u2500public \u57FA\u7840\u6587\u4EF6
\u2502  \u2514\u2500 config.js \u7AD9\u70B9\u914D\u7F6E
\u251C\u2500 README.md \u7AD9\u70B9\u9996\u9875
\u251C\u2500 .gitignore
\u251C\u2500 package.json \u8FD0\u884C\u7F16\u8BD1
\u251C\u2500 guide \u5FEB\u901F\u4E86\u89E3
\u2502  \u251C\u2500 getting-started \u7F51\u7AD9\u7B80\u4ECB
\u2502  \u251C\u2500 domain \u57DF\u540D\u516C\u793A
\u2502  \u2514\u2500 config \u6574\u4F53\u6846\u67B6
\u251C\u2500 documentation \u6587\u6863/\u9879\u76EE\u6587\u6863
\u2502  \u2514\u2500 README.md \u9996\u9875
\u251C\u2500 references \u6846\u67B6
\u2502  \u251C\u2500 README.md \u9996\u9875 
\u2502  \u251C\u2500 \u4EE5\u4E0B\u8BA1\u5212\u4E2D
\u2502  \u251C\u2500 ho.md \u9996\u9875
\u2502  \u251C\u2500 lj.md \u4E86\u89E3
\u2502  \u251C\u2500 wd.md \u6587\u6863
\u2502  \u251C\u2500 tt.md \u56E2\u4F53
\u2502  \u2514\u2500 config \u6574\u4F53\u6846\u67B6
\u251C\u2500 sause \u56E2\u4F53
\u2502  \u251C\u2500 README.md \u9996\u9875
\u2502  \u2514\u2500 about.md \u5173\u4E8E
\u251C\u2500 jz \u6350\u8D60
\u2502  \u2514\u2500 README.md

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="https://api.minblue.cc" alt=""></p><h3 id="\u6350\u8D60" tabindex="-1"><a class="header-anchor" href="#\u6350\u8D60" aria-hidden="true">#</a> \u6350\u8D60</h3><p>\u5982\u679C\u4F60\u89C9\u5F97\u6B64\u7F51\u7AD9\u5BF9\u4F60\u6709\u6240\u5E2E\u52A9\u540C\u65F6\u4F60\u94B1\u5305\u5BBD\u88D5\u4E0D\u59A8\u6350\u8D60\u4E00\u4E0B\uFF01 \u6211\u4F1A\u975E\u5E38\u611F\u8C22\u4F60\uFF01 <img src="https://minblue.cc/images/2022/04/05/f8J.jpg" alt=""></p><p><img src="https://minblue.cc/images/2022/04/05/RNCd.jpg" alt=""></p><p><img src="https://minblue.cc/images/2022/04/05/RRim.jpg" alt=""></p>`,16);function r(i,l){return e}var c=n(a,[["render",r],["__file","index.html.vue"]]);export{c as default};
