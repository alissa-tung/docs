(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{551:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"命令行界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行界面"}},[s._v("#")]),s._v(" 命令行界面")]),s._v(" "),t("p",[s._v("每次进入命令行界面时，都会出现下列信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("      __  _________________  _________    __  ___\n     / / / / ___/_  __/ __ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ ____/   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  /  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  /\n    / /_/ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / / / /_/ / __/ / /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" / /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /\n   / __  /___/ // / / _, _/ /___/ ___ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ /  / /\n  /_/ /_//____//_/ /_/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/_____/_/  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/_/  /_/\n\n\nCommand\n  :h                           To show these "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" info\n  :q                           To "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line interface\n  :help "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sql_operation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        To show full usage of sql statement\n\nSQL STATEMENTS:\n  To create a simplest stream:\n    CREATE STREAM stream_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  To create a query "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" all fields from a stream:\n    SELECT * FROM stream_name EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  To insert values to a stream:\n    INSERT INTO stream_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1, field2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" VALUES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[s._v("命令行界面可以处理以下两种指令")]),s._v(" "),t("ol",[t("li",[s._v("以 "),t("code",[s._v(":")]),s._v(" 开头的基本命令")]),s._v(" "),t("li",[s._v("以 "),t("code",[s._v(";")]),s._v(" 结尾的 SQL 语句")])]),s._v(" "),t("h2",{attrs:{id:"基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[s._v("#")]),s._v(" 基本命令")]),s._v(" "),t("p",[s._v("退出当前命令行界面：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :q\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示所有帮助信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示某一种 SQL 语句的帮助信息：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :help CREATE\n\n  CREATE STREAM "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IF EXIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("select_query"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" WITH "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("stream_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  CREATE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SOURCE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("SINK"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" CONNECTOR "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IF NOT EXIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" WITH "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("connector_options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  CREATE VIEW "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("stream_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" AS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("select_query"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("当前仅支持显示以下 SQL 语句的帮助信息: "),t("code",[s._v("CREATE")]),s._v(", "),t("code",[s._v("DROP")]),s._v(", "),t("code",[s._v("SELECT")]),s._v(", "),t("code",[s._v("SHOW")]),s._v(", "),t("code",[s._v("INSERT")]),s._v(", "),t("code",[s._v("TERMINATE")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"sql-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句"}},[s._v("#")]),s._v(" SQL 语句")]),s._v(" "),t("p",[s._v("所有的 HStreamDB 的处理和存储操作都可以通过 SQL 语句来完成")]),s._v(" "),t("h3",{attrs:{id:"stream-相关的语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-相关的语句"}},[s._v("#")]),s._v(" Stream 相关的语句")]),s._v(" "),t("h4",{attrs:{id:"当前有两种方法来创造一个新的-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前有两种方法来创造一个新的-stream"}},[s._v("#")]),s._v(" 当前有两种方法来创造一个新的 Stream")]),s._v(" "),t("ol",[t("li",[s._v("创建一个普通的 Stream：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM stream_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这条命令会创建一个普通的 stream 。用户可以用相应的 SQL 语句从这个 stream 中 "),t("code",[s._v("INSERT")]),s._v(" 插入和 "),t("code",[s._v("SELECT")]),s._v(" 提取数据。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建一个带有 "),t("code",[s._v("SELECT")]),s._v(" 任务的 stream")])]),s._v(" "),t("p",[s._v("在原本的创建语句后面加一个 "),t("code",[s._v("AS")]),s._v(" 和一个 "),t("code",[s._v("SELECT")]),s._v(" 语句，可以创建一个 stream，\n这个 Stream 会根据提供的 "),t("code",[s._v("SELECT")]),s._v(" 语句提取和处理指定 stream 的数据。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM stream_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" demo EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在上述的例子中，stream_name 会提取所有写入 demo 的数据。")]),s._v(" "),t("h4",{attrs:{id:"创建完一个-stream-之后-我们可以往这个-stream-中-写入-insert-数据。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建完一个-stream-之后-我们可以往这个-stream-中-写入-insert-数据。"}},[s._v("#")]),s._v(" 创建完一个 stream 之后，我们可以往这个 stream 中 写入（INSERT）数据。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" stream_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当前并没有限制可以插入的字段数量，也没有值的类型。但是，你确实需要确保字段的数量和后面值的数量是一致的。")]),s._v(" "),t("h4",{attrs:{id:"从一个-stream-中-select-数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从一个-stream-中-select-数据"}},[s._v("#")]),s._v(" 从一个 stream 中 SELECT 数据")]),s._v(" "),t("p",[s._v("当我们有一个 stream 时，我们可以实时地从这个 stream 中查询数据，\n这个查询任务会把所有在这个查询任务运行开始后写入的数据进行过滤和处理，\n并把符合条件的结果打印出来。")]),s._v(" "),t("p",[s._v("比如，我们可以选择从 stream 中提取一个字段的值。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这句 SQL 仅会 SELECT demo 中字段 "),t("code",[s._v("a")]),s._v(" 的值。")]),s._v(" "),t("h4",{attrs:{id:"终止一个查询任务-terminate-a-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止一个查询任务-terminate-a-query"}},[s._v("#")]),s._v(" 终止一个查询任务（TERMINATE a query）")]),s._v(" "),t("p",[s._v("当我们有一个查询任务的 ID 的时候，我们就可以终止这个任务：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("TERMINATE QUERY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当然，我们也可以 "),t("code",[s._v("SHOW")]),s._v(" 出所有的查询任务信息：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" QUERIES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("仅作展示用的输出结果：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("╭─────────────────┬────────────────┬────────────────┬─────────────────╮\n│     queryId     │   queryInfo    │ queryInfoExtra │   queryStatus   │\n╞═════════════════╪════════════════╪════════════════╪═════════════════╡\n│                 │ createdTime:   │                │                 │\n│                 │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".626143326e9  │                │ status:         │\n│ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("810932205589156")]),s._v(" │ sqlStatement:  │ PlainQuery:    │ Running         │\n│                 │ SELECT  * FROM │ foo            │ timeCheckpoint: │\n│                 │ foo       EMIT │                │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".626143717e9   │\n│                 │ CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       │                │                 │\n╰─────────────────┴────────────────┴────────────────┴─────────────────╯\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("找到你想要终止的任务，确认任务的状态还未被终止，把查询任务的 ID 传给 "),t("code",[s._v("TERMINATE QUERY")]),s._v("。")]),s._v(" "),t("p",[s._v("或者，你也可以选择终止所有 "),t("code",[s._v("TERMINATE ALL")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"删除一个-stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除一个-stream"}},[s._v("#")]),s._v(" 删除一个 stream")]),s._v(" "),t("p",[t("code",[s._v("DROP STREAM <Stream_name> ;")]),s._v(" 是删除操作，它不仅会删除所指定的 stream，还会终止所有依赖于这个 stream 的查询任务。")]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果 demo 被删除，上述的查询任务就会被终止：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" STREAM demo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当试图删除一个不存在的 stream 时，cli 会打印出错误信息；在 stream_name 后面加上 "),t("code",[s._v("IF EXISTS")]),s._v(", 这个错误将不会出现。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" STREAM demo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"show-所有的-streams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-所有的-streams"}},[s._v("#")]),s._v(" SHOW 所有的 streams")]),s._v(" "),t("p",[s._v("通过使用 "),t("code",[s._v("SHOW STREAMS")]),s._v("命令可以显示所有当前存在 stream 。")]),s._v(" "),t("h3",{attrs:{id:"物化视图-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物化视图-view"}},[s._v("#")]),s._v(" 物化视图 （View）")]),s._v(" "),t("p",[s._v("视图是 streams 中一些被指定的数据的投射。举例来说，")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" v_demo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" a EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上述命令将创建一个视图，它记录了当前具有相同值 的"),t("code",[s._v("a")]),s._v(" 的总和 (由于 group by 的缘故，只有 "),t("code",[s._v("a")]),s._v(" 的值相同时才会被分归到一起)。")]),s._v(" "),t("p",[s._v("对视图的操作与对流的操作非常相似。但是，我们不能使用在 stream 上执行的"),t("code",[s._v("SELECT ... EMIT CHANGES")]),s._v("。\n因为视图是静态的，没有任何变化需要 EMIT。相对的，比如说\n我们从视图中 SELECT：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" v_demo "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上述命令会 SELECT 当 a = 2 时，我们记录的所有视图，即为所有当 a = 2 时，\n所有 a 的总和，可以理解为：“a = 2的次数” * “2”。")]),s._v(" "),t("p",[s._v("假设我们想创建一个视图记录所有 a 的总和，我们可以：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" STREAM demo2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" v_demo2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" b EMIT CHANGES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" demo2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);