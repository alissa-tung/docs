(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{538:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-connector"}},[t._v("#")]),t._v(" CREATE CONNECTOR")]),t._v(" "),a("p",[t._v("Create a new connector for fetching data from or writing data to an external system. A connector can be either a source or a sink one. "),a("strong",[t._v("Note that source connector is not supported yet")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" Synopsis")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SOURCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("SINK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CONNECTOR connector_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" EXIST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connector_option "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("connector_name")]),t._v(" is a valid identifier.")]),t._v(" "),a("li",[t._v("There is an optional "),a("code",[t._v("IF NOT EXIST")]),t._v(" configuration to create a connector only if the connector with the same name does not exist.")]),t._v(" "),a("li",[t._v("There is are some connector options in the "),a("code",[t._v("WITH")]),t._v(" clause separated by commas. "),a("code",[t._v("TYPE")]),t._v(" and "),a("code",[t._v("STREAM")]),t._v(" are required to specify the type of a connector and which stream it fetches data from/writes data to. For details, see the following table.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TYPE")]),t._v(" "),a("th",[t._v("Option")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{rowspan:"5"}},[t._v("mysql")]),t._v(" "),a("td",[t._v("host")]),t._v(" "),a("td",[t._v("Host of MySQL server")]),t._v(" "),a("td",[t._v('"127.0.0.1"')])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("Port of MySQL server")]),t._v(" "),a("td",[t._v("3306")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("Username to login MySQL ")]),t._v(" "),a("td",[t._v('"root"')])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("Password to login MySQL")]),t._v(" "),a("td",[t._v('"password"')])]),t._v(" "),a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("Database name to store data from HStreamDB")]),t._v(" "),a("td",[t._v('"mysql"')])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"5"}},[t._v("clickhouse")]),t._v(" "),a("td",[t._v("host")]),t._v(" "),a("td",[t._v("Host of ClickHouse server")]),t._v(" "),a("td",[t._v('"127.0.0.1"')])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v("Port of ClickHouse server")]),t._v(" "),a("td",[t._v("9000")])]),t._v(" "),a("tr",[a("td",[t._v("username")]),t._v(" "),a("td",[t._v("Username to login ClickHouse ")]),t._v(" "),a("td",[t._v('"default"')])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("Password to login ClickHouse")]),t._v(" "),a("td",[t._v('""')])]),t._v(" "),a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("Database name to store data from HStreamDB")]),t._v(" "),a("td",[t._v('"default"')])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" SINK CONNECTOR mysql_conn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" STREAM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);