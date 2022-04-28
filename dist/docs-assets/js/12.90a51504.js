(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{469:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hstream-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hstream-admin"}},[s._v("#")]),s._v(" HStream Admin")]),s._v(" "),e("p",[s._v("We can run the following to use hstream admin:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker run -it --rm --name some-hstream-admin --network "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" hstreamdb/hstream:v0.7.1 hadmin --help\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" HStream Admin CLI "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nUsage: hadmin COMMAND\n\nAvailable options:\n  -h,--help                Show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" text\n\nAvailable commands:\n  server                   Admin "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  store                    Internal store admin "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("For the ease of illustration, we execute an interactive bash shell in the\nhstream container to use hstream admin,")]),s._v(" "),e("p",[s._v("The following example usage is based on the cluster started in\n"),e("RouterLink",{attrs:{to:"/en/latest/start/quickstart-with-docker.html"}},[s._v("quick start")]),s._v(", please adjust\ncorrespondingly.")],1),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it docker_hserver0_1 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n$ hadmin server --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Usage: hadmin server [--host SERVER-HOST] [--port INT]\n                     [--log-level [critical|fatal|warning|info|debug]]\n                     (COMMAND | COMMAND)\n  Admin command\n\nAvailable options:\n  --host SERVER-HOST       server host admin value (default: "127.0.0.1")\n  --port INT               server admin port value (default: 6570)\n  --log-level [critical|fatal|warning|info|debug]\n                           log level (default: info)\n  -h,--help                Show this help text\n\nAvailable commands:\n  sql                      Start an interactive SQL shell\n  stats                    Get the stats of an operation on a stream\n  stream                   Stream command\n  sub                      Subscription command\n  view                     View command\n  status                   Get the status of the HServer cluster\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"check-cluster-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-cluster-status"}},[s._v("#")]),s._v(" Check Cluster status")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server status\n+---------+---------+-------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node_id "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  state  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      address      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+---------+-------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Running "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.4:6570 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Running "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.5:6572 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------+---------+-------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"resource-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resource-management"}},[s._v("#")]),s._v(" Resource Management")]),s._v(" "),e("h3",{attrs:{id:"streams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[s._v("#")]),s._v(" Streams")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server stream create --name s1\nOK\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server stream list\n+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" replication_property "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+----------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" s1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" node:3               "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+----------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"subscriptions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscriptions"}},[s._v("#")]),s._v(" Subscriptions")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server sub create --name sub1 --stream s1\nOK\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hadmin server sub list\n+------+-------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stream_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+-------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sub1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" s1          "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------+-------------+---------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"hsteam-stats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hsteam-stats"}},[s._v("#")]),s._v(" HSteam Stats")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hadmin server stats <stats_category> <stats_name>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"stream-counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-counter"}},[s._v("#")]),s._v(" stream_counter")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("append_total")])]),s._v(" "),e("li",[e("code",[s._v("append_failed")])])]),s._v(" "),e("h3",{attrs:{id:"stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[s._v("#")]),s._v(" stream")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("appends")]),s._v(" or "),e("code",[s._v("append_in_bytes")])]),s._v(" "),e("li",[e("code",[s._v("append_in_record")])]),s._v(" "),e("li",[e("code",[s._v("append_in_requests")])]),s._v(" "),e("li",[e("code",[s._v("append_failed_requests")])])]),s._v(" "),e("h3",{attrs:{id:"subscription-counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscription-counter"}},[s._v("#")]),s._v(" subscription_counter")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("resend_records")]),s._v(": Total number of all resend records")])]),s._v(" "),e("h3",{attrs:{id:"subscription"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscription"}},[s._v("#")]),s._v(" subscription")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("sends")]),s._v(" or "),e("code",[s._v("send_out_bytes")])]),s._v(" "),e("li",[e("code",[s._v("send_out_records")])]),s._v(" "),e("li",[e("code",[s._v("acks")]),s._v(" or "),e("code",[s._v("acknowledgements")])]),s._v(" "),e("li",[e("code",[s._v("request_messages")])]),s._v(" "),e("li",[e("code",[s._v("response_messages")])])]),s._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("\nhadmin server stats stream appends\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------+--------------+--------------+---------------+\n| stream_name | appends_1min | appends_5min | appends_10min |\n+-------------+--------------+--------------+---------------+\n| s1          | 3570393      | 3570572      | 3570604       |\n+-------------+--------------+--------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"interactive-sql-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactive-sql-shell"}},[s._v("#")]),s._v(" Interactive SQL shell")]),s._v(" "),e("p",[s._v("HAdmin has an interactive SQL shell, in which the users can get statistics of\nserver collects.")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("hadmin server sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Use "),e("code",[s._v("show tables;")]),s._v(" to get all the value tables collected from the server. It\nexplains all the available data.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sql> show tables;\n+-------------------------------+------------------------------------------+\n|             Table             |               Description                |\n+-------------------------------+------------------------------------------+\n| streams                       | A  table that  lists the streams created |\n|                               | in the cluster.                          |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| server_append_request_latency | estimated  percentiles latency of server |\n|                               | append request                           |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| server_append_latency         | estimated  percentiles latency of server |\n|                               | appends                                  |\n+-------------------------------+------------------------------------------+\n| append_total_counter          | Total append requests server received.   |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| append_throughput             | estimated  per-stream append  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| subscription_throughput       | estimated  per-stream append  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n|                               | For   each  server   node,  reports  the |\n| read_throughput               | estimated   per-stream  read  throughput |\n|                               | over various time periods.               |\n+-------------------------------+------------------------------------------+\n| append_failed_counter         | Failed append requests.                  |\n+-------------------------------+------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sql> describe streams;\n+----------------------+--------+------------------------------------------+\n|        Column        |  Type  |               Description                |\n+----------------------+--------+------------------------------------------+\n| node_id              | int    | Node ID this row is for.                 |\n+----------------------+--------+------------------------------------------+\n| name                 | string | The name of the stream.                  |\n+----------------------+--------+------------------------------------------+\n| replication_property | string | Replication property configured for this |\n|                      |        | stream.                                  |\n+----------------------+--------+------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("You can use "),e("code",[s._v("select")]),s._v(" intuitively to get and calculate the data you want.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sql> select * from streams;\n+---------+------+----------------------+\n| node_id | name | replication_property |\n+---------+------+----------------------+\n| 1       | demo | node:3               |\n+---------+------+----------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("p",[s._v("Find the top 5 streams that have had the highest throughput in the last 10\nminutes.")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("append_throughput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("throughput_10min"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" total_throughput\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" append_throughput\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" streams "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" streams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" append_throughput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stream_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" stream_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" total_throughput "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);