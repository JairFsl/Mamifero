import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

import comandos from "./controller/commands";

dotenv.config();
const server = fastify();
const port: any = process.env.PORT;

server.register(cors, {});

server.get("/", (req, res) => {
  return `Você pode usar as rotas:
   /adicionar
   /listar`;
});

// Rota para listar todas as características do mamífero (Esquilo)
server.get("/listar", comandos.listarCaracteristicas);

// Rota para adicionar características ao mamífero (Esquilo)
server.post("/adicionar", comandos.adicionarCaracteristicas);

server.listen({ port }, (erro, address) => {
  if (erro) {
    console.log(erro);
    process.exit(1);
  } else {
    console.log(`Servidor rodando em ${address}`);
  }
});
