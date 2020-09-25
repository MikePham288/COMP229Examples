System.register(["http"], function (exports_1, context_1) {
    "use strict";
    var http_1, hostname, port, server;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            hostname = '127.0.0.1';
            port = 3000;
            server = http_1.default.createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello Fucking World From Mike');
            });
            server.listen(port, hostname, () => {
                console.log(`Server running at http://${hostname}:${port}/`);
            });
            server.listen();
        }
    };
});
