(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{548:function(t,s,e){"use strict";e.r(s);var a=e(10),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"select-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-view"}},[t._v("#")]),t._v(" SELECT (View)")]),t._v(" "),e("p",[t._v("Get a record from the specified view. The fields to get have to be already in the view.\nIt produces one or zero static record and costs little time.")]),t._v(" "),e("h2",{attrs:{id:"synopsis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" Synopsis")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" column_name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" field_alias"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" view_name\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" column_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),e("p",[t._v("Selecting from a view is a very fast operation that takes advantage of the concept of a view. So it has a more restricted syntax than selecting from a stream:")]),t._v(" "),e("ul",[e("li",[t._v("The most important difference between "),e("code",[t._v("SELECT")]),t._v(" from a stream and from a view is that the former has an "),e("code",[t._v("EMIT CHANGES")]),t._v(" clause and the latter does not.")]),t._v(" "),e("li",[e("code",[t._v("SELECT")]),t._v(" clause can only contain "),e("code",[t._v("*")]),t._v(" or column names with/without aliases. Other ones such as constants, arithmetical expressions, aggregate/scalar functions, etc. are not allowed. And the column names should be in the "),e("code",[t._v("SELECT")]),t._v(" clause of the query when creating the corresponding view.")]),t._v(" "),e("li",[e("code",[t._v("FROM")]),t._v(" clause can only contain ONE view name. Clauses such as "),e("code",[t._v("JOIN")]),t._v(" are not allowed.")]),t._v(" "),e("li",[e("code",[t._v("WHERE")]),t._v(" clause can only contain ONE conditional expression in the form of "),e("code",[t._v("column_name = constant")]),t._v(". And the "),e("code",[t._v("column_name")]),t._v(" has to be the same as which in the "),e("code",[t._v("GROUP BY")]),t._v(" clause when creating the corresponding view and the "),e("code",[t._v("constant")]),t._v(" has to be a literal whose value is known at compile time, see "),e("RouterLink",{attrs:{to:"/zh/latest/reference/sql/sql-overview.html#literals-constants"}},[t._v("constant")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assume that this query has been executed successfully before")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CREATE VIEW my_view AS SELECT a, b, SUM(a), COUNT(*) AS cnt FROM foo GROUP BY b EMIT CHANGES;")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cnt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" my_view "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);