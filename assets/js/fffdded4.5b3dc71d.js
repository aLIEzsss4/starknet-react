"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[537],{8044:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(8855);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=u(n),d=a,f=k["".concat(c,".").concat(d)]||k[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(1528),a=n(2854),o=(n(8855),n(8044)),i=["components"],s={sidebar_position:5},c="useStarknetInvoke",u={unversionedId:"hooks/invoke",id:"hooks/invoke",title:"useStarknetInvoke",description:"Hook to create a function that invokes a contract method and track the transaction status.",source:"@site/docs/hooks/invoke.md",sourceDirName:"hooks",slug:"/hooks/invoke",permalink:"/starknet-react/hooks/invoke",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/hooks/invoke.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useStarknetCall",permalink:"/starknet-react/hooks/call"},next:{title:"useStarknetTransactionManager",permalink:"/starknet-react/hooks/transaction"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2}],k={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usestarknetinvoke"},"useStarknetInvoke"),(0,o.kt)("p",null,"Hook to create a function that invokes a contract method and track the transaction status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useStarknetInvoke } from '@starknet-react/core'\n\nconst { data, loading, error, reset, invoke } = useStarknetInvoke({ contract, method })\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  contract?: ContractInterface\n  method?: string\n}\n")),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  data?: string\n  loading: boolean\n  error?: string\n  reset: () => void\n  invoke: ({ args, overrides, metadata }: InvokeArgs<T>) => Promise<AddTransactionResponse | undefined>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is the transaction hash and ",(0,o.kt)("inlineCode",{parentName:"p"},"AddTransactionResponse")," is from starknet.js."))}d.isMDXComponent=!0}}]);