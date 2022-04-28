(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{521:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"用-docker-手动部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-docker-手动部署"}},[s._v("#")]),s._v(" 用 Docker 手动部署")]),s._v(" "),t("p",[s._v("本文描述了如何用 Docker 运行 HStreamDB 集群。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("本教程只展示了用 Docker 启动 HStreamDB 集群的主要过程。参数的配置没有考虑到任何安全问题，所以请\n请不要在部署时直接使用它们")])]),s._v(" "),t("h2",{attrs:{id:"设置一个-zookeeper-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置一个-zookeeper-集群"}},[s._v("#")]),s._v(" 设置一个 ZooKeeper 集群")]),s._v(" "),t("p",[t("code",[s._v("HServer")]),s._v(" 和 "),t("code",[s._v("HStore")]),s._v(" 需要 ZooKeeper 来存储一些元数据，所以首先我们需要配置一个 ZooKeeper 集群。")]),s._v(" "),t("p",[s._v("你可以在网上找到关于如何建立一个合适的 ZooKeeper 集群的教程。")]),s._v(" "),t("p",[s._v("这里我们只是通过 docker 快速启动一个单节点的 ZooKeeper 为例。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run --rm -d --name zookeeper --network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" zookeeper\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"在存储节点上创建数据文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在存储节点上创建数据文件夹"}},[s._v("#")]),s._v(" 在存储节点上创建数据文件夹")]),s._v(" "),t("p",[s._v("存储节点会把数据存储分片（Shard）中。通常情况下，每个分片映射到不同的物理磁盘。\n假设你的数据盘被挂载（mount）在"),t("code",[s._v("/mnt/data0")]),s._v(" 上")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# creates the root folder for data")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /data/logdevice/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# writes the number of shards that this box will have")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /data/logdevice/NSHARDS\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# creates symlink for shard 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /mnt/data0 /data/logdevice/shard0\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# adds the user for the logdevice daemon")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" logdevice\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# changes ownership for the data directory and the disk")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R logdevice /data/logdevice/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R logdevice /mnt/data0/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("ul",[t("li",[s._v("See\n"),t("a",{attrs:{href:"https://logdevice.io/docs/FirstCluster.html#4-create-data-folders-on-storage-nodes",target:"_blank",rel:"noopener noreferrer"}},[s._v("Create data folders"),t("OutboundLink")],1),s._v("\nfor details")])]),s._v(" "),t("h2",{attrs:{id:"创建配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[s._v("#")]),s._v(" 创建配置文件")]),s._v(" "),t("p",[s._v("这里是一个配置文件的最小示例。")]),s._v(" "),t("p",[s._v("在使用它之前，请根据你的情况进行修改。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server_settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable-nodes-configuration-manager"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"use-nodes-configuration-manager-nodes-configuration"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable-node-self-registration"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable-cluster-maintenance-state-machine"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"client_settings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"enable-nodes-configuration-manager"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"use-nodes-configuration-manager-nodes-configuration"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"admin-client-capabilities"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cluster"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logdevice"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"internal_logs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config_log_deltas"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config_log_snapshots"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"event_log_deltas"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"event_log_snapshots"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"maintenance_log_deltas"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"maintenance_log_snapshots"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"metadata_logs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"nodeset"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"replicate_across"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"zookeeper"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"zookeeper_uri"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip://10.100.2.11:2181"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timeout"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30s"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("如果你有一个多节点的 ZooKeeper，修改 "),t("code",[s._v("zookeeper_uri")]),s._v("部分为 ZooKeeper 集群的节点和端口列表：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"zookeeper"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"zookeeper_uri"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip://10.100.2.11:2181,10.100.2.12:2181,10.100.2.13:2181"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timeout"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30s"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("所有属性的详细解释可以在"),t("a",{attrs:{href:"https://logdevice.io/docs/Config.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("集群配置"),t("OutboundLink")],1),s._v(" 文档中找到。")])])]),s._v(" "),t("h2",{attrs:{id:"存储配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储配置文件"}},[s._v("#")]),s._v(" 存储配置文件")]),s._v(" "),t("p",[s._v("你可以将配置文件存储在 ZooKeeper 中，或存储在每个存储节点上。")]),s._v(" "),t("h3",{attrs:{id:"在-zookeeper-中存储配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-zookeeper-中存储配置文件"}},[s._v("#")]),s._v(" 在 ZooKeeper 中存储配置文件")]),s._v(" "),t("p",[s._v("假设你的一个 ZooKeeper 节点上有一个路径为 "),t("code",[s._v("~/logdevice.conf")]),s._v(" 的配置文件。")]),s._v(" "),t("p",[s._v("通过运行以下命令将配置文件保存到 ZooKeeper 中：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" zookeeper zkCli.sh create /logdevice.conf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/logdevice.conf"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过以下命令验证创建是否成功：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" zookeeper zkCli.sh get /logdevice.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置-hstore-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-hstore-集群"}},[s._v("#")]),s._v(" 配置 HStore 集群")]),s._v(" "),t("p",[s._v("对于存储在 ZooKeeper 中的配置文件，假设配置文件中 "),t("code",[s._v("zookeeper_uri")]),s._v(" 字段的值是 "),t("code",[s._v('"ip:/10.100.2.11:2181"')]),s._v(" ，ZooKeeper中配置文件的路径是 "),t("code",[s._v("/logdevice.conf")]),s._v(" 。")]),s._v(" "),t("p",[s._v("对于存储在每个节点上的配置文件，假设你的文件路径是 `/data/logdevice/logdevice.conf'。")]),s._v(" "),t("h3",{attrs:{id:"在单个节点上启动-admin-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在单个节点上启动-admin-服务器"}},[s._v("#")]),s._v(" 在单个节点上启动 admin 服务器")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置文件存储在 ZooKeeper 中：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run --rm -d --name storeAdmin --network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /data/logdevice:/data/logdevice "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        hstreamdb/hstream:v0.7.1 /usr/local/bin/ld-admin-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --config-path zk:10.100.2.11:2181/logdevice.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --enable-maintenance-manager "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --maintenance-log-snapshotting "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --enable-safety-check-periodic-metadata-update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("如果你有一个多节点的 ZooKeeper，请将"),t("code",[s._v("--config-path")]),s._v("替换为：\n"),t("code",[s._v("--config-path zk:10.100.2.11:2181,10.100.2.12:2181,10.100.2.13:2181/logdevice.conf")])])])]),s._v(" "),t("li",[t("p",[s._v("存储在每个节点的配置文件：")]),s._v(" "),t("p",[s._v("更改 "),t("code",[s._v("--config-path")]),s._v(" 参数为 "),t("code",[s._v("--config-path /data/logdevice/logdevice.conf")])])])]),s._v(" "),t("h3",{attrs:{id:"在每个节点上启动-logdeviced"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在每个节点上启动-logdeviced"}},[s._v("#")]),s._v(" 在每个节点上启动 logdeviced")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("存储在 ZooKeeper 中的配置文件：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run --rm -d --name hstore --network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -v /data/logdevice:/data/logdevice "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        hstreamdb/hstream:v0.7.1 /usr/local/bin/logdeviced "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --config-path zk:10.100.2.11:2181/logdevice.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --name store-0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --local-log-store-path /data/logdevice\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("对于每个节点，你应该将"),t("code",[s._v("--name")]),s._v("更新为一个不同的值，并将"),t("code",[s._v("--address")]),s._v("更新为该节点的 IP 地址。")])])]),s._v(" "),t("li",[t("p",[s._v("存储在每个节点的配置文件：")]),s._v(" "),t("p",[s._v("更改 "),t("code",[s._v("--config-path")]),s._v(" 参数为 "),t("code",[s._v("--config-path /data/logdevice/logdevice.conf")])])])]),s._v(" "),t("h3",{attrs:{id:"bootstrap-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-集群"}},[s._v("#")]),s._v(" Bootstrap 集群")]),s._v(" "),t("p",[s._v("在启动管理服务器和每个存储节点的 logdeviced 之后，现在我们可以 bootstrap 我们的集群。")]),s._v(" "),t("p",[s._v("在管理服务器节点上，运行。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" storeAdmin hadmin store nodes-config bootstrap --metadata-replicate-across "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node:3'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你应该看到像这样的信息：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Successfully bootstrapped the cluster, new nodes configuration version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\nTook "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".019s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("你可以通过运行以下命令来检查集群的状态：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" storeAdmin hadmin store status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("而结果应该是：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("+----+---------+----------+-------+-----------+---------+---------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  NAME   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PACKAGE  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" STATE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  UPTIME   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  SEQ.   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HEALTH STATUS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----+---------+----------+-------+-----------+---------+---------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" store-0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.99")]),s._v(".99 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ALIVE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" min ago "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ENABLED "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HEALTHY       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" store-2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.99")]),s._v(".99 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ALIVE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" min ago "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ENABLED "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HEALTHY       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" store-1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99.99")]),s._v(".99 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ALIVE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" min ago "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ENABLED "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HEALTHY       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+----+---------+----------+-------+-----------+---------+---------------+\nTook "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".745s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("现在我们完成了对 "),t("code",[s._v("HStore")]),s._v(" 集群的设置。")]),s._v(" "),t("h2",{attrs:{id:"配置-hserver-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-hserver-集群"}},[s._v("#")]),s._v(" 配置 HServer 集群")]),s._v(" "),t("p",[s._v("要启动一个单一的 "),t("code",[s._v("HServer")]),s._v(" 实例，你可以修改启动命令以适应你的情况。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -d --name hstream-server --network "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        hstreamdb/hstream:v0.7.1 /usr/local/bin/hstream-server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_HOST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --address "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SERVER_HOST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --zkuri "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZK_ADDRESS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --store-config zk:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZK_ADDRESS")]),s._v("/logdevice.conf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --store-admin-host "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ADMIN_HOST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --replicate-factor "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --server-id "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("$SERVER_HOST")]),s._v("：你的服务器节点的主机 IP 地址，例如 "),t("code",[s._v("192.168.0.1")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("$ZK_ADDRESS")]),s._v(" ：你的 ZooKeeper 集群地址列表，例如 "),t("code",[s._v("10.100.2.11:2181,10.100.2.12:2181,10.100.2.13:2181")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("--store-config")]),s._v("：你的 "),t("code",[s._v("HStore")]),s._v(" 配置文件的路径。应该与启动 "),t("code",[s._v("HStore")]),s._v(" 集群 "),t("code",[s._v("--config-path")]),s._v(" 参数的值一致。")]),s._v(" "),t("li",[t("code",[s._v("--store-admin-host")]),s._v("："),t("code",[s._v("HStore Admin Server")]),s._v(" 节点的 IP 地址。")]),s._v(" "),t("li",[t("code",[s._v("--server-id")]),s._v("：你应该为每个服务器实例设置一个的"),t("strong",[s._v("唯一标识符")])])]),s._v(" "),t("p",[s._v("你可以以同样的方式在不同的节点上启动多个服务器实例。")])])}),[],!1,null,null,null);a.default=n.exports}}]);