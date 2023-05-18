import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

import comandos from "./controller/commands";

dotenv.config();
const server = fastify();
const port: any = process.env.PORT;

server.register(cors, {});

server.get("/", (req, res) => {
  return "Hello World!";
});

server.get("/listar");

server.post("/adicionar", comandos.adicionarCaracteristicas);
//   const { habitat, comidaFavorita, descricao, quantidadePatas, sexo } =
//     req.body;

//   const newUser = await prisma.esquilo.create({
//     data: {
//       habitat,
//       comidaFavorita,
//       descricao,
//       quantidadePatas,
//       // mamifero,
//       sexo,
//     },
//   });

//   return res.status(201);
// });

server.listen({ port }, (erro, address) => {
  if (erro) {
    console.log(erro);
    process.exit(1);
  } else {
    console.log(`Servidor rodando em ${address}`);
  }
});
