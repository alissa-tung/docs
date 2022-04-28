(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{528:function(t,a,r){"use strict";r.r(a);var e=r(10),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"hstream-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hstream-storage"}},[t._v("#")]),t._v(" HStream Storage")]),t._v(" "),r("p",[t._v("HStream Storage (HStore) 作为 HStreamDB 的核心存储组件，它是专门为流式数据设计的低延时存储组件，不但能够分布式持久化存储大规模实时数据，而且能够通过 Auto-Tiering 机制，无缝对接 S3 之类的大容量二级存储，实现历史数据和实时数据的统一存储。")]),t._v(" "),r("p",[t._v("HStream Storage (HStore) 的核心存储模型是非常贴合流式数据的日志模型，数据流本身可以看作是一个无限增长的日志，它支持的典型操作包括追加写和区间读，同时数据流是不可变的，一般不支持更新操作。\nHStream Storage (HStore)")]),t._v(" "),r("h2",{attrs:{id:"hstream-storage-hstore-可分为以下几个层次"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hstream-storage-hstore-可分为以下几个层次"}},[t._v("#")]),t._v(" HStream Storage (HStore) 可分为以下几个层次")]),t._v(" "),r("h3",{attrs:{id:"streaming-data-api-层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#streaming-data-api-层"}},[t._v("#")]),t._v(" Streaming Data API 层")]),t._v(" "),r("p",[t._v("该层提供核心的数据流管理和读写操作，包括数据流的创建、删除，以及向数据流中写入数据和消费数据流中的数据。在 HStore 对创建的数据流的数量没有限制，同时能支持大量数据流的并发写入，在大量数据流并发写入的时候依然能够保持稳定的低延迟，HStore 的存储设计中并没有按照数据流来做存储， 因此数据流的创建是非常轻量的操作。针对数据流的特点，HStore 提供了 append 操作支持数据快速写入，同时在读取流数据方面，提供了基于订阅语义的 read 操作，数据流中新写入的数据会被实时推送给数据消费者。")]),t._v(" "),r("h3",{attrs:{id:"复制层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制层"}},[t._v("#")]),t._v(" 复制层")]),t._v(" "),r("p",[t._v("该层主要基于优化的 Flexible Paxos 共识引擎实现了流数据的强一致复制，保证数据的容错和可高可用性。同时通过非确定性的数据分布策略，最大化了集群数据的可用性。而且支持复制组在线重配置，实现了无缝的集群数据均衡和水平扩展。")]),t._v(" "),r("h3",{attrs:{id:"本地存储层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地存储层"}},[t._v("#")]),t._v(" 本地存储层")]),t._v(" "),r("p",[t._v("该层主要负责数据的本地持久化存储，实现上基于优化的 RocksDB 存储引擎 封装了流数据的存取接口，可支持大量数据低延迟的写入和读取。")]),t._v(" "),r("h3",{attrs:{id:"二级存储层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二级存储层"}},[t._v("#")]),t._v(" 二级存储层")]),t._v(" "),r("p",[t._v("该层为多种长期存储系统提供了统一的接口封装，比如 HDFS, AWS S3 等，支持将历史数据自动卸载到这些二级存储系统上，同时也可以通过统一的 Streaming Data 接口来访问。")])])}),[],!1,null,null,null);a.default=s.exports}}]);