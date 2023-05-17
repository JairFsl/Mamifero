import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

dotenv.config();
const server = fastify();

// server.register(cors, {

// })

const port: any = process.env.PORT;

server.get("/", (req, res) => {
  return "Hello World!";
});

server.listen({ port }, (erro, address) => {
  if (erro) {
    console.log(erro);
    process.exit(1);
  } else {
    console.log(`Servidor rodando em ${address}`);
  }
});
