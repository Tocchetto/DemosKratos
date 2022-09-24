function sendServer(data){
  const socketServer = new WebSocket("localhost", ["TCP"]);

  socketServer.send(data)
}