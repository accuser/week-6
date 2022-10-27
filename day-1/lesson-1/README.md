# Week 6 Day 1 - HTTP

## Lesson 1 - Hello, World!

- [Sequence Diagram](sequence-diagram.mmd)
- [Source Code](hello-world.js)

## Anatomy of a HTTP Request

With the server running use `curl` in verbose mode to display the HTTP request
and HTTP response:

```bash
$ curl --verbose http://localhost:3000
* Trying 127.0.0.1:3000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.68.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 13
< ETag: W/"d-CgqfKmdylCVXq1NV12r0Qvj2XgE"
< Date: Thu, 27 Oct 2022 10:21:44 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
<
* Connection #0 to host localhost left intact
Hello, World!
```

Lines that start with `>` are the HTTP request and lines that start with `<` are
the HTTP response. Lines that start with `*` are additional information provided
by `curl`, and may be ignored.

### HTTP Request

```
GET / HTTP/1.1
Host: localhost:3000
User-Agent: curl/7.68.0
Accept: */*
```

The first line of the HTTP request is the start line. It includes the HTTP method, the request target, and the HTTP version.

The subsequent lines of the HTTP request are HTTP headers, each consisting of a key / value pair on a single line.

The example HTTP request does not have a body.

### HTTP Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 13
ETag: W/"d-CgqfKmdylCVXq1NV12r0Qvj2XgE"
Date: Thu, 27 Oct 2022 10:21:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello, World!
```

The first line of the HTTP response is the start line, including the HTTP version, the status code, and the status text.

The following lines of the HTTP response are HTTP headers, each consisting of a key / value pair on a single line.

After the headers there is a blank line: it separates the information about the response from the acutal response body.

The response body in this example is the text: `Hello, World!`
