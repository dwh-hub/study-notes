(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{443:function(t,s,a){"use strict";a.r(s);var r=a(65),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[t._v("#")]),t._v(" 前端路由")]),t._v(" "),a("h2",{attrs:{id:"什么是前端路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是前端路由"}},[t._v("#")]),t._v(" 什么是前端路由")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("路由是根据不同的 url 地址展示不同的内容或页面")])]),t._v(" "),a("li",[a("p",[t._v("把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。")])])]),t._v(" "),a("h2",{attrs:{id:"前端路由的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端路由的优缺点"}},[t._v("#")]),t._v(" 前端路由的优缺点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优点")]),t._v(" "),a("ul",[a("li",[t._v("用户体验好，不需要每次都从服务器全部获取，快速展现给用户（切换url不会刷新页面）")])])]),t._v(" "),a("li",[a("p",[t._v("缺点")]),t._v(" "),a("ul",[a("li",[t._v("不利于 SEO")]),t._v(" "),a("li",[t._v("使用浏览器的前进，后退键的时候会重新发送请求，没有合理利用缓存(可以keep-alive实现)")]),t._v(" "),a("li",[t._v("单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置")])])])]),t._v(" "),a("h2",{attrs:{id:"hash模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash模式"}},[t._v("#")]),t._v(" hash模式")]),t._v(" "),a("p",[a("strong",[t._v("监听浏览器地址hash值变化，执行相应的js切换网页")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("window.location.hash")]),t._v("属性及窗口的"),a("code",[t._v("onhashchange")]),t._v("事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。")]),t._v(" "),a("p",[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("hash指的是地址中#号以及后面的字符")]),t._v("，也称为散列值。"),a("strong",[t._v("hash也称作锚点")]),t._v("，本身是用来做页面跳转定位的。如http://localhost/index.html#abc，这里的#abc就是hash；")]),t._v(" "),a("li",[t._v("hash是不会随请求发送到服务器端的，所以"),a("strong",[t._v("改变hash，不会重新加载页面")]),t._v("；")]),t._v(" "),a("li",[t._v("监听 window 的 hashchange 事件，当hash改变时，可以通过 location.hash 来获取和设置hash值；")])]),t._v(" "),a("h2",{attrs:{id:"history模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history模式"}},[t._v("#")]),t._v(" history模式")]),t._v(" "),a("p",[t._v("主要通过"),a("code",[t._v("window.history")]),t._v("来实现页面切换，只会改变页面的路径，不会刷新页面。")]),t._v(" "),a("h3",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("History.length")]),t._v("：当前窗口访问过的网址数量（包括当前网页）")]),t._v(" "),a("li",[a("code",[t._v("History.state")]),t._v("：History 堆栈最上层的状态值")])]),t._v(" "),a("h3",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("History.back()")]),t._v("：移动到上一个网址，等同于点击浏览器的后退键。")]),t._v(" "),a("li",[a("code",[t._v("History.forward()")]),t._v("：移动到下一个网址，等同于点击浏览器的前进键。")]),t._v(" "),a("li",[a("code",[t._v("History.go()")]),t._v("：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址。如果不指定参数，默认参数为0，相当于刷新当前页面。")])]),t._v(" "),a("h3",{attrs:{id:"history-pushstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-pushstate"}},[t._v("#")]),t._v(" History.pushState()")]),t._v(" "),a("p",[t._v("该方法用于在历史中添加一条记录。"),a("code",[t._v("pushState()")]),t._v("方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有变化。"),a("strong",[a("code",[t._v("vue-router")]),t._v("的push实现原理")])]),t._v(" "),a("p",[a("code",[t._v("history.pushState(object, title, url)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("object")]),t._v(": 是一个对象，通过 pushState 方法可以将该对象内容传递到新页面中。(路由跳转参数)")]),t._v(" "),a("li",[a("code",[t._v("title")]),t._v(": 指标题，几乎没有浏览器支持该参数，传一个空字符串比较安全。")]),t._v(" "),a("li",[a("code",[t._v("url")]),t._v(": 新的网址，必须与当前页面处在同一个域。不指定的话则为当前的路径，如果设置了一个跨域网址，则会报错。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'page_id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello-world.html'")]),t._v("\n\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"history-replacestate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-replacestate"}},[t._v("#")]),t._v(" History.replaceState()")]),t._v(" "),a("p",[t._v("该方法用来修改 History 对象的当前记录，用法与 pushState() 方法一样。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stateObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stateObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stateObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar2.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"popstate-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#popstate-事件"}},[t._v("#")]),t._v(" popstate 事件")]),t._v(" "),a("p",[a("strong",[t._v("每当 history 对象出现变化时，就会触发 popstate 事件。")])]),t._v(" "),a("ul",[a("li",[t._v("仅仅调用"),a("code",[t._v("pushState()")]),t._v("方法或"),a("code",[t._v("replaceState()")]),t._v("方法 ，并不会触发该事件;")]),t._v(" "),a("li",[t._v("只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用"),a("code",[t._v("History.back()")]),t._v("、"),a("code",[t._v("History.forward()")]),t._v("、"),a("code",[t._v("History.go()")]),t._v("方法时才会触发。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popstate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"history模式nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history模式nginx配置"}},[t._v("#")]),t._v(" history模式nginx配置")]),t._v(" "),a("p",[a("strong",[t._v("history 致命的缺点就是当改变页面地址后，强制刷新浏览器时，（如果后端没有做准备的话）会报错，因为刷新是拿当前地址去请求服务器的，如果服务器中没有相应的响应，会出现 404 页面。")]),t._v(" 因此需要nginx配置下页面转发")]),t._v(" "),a("ul",[a("li",[t._v("根目录")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  try_files $url $url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("子目录")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  try_files $url $url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("your_folder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"nginx-转发时header中信息丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-转发时header中信息丢失"}},[t._v("#")]),t._v(" Nginx 转发时Header中信息丢失")]),t._v(" "),a("p",[t._v("通过Nginx转发后, Header中access_token信息丢失，在转发时，header中带下划线_的属性默认不转发，需要增加配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  underscores_in_headers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);