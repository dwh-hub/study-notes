(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{451:function(e,v,t){"use strict";t.r(v);var _=t(65),r=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"模板编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板编译"}},[e._v("#")]),e._v(" 模板编译")]),e._v(" "),t("h2",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),t("p",[e._v("模板到真实节点的过程")]),e._v(" "),t("ol",[t("li",[e._v("模板解析成 "),t("code",[e._v("AST")]),e._v(" 树;（AST树包含指令，如v-if等，不会进行diff算法）")]),e._v(" "),t("li",[t("code",[e._v("AST")]),e._v(" 树生成可执行的 "),t("code",[e._v("render")]),e._v(" 函数;（render函数不包含指令）")]),e._v(" "),t("li",[t("code",[e._v("render")]),e._v(" 函数转换为 "),t("code",[e._v("Vnode")]),e._v(" 对象;")]),e._v(" "),t("li",[e._v("根据 "),t("code",[e._v("Vnode")]),e._v(" 对象生成真实的 "),t("code",[e._v("Dom")]),e._v(" 节点。")])]),e._v(" "),t("h3",{attrs:{id:"ast-抽象语法树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ast-抽象语法树"}},[e._v("#")]),e._v(" AST(抽象语法树)")]),e._v(" "),t("p",[e._v("以树状的形式表示源代码的语法结构，应用场景：ESLint、Babel、webpack")]),e._v(" "),t("h2",{attrs:{id:"ast树的解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ast树的解析"}},[e._v("#")]),e._v(" AST树的解析")]),e._v(" "),t("p",[e._v("vue模板属性由两部分组成，一部分是指令，另一部分是普通html标签属性。而指令中又将 "),t("code",[e._v("v-on，v-bind")]),e._v("做了特殊处理。"),t("br"),e._v(" "),t("code",[e._v("AST")]),e._v(" 产生阶段对事件指令 "),t("code",[e._v("v-on")]),e._v(" 的处理是为"),t("code",[e._v("AST")]),e._v("树添加"),t("code",[e._v("events")]),e._v("属性(用于"),t("code",[e._v("v-model")]),e._v(")。类似的，普通指令会在"),t("code",[e._v("AST")]),e._v("树上添加"),t("code",[e._v("directives")]),e._v("属性")]),e._v(" "),t("h2",{attrs:{id:"render函数生成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render函数生成"}},[e._v("#")]),e._v(" render函数生成")])])}),[],!1,null,null,null);v.default=r.exports}}]);