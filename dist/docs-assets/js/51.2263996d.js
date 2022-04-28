(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{509:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[s._v("#")]),s._v(" CLI")]),s._v(" "),e("p",[s._v("Once you entered CLI, you can see the following help info:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("      __  _________________  _________    __  ___\n     / / / / ___/_  __/ __ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ ____/   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  /  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  /\n    / /_/ /"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / / / /_/ / __/ / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /\n   / __  /___/ // / / _, _/ /___/ ___ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ /  / /\n  /_/ /_//____//_/ /_/ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/_____/_/  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/_/  /_/\n\n\nCommand\n  :h                           To show these "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" info\n  :q                           To "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line interface\n  :help "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sql_operation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        To show full usage of sql statement\n\nSQL STATEMENTS:\n  To create a simplest stream:\n    CREATE STREAM stream_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  To create a query "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" all fields from a stream:\n    SELECT * FROM stream_name EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  To insert values to a stream:\n    INSERT INTO stream_name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1, field2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" VALUES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("There are two kinds of commands:")]),s._v(" "),e("ol",[e("li",[s._v("Basic Cli Operations, start with "),e("code",[s._v(":")])]),s._v(" "),e("li",[s._v("SQL statements end with "),e("code",[s._v(";")])])]),s._v(" "),e("h2",{attrs:{id:"basic-cli-operations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-cli-operations"}},[s._v("#")]),s._v(" Basic CLI Operations")]),s._v(" "),e("p",[s._v("To Quit current cli session:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :q\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("To print out help info overview:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :h\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("To show specific usage of some SQL statements:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :help CREATE\n\n  CREATE STREAM "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IF EXIST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AS "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("select_query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" WITH "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("stream_options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  CREATE "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SOURCE"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("SINK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" CONNECTOR "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IF NOT EXIST"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" WITH "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("connector_options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  CREATE VIEW "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" AS "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("select_query"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("Available SQL operations include: "),e("code",[s._v("CREATE")]),s._v(", "),e("code",[s._v("DROP")]),s._v(", "),e("code",[s._v("SELECT")]),s._v(", "),e("code",[s._v("SHOW")]),s._v(", "),e("code",[s._v("INSERT")]),s._v(",\n"),e("code",[s._v("TERMINATE")]),s._v(".")]),s._v(" "),e("h2",{attrs:{id:"sql-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-statements"}},[s._v("#")]),s._v(" SQL Statements")]),s._v(" "),e("p",[s._v("All the processing and storage operations are done via SQL statements.")]),s._v(" "),e("h3",{attrs:{id:"stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[s._v("#")]),s._v(" Stream")]),s._v(" "),e("h4",{attrs:{id:"there-are-two-ways-to-create-a-new-data-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#there-are-two-ways-to-create-a-new-data-stream"}},[s._v("#")]),s._v(" There are two ways to create a new data stream.")]),s._v(" "),e("ol",[e("li",[s._v("Create an ordinary stream:")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM stream_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This will create a stream with no particular function. You can "),e("code",[s._v("SELECT")]),s._v(" data from\nthe stream and "),e("code",[s._v("INSERT")]),s._v(" to via corresponding SQL statement.")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("Create a stream, and this stream will also run a query to select specified\ndata from some other stream.")])]),s._v(" "),e("p",[s._v("Adding a Select statement after Create with a keyword "),e("code",[s._v("AS")]),s._v(" can create a stream\nwill create a stream that processes data from another stream.")]),s._v(" "),e("p",[s._v("For example:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM stream_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" demo EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("In the example above, by adding an "),e("code",[s._v("AS")]),s._v(" followed by a "),e("code",[s._v("SELECT")]),s._v(" statement to the\nnormal "),e("code",[s._v("CREATE")]),s._v(" operation, it will create a stream that will also select all\nthe data from the "),e("code",[s._v("demo")]),s._v(".")]),s._v(" "),e("h4",{attrs:{id:"after-creating-the-stream-we-can-insert-values-into-the-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after-creating-the-stream-we-can-insert-values-into-the-stream"}},[s._v("#")]),s._v(" After Creating the stream, we can insert values into the stream.")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" stream_name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("There is no restriction on the number of fields a query can insert. Also, the\ntype of value is not restricted. However, you need to make sure that the\nnumber of fields and the number of values are aligned.")]),s._v(" "),e("h4",{attrs:{id:"select-data-from-a-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-data-from-a-stream"}},[s._v("#")]),s._v(" Select data from a stream")]),s._v(" "),e("p",[s._v("After creating a stream, we can select data from the stream in real-time. All the\ndata inserted after the select query is created will be printed out when the\ninsert operation happens. Select supports real-time processing on the data\ninserted into the stream.")]),s._v(" "),e("p",[s._v("For example, we can choose the field and filter the data selected from the\nstream.")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This will only select field "),e("code",[s._v("a")]),s._v(" from stream demo.")]),s._v(" "),e("h4",{attrs:{id:"terminate-a-query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terminate-a-query"}},[s._v("#")]),s._v(" Terminate a query")]),s._v(" "),e("p",[s._v("A query can be terminated if we know the query id:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("TERMINATE QUERY "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("We can get all the query information by command "),e("code",[s._v("SHOW")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" QUERIES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("output just for demonstration :")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("╭─────────────────┬────────────────┬────────────────┬─────────────────╮\n│     queryId     │   queryInfo    │ queryInfoExtra │   queryStatus   │\n╞═════════════════╪════════════════╪════════════════╪═════════════════╡\n│                 │ createdTime:   │                │                 │\n│                 │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".626143326e9  │                │ status:         │\n│ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("810932205589156")]),s._v(" │ sqlStatement:  │ PlainQuery:    │ Running         │\n│                 │ SELECT  * FROM │ foo            │ timeCheckpoint: │\n│                 │ foo       EMIT │                │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".626143717e9   │\n│                 │ CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       │                │                 │\n╰─────────────────┴────────────────┴────────────────┴─────────────────╯\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Find the query to terminate, make sure is id not already terminated, and pass\nthe query id to "),e("code",[s._v("TERMINATE QUERY")])]),s._v(" "),e("p",[s._v("Or under some circumstances, you can choose to "),e("code",[s._v("TERMINATE ALL ;")]),s._v(".")]),s._v(" "),e("h4",{attrs:{id:"delete-a-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-a-stream"}},[s._v("#")]),s._v(" Delete a stream")]),s._v(" "),e("p",[s._v("Deletion command is "),e("code",[s._v("DROP STREAM <Stream_name> ;")]),s._v(", which deletes a stream, and\nterminate all the queries that depend on the stream.")]),s._v(" "),e("p",[s._v("For example:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("will be terminated if the stream demo is deleted;")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" STREAM demo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("If you try to delete a stream that does not exist, an error message will be\nreturned. To turn it off, you can use add "),e("code",[s._v("IF EXISTS")]),s._v(" after the stream_name:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" STREAM demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"show-all-streams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-all-streams"}},[s._v("#")]),s._v(" Show all streams")]),s._v(" "),e("p",[s._v("You can also show all streams by using the "),e("code",[s._v("SHOW STREAMS")]),s._v(" command.")]),s._v(" "),e("h3",{attrs:{id:"view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[s._v("#")]),s._v(" View")]),s._v(" "),e("p",[s._v("View is a projection of specified data from streams. For example,")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" v_demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" a EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("the above command will create a view that keeps track of the sum of "),e("code",[s._v("a")]),s._v(" (which\nhave the same values, because of groupby) and have the same value from the point\nthis query is executed.")]),s._v(" "),e("p",[s._v("The operations on view are very similar to those on streams.")]),s._v(" "),e("p",[s._v("Except we can not use "),e("code",[s._v("SELECT ... EMIT CHANGES")]),s._v(" performed on streams because a\nview is static and there are no changes to emit. Instead, for example, we select\nfrom view with:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" v_demo "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This will print the sum of "),e("code",[s._v("a")]),s._v(" when "),e("code",[s._v("a")]),s._v(" = 1.")]),s._v(" "),e("p",[s._v("If we want to create a view to record the sum of "),e("code",[s._v("a")]),s._v("s, we can:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM demo2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" b "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" v_demo2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" b EMIT CHANGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" b "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);