import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function adicionarCaracteristicas(req: any, res: any) {
  const { habitat, comidaFavorita, descricao, quantidadePatas, sexo } =
    req.body;

  const novoEsquilo = await prisma.esquilo.create({
    data: {
      habitat,
      comidaFavorita,
      descricao,
      quantidadePatas,
      sexo,
    },
  });

  return res.status(201).send("Características Salvas!");
}

export default { adicionarCaracteristicas };
