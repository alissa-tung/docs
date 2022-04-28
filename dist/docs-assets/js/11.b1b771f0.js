(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{457:function(t,r,a){t.exports=a.p+"docs-assets/img/statistics.d9ed78f1.png"},547:function(t,r,a){"use strict";a.r(r);var e=a(10),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"hstreamdb-release-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hstreamdb-release-notes"}},[t._v("#")]),t._v(" HStreamDB release notes")]),t._v(" "),e("h2",{attrs:{id:"v0-7-0-2022-01-28"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-0-2022-01-28"}},[t._v("#")]),t._v(" v0.7.0 [2022-01-28]")]),t._v(" "),e("h3",{attrs:{id:"特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),e("h4",{attrs:{id:"添加透明分区支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加透明分区支持"}},[t._v("#")]),t._v(" 添加透明分区支持")]),t._v(" "),e("p",[t._v("HStreamDB 已经支持大规模数据流的存储和管理。随着上个版本新增加的集群支持，我们决\n定用透明分区来改善单个 stream 的可扩展性和读写性能。在 HStreamDB v0.7 中，每个\nstream 都分布在多个服务器节点上，但是在用户看来，一个有分区的 stream 是作为一个\n整体来管理的。因此，用户不需要事先指定分区的数量或任何其他分区逻辑。")]),t._v(" "),e("p",[t._v("在目前的实现中，stream 的每条 record 都应该包含一个分区键来指定一个逻辑分区，\nHStream Server 将负责在存储数据时将这些逻辑分区映射到物理分区。")]),t._v(" "),e("h4",{attrs:{id:"用一致的散列算法重新设计负载平衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用一致的散列算法重新设计负载平衡"}},[t._v("#")]),t._v(" 用一致的散列算法重新设计负载平衡")]),t._v(" "),e("p",[t._v("我们在这个版本中用一致性哈希算法调整了我们的负载均衡策略。当前，不管是写请求还是\n读请求，都是以读写请求中的所带分区键来分配的。")]),t._v(" "),e("p",[t._v("在上一个版本中，我们的负载平衡是基于节点的硬件使用情况进行分配的。而这样做的主要\n的问题是，它在很大程度上依赖于一个 leader 节点去收集这些信息。同时，这种策略需要\n与节点与 leader 进行通信，以获得分配结果。总体来看过去的实现过于复杂，效率太低。\n因此我们重新实现了负载均衡器，不仅核心算法更加简洁，也能很好应对集群成员变更的时\n候的重分配问题。")]),t._v(" "),e("h4",{attrs:{id:"添加-hstream-admin-管理工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-hstream-admin-管理工具"}},[t._v("#")]),t._v(" 添加 HStream Admin 管理工具")]),t._v(" "),e("p",[t._v("我们提供了一个新的管理工具，以方便用户对 HStreamDB 的维护和管理。HAdmin 可以用于\n监控和管理 HStreamDB 的各种资源，包括 stream、订阅和 server 节点。以前嵌入在\nHStream SQL Shell 中的 HStream Metrics，现已迁移到了新的 HAdmin 中。简而言之\n，HAdmin 是为 HStreamDB 操作人员准备的，而 SQL Shell 是为 HStreamDB 终端用户准备\n的。")]),t._v(" "),e("h4",{attrs:{id:"部署和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署和使用"}},[t._v("#")]),t._v(" 部署和使用")]),t._v(" "),e("ul",[e("li",[t._v("支持通过脚本快速部署，见：\n"),e("RouterLink",{attrs:{to:"/zh/latest/deployment/deploy-docker.html"}},[t._v("使用 Docker 手动部署")])],1),t._v(" "),e("li",[t._v("支持用配置文件来配置 HStreamDB，见：\n"),e("RouterLink",{attrs:{to:"/zh/latest/reference/config.html"}},[t._v("HStreamDB Configuration")])],1),t._v(" "),e("li",[t._v("支持一步到位的 docker-compose 的快速上手，见：\n"),e("RouterLink",{attrs:{to:"/zh/latest/start/quickstart-with-docker.html"}},[t._v("使用 Docker Compose 快速上手")])],1)]),t._v(" "),e("p",[e("strong",[t._v("为了使用 HStreamDB v0.7，请使用\n"),e("a",{attrs:{href:"https://github.com/hstreamdb/hstreamdb-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("hstreamdb-java v0.7.0"),e("OutboundLink")],1),t._v(" 及以上版\n本")])]),t._v(" "),e("h2",{attrs:{id:"v0-6-0-2021-11-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-0-2021-11-04"}},[t._v("#")]),t._v(" v0.6.0 [2021-11-04]")]),t._v(" "),e("h3",{attrs:{id:"特性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),e("h4",{attrs:{id:"新增-hserver-集群支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增-hserver-集群支持"}},[t._v("#")]),t._v(" 新增 HServer 集群支持")]),t._v(" "),e("p",[t._v("作为一款"),e("a",{attrs:{href:"https://hstream.io/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("云原生分布式流数据库"),e("OutboundLink")],1),t._v("，HStreamDB 从设计之初就采\n用了计算和存储分离的架构，目标是支持计算层和存储层的独立水平扩展。在 HStreamDB\n之前的版本中，存储层 HStore 已经具备了水平扩展的能力。在即将发布的 v0.6 版本中，\n计算层 HServer 也将支持集群模式，从而可以实现随客户端请求和计算任务的规模对计算\n层的 HServer 节点进行扩展。")]),t._v(" "),e("p",[t._v("HStreamDB 的计算节点 HServer 整体上被设计成无状态的，因此非常适合进行快速的水平\n扩展。v0.6 的 HServer 集群模式主要包含以下特性：")]),t._v(" "),e("ul",[e("li",[t._v("自动节点健康检测和失败恢复")]),t._v(" "),e("li",[t._v("按照节点负载情况对客户端请求或者计算任务进行调度和均衡")]),t._v(" "),e("li",[t._v("支持节点的动态加入和退出")])]),t._v(" "),e("h4",{attrs:{id:"新增共享订阅功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增共享订阅功能"}},[t._v("#")]),t._v(" 新增共享订阅功能")]),t._v(" "),e("p",[t._v("在之前的版本中，一个 Subscription 同时只允许一个客户端进行消费，这在较大数据量的\n场景下限制了客户端的消费能力。因此，为了支持扩展客户端的消费能力，v0.6 版本新增\n了共享订阅功能，它允许多个客户端在一个订阅上并行消费。")]),t._v(" "),e("p",[t._v("同一个订阅里包含的所有的消费者组成一个消费者组(Consumer Group)，HServer 会通过\nround-robin 的方式向消费者组中的多个消费者派发数据。消费者组中的成员支持随时动态\n变更，客户端可以在任何时候加入或退出当前的消费者组。")]),t._v(" "),e("p",[t._v("HStreamDB 目前支持 at least once 的消费语义，每条数据在客户端消费完之后需要回复\nAck，如果超时未接收到某条数据的 Ack，HServer 会自动重新向可用的消费者投递该条数\n据。")]),t._v(" "),e("p",[t._v("同一个消费者组中的成员共享消费进度，HStream 会根据客户端 Ack 的情况维护消费进度\n，客户端任何时候都可以从上一次的位置恢复消费。")]),t._v(" "),e("p",[t._v("需要注意的是，v0.6 的共享订阅模式下不保持数据的顺序，后续共享订阅将支持按 key 派\n发的模式，可以支持相同 key 的数据有序交付。")]),t._v(" "),e("h4",{attrs:{id:"新增统计功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增统计功能"}},[t._v("#")]),t._v(" 新增统计功能")]),t._v(" "),e("p",[t._v("v0.6 还增加了基本的数据统计功能，支持对诸如 stream 的写入速率，消费速率等关键指\n标进行统计。用户可以通过 HStream CLI 来查看相应的统计指标，如下图所示。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(457),alt:""}})]),t._v(" "),e("h4",{attrs:{id:"新增数据写入-rest-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增数据写入-rest-api"}},[t._v("#")]),t._v(" 新增数据写入 Rest API")]),t._v(" "),e("p",[t._v("v0.6 版本增加了向 HStreamDB 写入数据的 Rest API，通过此 API 并结合 EMQ X 开源版\n的 web hook 功能，可以实现 EMQ X 和 HStreamDB 的快速集成。")]),t._v(" "),e("h4",{attrs:{id:"hstreamdb-java-sdk-更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hstreamdb-java-sdk-更新"}},[t._v("#")]),t._v(" HStreamDB Java SDK 更新")]),t._v(" "),e("p",[t._v("HStreamDB-Java 是目前主要支持的 HStreamDB 客户端（后续将会有更多语言的客户端支持\n），用户主要通过该客户端来使用 HStreamDB 的大多数功能。")]),t._v(" "),e("p",[t._v("即将发布的 HStreamDB Java SDK v0.6 主要包含以下特性：")]),t._v(" "),e("ul",[e("li",[t._v("新增对 HStreamDB 集群的支持")]),t._v(" "),e("li",[t._v("新增对共享订阅的支持")]),t._v(" "),e("li",[t._v("重构部分 API")]),t._v(" "),e("li",[t._v("修复了一些已知的问题")])])])}),[],!1,null,null,null);r.default=s.exports}}]);