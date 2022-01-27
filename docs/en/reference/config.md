# HStreamDB Configuration

HStreamDB configuration file is located at path `/etc/hstream/config.yaml` in the docker image from v0.6.3.
or you can [download](https://raw.githubusercontent.com/hstreamdb/hstream/main/conf/hstream.yaml) the config file

## Configuration Table

### hserver

| Name | Default Value | Description |
| ---- | ------------- | ----------- |
| id   |      | The identifier of a single HServer node, the value must be given and can be overwritten by cli option `--server-id` |
| address |  | Server listen address value, the value must be given and shouldn't be "0.0.0.0", if you intend to start a cluster or trying to connect to the server from a different network. This value can be overwritten by cli option `--address` |
| port |  | Server port value, the value must be given and can be overwritten by cli option `--port`
| internal-port |  | Server port value for internal communications between server nodes, the value must be given and can be overwritten by cli option `--internal-port` |
| zkuri |  | The server nodes in the same cluster shares a zookeeper server, this is essential for a server to start Comma separated host:port pairs, each corresponding to a zk zookeeper server. e.g. 127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183 the value must be given and can be overwritten by cli option `--zkuri` |
log-with-color | true | optional, The options used to control whether print logs with color by the server node, can be overwritten by cli option `--log-with-color` |
log-level | info | optional, the setting control lof print level by the server node the default value can be overwritten by cli option `--log-level` |

### hstore

The configuration for hstore is optional. When the values are not provided, hstreamdb will use the the default values.

| Name | Default Value | Description |
| ---- | ------------- | ----------- |
|log-level| info | optional |

Store admin section specify the client config when connecting to the storage admin server
| Name | Default Value | Description |
| ---- | ------------- | ----------- |
| host | "127.0.0.1" | optional |
| port | 6440 | optional |
| protocol-id | binaryProtocolId | optional |
| conn-timeout | 5000 | optional |
| send-timeout | 5000 | optional |
| recv-timeout | 5000 | optional |

## Command-Line Options

For the ease of use, we allow user to pass some options to override the configuration in the configuration file when start server with `hstream-server` :

| option | meta var | description |
| ------ | -------- | ----------- |
| config-path | PATH     | hstream config path |
| host        | HOST     | server host value   |
| port        | INT      | server port value   |
| address     | ADDRESS  | server address      |
| internal-port |  INT   | server channel port value for internal communication |
| server-id     | UINT32 | ID of the hstream server node |
| store-admin-port | INT | store admin port value |
| zkuri            | STR | comma separated host:port pairs, each corresponding to a zk zookeeper server. e.g."127.0.0.1:2181,127.0.0.1:2182,127.0.0.1:2183" |
| log-level | <critical \| fatal \| warning \| info \| debug> | Server log level |
| log-with-color | FLAG | Server log with color |