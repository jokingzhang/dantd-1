(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1268:function(n,a){n.exports={content:["article",["p",["code","dantd"]," 和 ",["code","antd"],"保持一致，默认文案是英文，如果需要使用其他语言，可以参考下面的方案。"],["h2","IntlProvider"],["pre",{lang:null,highlighted:'import {IntlProvider as DantdIntlProvider} from <span class="token string">\'dantd\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> language <span class="token operator">=</span> isEn <span class="token operator">?</span> <span class="token string">\'en-US\'</span> <span class="token punctuation">:</span> <span class="token string">\'zh-CN\'</span><span class="token comment" spellcheck="true">;</span>\n\nreturn <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>DantdIntlProvider locale<span class="token operator">=</span>{language}<span class="token operator">></span>\n    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>DantdIntlProvider<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import {IntlProvider as DantdIntlProvider} from 'dantd';\n\nconst language = isEn ? 'en-US' : 'zh-CN';\n\nreturn (\n  <DantdIntlProvider locale={language}>\n    <App />\n  </DantdIntlProvider>\n);"]],["p","目前支持以下语言："],["table",["thead",["tr",["th","语言"],["th","key"]]],["tbody",["tr",["td","英文（默认）"],["td","en-US"]],["tr",["td","中文"],["td","zh-CN"]]]]],meta:{order:3,title:"国际化",filename:"docs/i18n.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#IntlProvider",title:"IntlProvider"},"IntlProvider"]]]}}}]);