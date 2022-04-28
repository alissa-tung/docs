(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{534:function(t,e,s){"use strict";s.r(e);var a=s(10),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-use-hstream-connectors-with-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-hstream-connectors-with-mysql"}},[t._v("#")]),t._v(" How to use HStream connectors with MySQL")]),t._v(" "),s("p",[t._v("This tutorial describes how to use HStream connectors.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("Up to the present, we only provide sink connectors writing to MySQL or ClickHouse. "),s("strong",[t._v("The recommended verion of MySQL is 5.7")]),t._v(" and MySQL versions after 8.0 are not supported yet.")])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("Make sure you have started an HStreamDB server and a client connected to the\nserver. You also need MySQL or ClickHouse service available in order to dump\ndata to the databases. In this tutorial, I will use HStream CLI client and MySQL\ndatabase as the example. To better manipulate data in MySQL, I will use MyCLI as\nthe interface but any alternatives should work similarly. Please replace the\nhost address and port number with your own configuration.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mycli --host 127.0.0.1 --port 3306 --user root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("I will be using a database called "),s("code",[t._v("hstreamdb")]),t._v(" in MySQL and a table called "),s("code",[t._v("hstreamtbl")]),t._v(" with two columns of integers in the database.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" hstreamdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USE")]),t._v(" hstreamdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" hstreamtbl "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temperature "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" humidity "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"create-built-in-connectors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-built-in-connectors"}},[t._v("#")]),t._v(" Create Built-In Connectors")]),t._v(" "),s("p",[t._v("We first create a source stream called "),s("code",[t._v("hstreamsrc")]),t._v(" in our server via an HStream client.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" STREAM hstreamsrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Then, let's take a look at the usage of the command to create a connector.")]),t._v(" "),s("h3",{attrs:{id:"synopsis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[t._v("#")]),t._v(" Synopsis")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" SINK CONNECTOR connector_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" EXIST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connector_options "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Connector options include:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Option")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description or default value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type*")]),t._v(" "),s("td",[t._v("Identifier")]),t._v(" "),s("td",[t._v("["),s("code",[t._v("mysql")]),t._v(" | "),s("code",[t._v("clickhouse")]),t._v("]")])]),t._v(" "),s("tr",[s("td",[t._v("stream*")]),t._v(" "),s("td",[t._v("Identifier")]),t._v(" "),s("td",[t._v("Name of the source stream")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"root"')])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"password"')])]),t._v(" "),s("tr",[s("td",[t._v("host")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"127.0.0.1"')])]),t._v(" "),s("tr",[s("td",[t._v("port*")]),t._v(" "),s("td",[t._v("Int")]),t._v(" "),s("td",[t._v("Port number for connection")])]),t._v(" "),s("tr",[s("td",[t._v("database")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v('"mysql"')])]),t._v(" "),s("tr",[s("td",[t._v("table")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Name of the table in the database")])])])]),t._v(" "),s("p",[t._v("Options with a * symbol are required and others are optional. The "),s("code",[t._v("type")]),t._v(" option has to be either "),s("code",[t._v("mysql")]),t._v(" or "),s("code",[t._v("clickhouse")]),t._v(" for now and the default value listed above are specific to the MySQL option. If the name of table is omitted, the connector will write the data to a table with the same name as the source stream.")]),t._v(" "),s("p",[t._v("Back to our example, we will use the following command to create a sink connector called "),s("code",[t._v("mysql_conn")]),t._v(" that subsribes to the "),s("code",[t._v("hstreamsrc")]),t._v(" stream.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" SINK CONNECTOR mysql_conn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hstreamsrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hstreamdb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hstreamtbl"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("You can use the following command to check the status of a connector.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" CONNECTORS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("One of the following states is assigned to the connectors:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("state")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Creating")]),t._v(" "),s("td",[t._v("The server has started to process the request")])]),t._v(" "),s("tr",[s("td",[t._v("Created")]),t._v(" "),s("td",[t._v("The connection has been established but it has not started to process the data")])]),t._v(" "),s("tr",[s("td",[t._v("CreationAbort")]),t._v(" "),s("td",[t._v("The process of creating the connection failed and it is frozon")])]),t._v(" "),s("tr",[s("td",[t._v("Running")]),t._v(" "),s("td",[t._v("The connector is ready to process requests")])]),t._v(" "),s("tr",[s("td",[t._v("ExecutionAbort")]),t._v(" "),s("td",[t._v("The connector failed to execute a SQL statement and it is frozen")])]),t._v(" "),s("tr",[s("td",[t._v("Terminate")]),t._v(" "),s("td",[t._v("The connector is frozen by a user request")])])])]),t._v(" "),s("p",[t._v("Please wait for it to finish setting up if the state of the connector is "),s("code",[t._v("Creating")]),t._v(" or "),s("code",[t._v("Created")]),t._v(". After the connector has been successfully initialized, its state will be set to "),s("code",[t._v("Running")]),t._v(" until it is killed per client request or a MySQL error occurs. A connector is not working if its state is "),s("code",[t._v("CreationAbort")]),t._v(", "),s("code",[t._v("ExecutionAbort")]),t._v(", or "),s("code",[t._v("Terminate")]),t._v(". You can restart an aborted or terminated connector (in the future). You may also abandon connectors by using")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" CONNECTOR connector_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"check-the-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-the-result"}},[t._v("#")]),t._v(" Check the result")]),t._v(" "),s("p",[t._v("Once the connector has been set up, the data inserted into the source stream thereafter will be written into the connected external system in a very short time gap.")]),t._v(" "),s("p",[t._v("For example, we can insert some data to the source stream by")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" hstreamsrc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" humidity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("84")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" hstreamsrc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" humidity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("83")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" hstreamsrc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" humidity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("82")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Please make sure that the data inserted into the source stream follow the schema of the table in the database. Otherwise, a MySQL error will happen and the connection is broken subsequently.")]),t._v(" "),s("p",[t._v("After inserting the data into the source stream, you should be able to view the data on MySQL end,")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" hstreamtbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("ul",[s("li",[t._v("What happened if the status of the connector is "),s("code",[t._v("CreationAbort")]),t._v("?")])]),t._v(" "),s("p",[t._v("This is caused by an error occured when the server tried to connect to the MySQL service. Please double check that you have passed the correct configuration options, especially the port number, and that the database has been created. Please drop the connector before you try again.")]),t._v(" "),s("ul",[s("li",[t._v("What happened if the status of the connector is "),s("code",[t._v("ExecutionAbort")]),t._v("?")])]),t._v(" "),s("p",[t._v("This is caused by an error occured in the execution of a MySQL command, e.g. the table does not exist in the database or the data fed into the source stream do not follow the table schema. You could restart the connection (in the future) or drop it.")]),t._v(" "),s("ul",[s("li",[t._v("What happened if the status of the connector is "),s("code",[t._v("Terminate")]),t._v("?")])]),t._v(" "),s("p",[t._v("It means a client has requested that the connector be terminated. You could restart the connection (in the future) or drop it in this circumstance.")])])}),[],!1,null,null,null);e.default=n.exports}}]);