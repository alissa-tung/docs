# Streams

HStreamDB stores data in streams, and this page shows how to operate streams
using Java SDK.

## Prerequisites

- Make sure you have HStreamDB running and accessible.
- Include following import statements:

```java

import io.hstream.HStreamClient;
import io.hstream.Stream;

```

## Connect to a HStreamDB Instance

First, you need to connect to a HStreamDB instance and get a `HStreamClient`
object.

```java

HStreamClient client = HStreamClient.builder().serviceUrl("SERVER_HOST:SERVER_PORT").build();

```

## Get a List of Streams

You can get a list of the streams using the `HStreamClient.listStreams()`
method:

```java

for(Stream stream: client.listStreams()) {
  System.out.println(stream.getStreamName());
}

```

## Create a New Stream

You can create a new stream with 3 replicators (default value) using the
`HStreamClient.createStream()` method:

```java

client.createStream("test_stream");

```

You can also specify the number of replicators:

```java

client.createStream("test_stream", 5);

```

## Delete a Stream

You can delete a stream using the `HStreamClient.deleteStream()` method:

```java

client.deleteStream("test_stream");

```
