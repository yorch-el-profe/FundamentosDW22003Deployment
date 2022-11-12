const http = require("node:http");
const os = require("node:os");

const server = http.createServer(function (_, response) {
	response.setHeader("Content-Type", "text/html");
	response.write(`<h1>Sistema Operativo: ${os.platform()}</h1>`);
	response.end();
});

server.listen(8080, function () {
	console.log("Servidor escuchando el puerto 8080");
});
