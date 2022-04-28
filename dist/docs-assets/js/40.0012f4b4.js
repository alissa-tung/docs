(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{497:function(e,s,t){"use strict";t.r(s);var a=t(10),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-stream"}},[e._v("#")]),e._v(" CREATE STREAM")]),e._v(" "),t("p",[e._v("Create a new hstream stream with the given name. An exception will be thrown if a stream with the same name already exists.")]),e._v(" "),t("h2",{attrs:{id:"synopsis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" STREAM stream_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" select_query "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WITH")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("REPLICATE "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("stream_name")]),e._v(" is a valid identifier.")]),e._v(" "),t("li",[t("code",[e._v("select_query")]),e._v(" is an optional "),t("code",[e._v("SELECT")]),e._v(" (Stream) query. For more information, see "),t("code",[e._v("SELECT")]),e._v(" section. When "),t("code",[e._v("<select_query>")]),e._v(" is specified, the created stream will be filled with records from the "),t("code",[e._v("SELECT")]),e._v(" query continuously. Otherwise, the stream will only be created and kept empty.")]),e._v(" "),t("li",[t("code",[e._v("WITH")]),e._v(" clause contains some stream options. Only "),t("code",[e._v("REPLICATE")]),e._v(" option is supported now, which represents the replication factor of the stream. If it is not specified, the replication factor will be set to default value.")])]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" STREAM foo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" STREAM abnormal_weather "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" weather "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" humidity "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(" EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);