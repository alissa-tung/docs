(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{487:function(t,e,v){"use strict";v.r(e);var r=v(10),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"hstreamdb-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hstreamdb-configuration"}},[t._v("#")]),t._v(" HStreamDB Configuration")]),t._v(" "),v("p",[t._v("HStreamDB configuration file is located at path "),v("code",[t._v("/etc/hstream/config.yaml")]),t._v(" in the docker image from v0.6.3.\nor you can "),v("a",{attrs:{href:"https://raw.githubusercontent.com/hstreamdb/hstream/main/conf/hstream.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("download"),v("OutboundLink")],1),t._v(" the config file")]),t._v(" "),v("h2",{attrs:{id:"configuration-table"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#configuration-table"}},[t._v("#")]),t._v(" Configuration Table")]),t._v(" "),v("h3",{attrs:{id:"hserver"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hserver"}},[t._v("#")]),t._v(" hserver")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Default Value")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("id")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("The identifier of a single HServer node, the value must be given and can be overwritten by cli option "),v("code",[t._v("--server-id")])])]),t._v(" "),v("tr",[v("td",[t._v("address")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('Server listen address value, the value must be given and shouldn\'t be "0.0.0.0", if you intend to start a cluster or trying to connect to the server from a different network. This value can be overwritten by cli option '),v("code",[t._v("--address")])])]),t._v(" "),v("tr",[v("td",[t._v("port")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Server port value, the value must be given and can be overwritten by cli option "),v("code",[t._v("--port")])])]),t._v(" "),v("tr",[v("td",[t._v("internal-port")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Server port value for internal communications between server nodes, the value must be given and can be overwritten by cli option "),v("code",[t._v("--internal-port")])])]),t._v(" "),v("tr",[v("td",[t._v("zkuri")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("The server nodes in the same cluster shares a zookeeper server, this is essential for a server to start Comma separated host:port pairs, each corresponding to a zk zookeeper server. e.g. 127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183 the value must be given and can be overwritten by cli option "),v("code",[t._v("--zkuri")])])]),t._v(" "),v("tr",[v("td",[t._v("log-with-color")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("optional, The options used to control whether print logs with color by the server node, can be overwritten by cli option "),v("code",[t._v("--log-with-color")])])]),t._v(" "),v("tr",[v("td",[t._v("log-level")]),t._v(" "),v("td",[t._v("info")]),t._v(" "),v("td",[t._v("optional, the setting control lof print level by the server node the default value can be overwritten by cli option "),v("code",[t._v("--log-level")])])])])]),t._v(" "),v("h3",{attrs:{id:"hstore"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hstore"}},[t._v("#")]),t._v(" hstore")]),t._v(" "),v("p",[t._v("The configuration for hstore is optional. When the values are not provided, hstreamdb will use the the default values.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Default Value")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("log-level")]),t._v(" "),v("td",[t._v("info")]),t._v(" "),v("td",[t._v("optional")])])])]),t._v(" "),v("p",[t._v("Store admin section specify the client config when connecting to the storage admin server")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Default Value")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("host")]),t._v(" "),v("td",[t._v('"127.0.0.1"')]),t._v(" "),v("td",[t._v("optional")])]),t._v(" "),v("tr",[v("td",[t._v("port")]),t._v(" "),v("td",[t._v("6440")]),t._v(" "),v("td",[t._v("optional")])]),t._v(" "),v("tr",[v("td",[t._v("protocol-id")]),t._v(" "),v("td",[t._v("binaryProtocolId")]),t._v(" "),v("td",[t._v("optional")])]),t._v(" "),v("tr",[v("td",[t._v("conn-timeout")]),t._v(" "),v("td",[t._v("5000")]),t._v(" "),v("td",[t._v("optional")])]),t._v(" "),v("tr",[v("td",[t._v("send-timeout")]),t._v(" "),v("td",[t._v("5000")]),t._v(" "),v("td",[t._v("optional")])]),t._v(" "),v("tr",[v("td",[t._v("recv-timeout")]),t._v(" "),v("td",[t._v("5000")]),t._v(" "),v("td",[t._v("optional")])])])]),t._v(" "),v("h2",{attrs:{id:"command-line-options"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#command-line-options"}},[t._v("#")]),t._v(" Command-Line Options")]),t._v(" "),v("p",[t._v("For the ease of use, we allow user to pass some options to override the configuration in the configuration file when start server with "),v("code",[t._v("hstream-server")]),t._v(" :")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("option")]),t._v(" "),v("th",[t._v("meta var")]),t._v(" "),v("th",[t._v("description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("config-path")]),t._v(" "),v("td",[t._v("PATH")]),t._v(" "),v("td",[t._v("hstream config path")])]),t._v(" "),v("tr",[v("td",[t._v("host")]),t._v(" "),v("td",[t._v("HOST")]),t._v(" "),v("td",[t._v("server host value")])]),t._v(" "),v("tr",[v("td",[t._v("port")]),t._v(" "),v("td",[t._v("INT")]),t._v(" "),v("td",[t._v("server port value")])]),t._v(" "),v("tr",[v("td",[t._v("address")]),t._v(" "),v("td",[t._v("ADDRESS")]),t._v(" "),v("td",[t._v("server address")])]),t._v(" "),v("tr",[v("td",[t._v("internal-port")]),t._v(" "),v("td",[t._v("INT")]),t._v(" "),v("td",[t._v("server channel port value for internal communication")])]),t._v(" "),v("tr",[v("td",[t._v("server-id")]),t._v(" "),v("td",[t._v("UINT32")]),t._v(" "),v("td",[t._v("ID of the hstream server node")])]),t._v(" "),v("tr",[v("td",[t._v("store-admin-port")]),t._v(" "),v("td",[t._v("INT")]),t._v(" "),v("td",[t._v("store admin port value")])]),t._v(" "),v("tr",[v("td",[t._v("zkuri")]),t._v(" "),v("td",[t._v("STR")]),t._v(" "),v("td",[t._v('comma separated host:port pairs, each corresponding to a zk zookeeper server. e.g."127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183"')])]),t._v(" "),v("tr",[v("td",[t._v("log-level")]),t._v(" "),v("td",[t._v("<critical | fatal | warning | info | debug>")]),t._v(" "),v("td",[t._v("Server log level")])]),t._v(" "),v("tr",[v("td",[t._v("log-with-color")]),t._v(" "),v("td",[t._v("FLAG")]),t._v(" "),v("td",[t._v("Server log with color")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);