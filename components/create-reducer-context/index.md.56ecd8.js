(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1241:function(n,s){n.exports={content:["article",["h2","何时使用"],["p","react上下文 hook 的工厂，除了状态将在提供者中的所有组件之间共享之外，它的行为与react的useReducer一样。"],["p","这允许您拥有任何组件都可以轻松更新的共享状态。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> createReducerContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dantd\'</span><span class="token punctuation">;</span>\n\ntype Action <span class="token operator">=</span> <span class="token string">\'increment\'</span> <span class="token operator">|</span> <span class="token string">\'decrement\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> reducer <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">:</span> number<span class="token punctuation">,</span> action<span class="token punctuation">:</span> Action<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'increment\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'decrement\'</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">[</span>useSharedCounter<span class="token punctuation">,</span> SharedCounterProvider<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createReducerContext</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ComponentA <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSharedCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n      Component A <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'decrement\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">-</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">+</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ComponentB <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSharedCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\n      Component B <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'decrement\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">-</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n      <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token operator">+</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SharedCounterProvider</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Those two counters share the same value<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentA</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentB</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SharedCounterProvider</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import { createReducerContext } from 'dantd';\n\ntype Action = 'increment' | 'decrement';\n\nconst reducer = (state: number, action: Action) => {\n  switch (action) {\n    case 'increment':\n      return state + 1;\n    case 'decrement':\n      return state - 1;\n    default:\n      throw new Error();\n  }\n};\n\nconst [useSharedCounter, SharedCounterProvider] = createReducerContext(reducer, 0);\n\nconst ComponentA = () => {\n  const [count, dispatch] = useSharedCounter();\n  return (\n    <p>\n      Component A &nbsp;\n      <button type=\"button\" onClick={() => dispatch('decrement')}>\n        -\n      </button>\n      &nbsp;{count}&nbsp;\n      <button type=\"button\" onClick={() => dispatch('increment')}>\n        +\n      </button>\n    </p>\n  );\n};\n\nconst ComponentB = () => {\n  const [count, dispatch] = useSharedCounter();\n  return (\n    <p>\n      Component B &nbsp;\n      <button type=\"button\" onClick={() => dispatch('decrement')}>\n        -\n      </button>\n      &nbsp;{count}&nbsp;\n      <button type=\"button\" onClick={() => dispatch('increment')}>\n        +\n      </button>\n    </p>\n  );\n};\n\nconst Demo = () => {\n  return (\n    <SharedCounterProvider>\n      <p>Those two counters share the same value.</p>\n      <ComponentA />\n      <ComponentB />\n    </SharedCounterProvider>\n  );\n};"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>useSharedState<span class="token punctuation">,</span> SharedStateProvider<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">createReducerContext</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// In wrapper</span>\n<span class="token keyword">const</span> Wrapper <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token comment" spellcheck="true">// You can override the initial state for each Provider</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SharedStateProvider</span> <span class="token attr-name">initialState</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>overrideInitialState<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span> children <span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SharedStateProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">// In a component</span>\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>sharedState<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSharedState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span>'},["code","const [useSharedState, SharedStateProvider] = createReducerContext(reducer, initialState);\n\n// In wrapper\nconst Wrapper = ({ children }) => (\n  // You can override the initial state for each Provider\n  <SharedStateProvider initialState={overrideInitialState}>\n    { children }\n  </SharedStateProvider>\n)\n\n// In a component\nconst Component = () => {\n  const [sharedState, dispatch] = useSharedState();\n\n  // ...\n}"]],["p","copy 自 ",["a",{title:null,href:"https://github.com/streamich/react-use/blob/master/docs/createReducerContext.md"},"react-use"]]],meta:{category:"自定义Hook",cols:1,type:"工厂",title:"createReducerContext",subtitle:"全局Reducer工厂",filename:"components/create-reducer-context/index.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]]]}}}]);