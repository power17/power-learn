import{_ as t,o as l,c as e,j as i,a as n,t as a,ah as h}from"./chunks/framework.CrT0yjwC.js";const q=JSON.parse('{"title":"vscode调试","description":"记录vscode配置","frontmatter":{"title":"vscode调试","author":"power","description":"记录vscode配置","date":"2023-09-27T08:38:28.000Z","link":"./mac/VscodeDebugger","tags":["mac"]},"headers":[],"relativePath":"mac/VscodeDebugger.md","filePath":"mac/VscodeDebugger.md","lastUpdated":1698124715000}'),p={name:"mac/VscodeDebugger.md"},o={id:"frontmatter-title",tabindex:"-1"},k=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),r=h(`<h1 id="调试-nest" tabindex="-1">调试 nest <a class="header-anchor" href="#调试-nest" aria-label="Permalink to &quot;调试 nest&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;configurations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nest debug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;launch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;runtimeArgs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;run-script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;runtimeExecutable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;skipFiles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;node_internals&gt;/**&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;integratedTerminal&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span></code></pre></div><h1 id="调试-网页" tabindex="-1">调试 网页 <a class="header-anchor" href="#调试-网页" aria-label="Permalink to &quot;调试 网页&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Launch Chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;launch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:5173&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;webRoot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${workspaceFolder}&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h1 id="vscode-插件" tabindex="-1">vscode 插件 <a class="header-anchor" href="#vscode-插件" aria-label="Permalink to &quot;vscode 插件&quot;">​</a></h1><ul><li>YAML</li><li>vue.js Extension Pack</li><li>Vue vscode snippets</li><li>vue 3 snippets</li><li>vscode-styled-components</li><li>vite</li><li>vite Runner</li><li>typescript toolbox</li><li>typescript importer</li><li>typescript Extension Pack</li><li>typescript debugger</li><li>turbo console.log</li><li>stylelint</li><li>scss intellisense</li><li>scss formatter</li><li>scss everywhere</li><li>sass</li><li>prettierConfig for vscode</li><li>prettier-code formatter</li><li>path intellisense</li><li>paste json as code</li><li>node.js exec</li><li>node.js Modules intellisense</li><li>npm intellisense</li><li>move Ts</li><li>material icon theme</li><li>live server</li><li>licenser</li><li>json2ts</li><li>js jsx snippets</li><li>javascript booster</li><li>intellisense for css class name</li><li>intellicode</li><li>insert data string</li><li>ignore files</li><li>html css support</li><li>gitignore</li><li>formatting toggle</li><li>eslint</li><li>dotenv</li><li>darcula theme</li><li>commit tagger</li><li>codeium</li><li>cmake tools</li><li>cmake</li><li>choose alicense</li><li>better comments</li><li>babel javascript</li><li>auto rename tag</li><li>auto import</li><li>auto complete tag</li><li>auto close tag</li><li>volar</li><li>code runner</li></ul>`,6);function E(s,d,c,u,g,F){return l(),e("div",null,[i("h1",o,[n(a(s.$frontmatter.title)+" ",1),k]),i("ul",null,[i("li",null,a(s.$frontmatter.description),1)]),r])}const m=t(p,[["render",E]]);export{q as __pageData,m as default};
