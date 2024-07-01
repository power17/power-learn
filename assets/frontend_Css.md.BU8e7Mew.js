import{_ as s,o as i,c as a,ah as n}from"./chunks/framework.CrT0yjwC.js";const g=JSON.parse('{"title":"重学css","description":"重学css","frontmatter":{"title":"重学css","author":"power","description":"重学css","date":"2023-09-21T12:46:28.000Z","link":"./frontend/Css","tags":["css"]},"headers":[],"relativePath":"frontend/Css.md","filePath":"frontend/Css.md","lastUpdated":1701961216000}'),l={name:"frontend/Css.md"},t=n(`<h2 id="_1、基础" tabindex="-1">1、基础 <a class="header-anchor" href="#_1、基础" aria-label="Permalink to &quot;1、基础&quot;">​</a></h2><ul><li>普通规则</li><li>特殊规则</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 字符集 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;utf-8&quot;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 引入css */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @import &quot;style.css&quot;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 媒体查询 max-width:1000px */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* animation */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 自定义字体font-family */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">font-face</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="_2、-选择器" tabindex="-1">2、 选择器 <a class="header-anchor" href="#_2、-选择器" aria-label="Permalink to &quot;2、 选择器&quot;">​</a></h2><h3 id="_2、1-简单选择器" tabindex="-1">2、1 简单选择器 <a class="header-anchor" href="#_2、1-简单选择器" aria-label="Permalink to &quot;2、1 简单选择器&quot;">​</a></h3><ul><li>1、类型选择器： div{}</li><li>2、全体选择器：*{}</li><li>3、id 选择器</li><li>4、类选择器</li><li>5、 属性选择器(css3)：属性匹配[att]、精确匹配[att=val]、多种匹配 [att~=valu]、开头匹配[att|=val]</li><li>6、伪类选择器：:link,:visited,:hover,:active,:foucs,:target,:nth-child,</li><li>7、伪元素: ::first-line,::first-letter, ::before, ::after</li><li>8、复合选择器： 空格：后代,&quot;&gt;&quot; 子代， &quot;~&quot;: 后继兄弟（弟弟）, &quot;+&quot;: 直接后继兄弟（弟弟） , &quot;||&quot;: 列选择器</li></ul><h4 id="_2、2-优先级" tabindex="-1">2、2 优先级 <a class="header-anchor" href="#_2、2-优先级" aria-label="Permalink to &quot;2、2 优先级&quot;">​</a></h4><ul><li>css 规则：（a,b,c）id:a, 伪类，class：b，伪元素和标签：c</li><li>行内属性永远高于 css 规则</li><li>!important 优先级高于行内属性</li></ul><h3 id="_2、3-排版" tabindex="-1">2、3 排版 <a class="header-anchor" href="#_2、3-排版" aria-label="Permalink to &quot;2、3 排版&quot;">​</a></h3><ol><li>正常流排版(文字排版需求): block inline inline-block</li></ol><ul><li>inline：text-align， line-hight, vertical-align</li><li>block: white-space, float, positon</li><li>inline-block</li></ul><ol start="2"><li>弹性布局</li><li>网格布局</li></ol><h3 id="_3、css-强大的属性" tabindex="-1">3、css 强大的属性 <a class="header-anchor" href="#_3、css-强大的属性" aria-label="Permalink to &quot;3、css 强大的属性&quot;">​</a></h3><ol><li>background</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* - 直线: */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* - 直径: */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">radial-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* - 角度: */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background: conic-gradient(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#fff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 透明色： */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background: linear-gradient(90deg, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, transparent);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 三角形： */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">background: linear-gradient(45deg, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#f00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 0%, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#f00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 50%, transparent 50%, transparent 100%);</span></span></code></pre></div>`,15),e=[t];function h(p,k,r,d,c,o){return i(),a("div",null,e)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
